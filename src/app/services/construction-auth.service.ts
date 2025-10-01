import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConstructionAuthService {
  private readonly AUTH_KEY = 'construction-auth';
  private readonly EXPIRY_KEY = 'construction-auth-expiry';
  
  isAuthenticated = signal(false);

  constructor(private router: Router) {
    // Check authentication status on service initialization
    this.checkAuthStatus();
  }

  /**
   * Check if the current session is valid
   */
  isSessionValid(): boolean {
    const authData = sessionStorage.getItem(this.AUTH_KEY);
    const expiryData = sessionStorage.getItem(this.EXPIRY_KEY);
    
    if (authData !== 'true' || !expiryData) {
      return false;
    }
    
    const expiryDate = new Date(expiryData);
    const now = new Date();
    
    return now < expiryDate;
  }

  /**
   * Check authentication status and update signal
   */
  checkAuthStatus(): boolean {
    const isValid = this.isSessionValid();
    this.isAuthenticated.set(isValid);
    
    if (!isValid) {
      this.clearAuth();
    }
    
    return isValid;
  }

  /**
   * Set authentication with expiry (24 hours from now)
   */
  setAuthWithExpiry(): void {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 1); // Expires in 24 hours
    
    sessionStorage.setItem(this.AUTH_KEY, 'true');
    sessionStorage.setItem(this.EXPIRY_KEY, expiryDate.toISOString());
    this.isAuthenticated.set(true);
  }

  /**
   * Clear authentication data
   */
  clearAuth(): void {
    sessionStorage.removeItem(this.AUTH_KEY);
    sessionStorage.removeItem(this.EXPIRY_KEY);
    this.isAuthenticated.set(false);
  }

  /**
   * Logout and redirect to construction page
   */
  logout(): void {
    this.clearAuth();
    this.router.navigate(['/construction']);
  }

  /**
   * Get remaining time until expiry (in minutes)
   */
  getRemainingTime(): number {
    const expiryData = sessionStorage.getItem(this.EXPIRY_KEY);
    if (!expiryData) return 0;
    
    const expiryDate = new Date(expiryData);
    const now = new Date();
    const diffMs = expiryDate.getTime() - now.getTime();
    
    return Math.max(0, Math.floor(diffMs / (1000 * 60))); // Return minutes
  }
}
