import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const ConstructionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Check if user is authenticated
  const authData = sessionStorage.getItem('construction-auth');
  const expiryData = sessionStorage.getItem('construction-auth-expiry');
  
  if (authData !== 'true' || !expiryData) {
    // Clear any invalid auth data
    sessionStorage.removeItem('construction-auth');
    sessionStorage.removeItem('construction-auth-expiry');
    return router.parseUrl('/construction');
  }
  
  // Check if session has expired
  const expiryDate = new Date(expiryData);
  const now = new Date();
  
  if (now > expiryDate) {
    // Session expired, clear auth data and redirect
    sessionStorage.removeItem('construction-auth');
    sessionStorage.removeItem('construction-auth-expiry');
    return router.parseUrl('/construction');
  }
  
  // User is authenticated and session is valid
  return true;
};
