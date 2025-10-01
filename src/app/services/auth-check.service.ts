import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConstructionAuthService } from './construction-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCheckService {
  constructor(
    private router: Router,
    private authService: ConstructionAuthService
  ) {
    // Check authentication on every navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkAuthOnNavigation();
      });
  }

  private checkAuthOnNavigation(): void {
    // Only check if we're not already on the construction page
    if (this.router.url !== '/construction') {
      if (!this.authService.isSessionValid()) {
        console.log('Session expired or invalid, redirecting to construction page');
        this.router.navigate(['/construction']);
      }
    }
  }

  /**
   * Start periodic session checks (every 5 minutes)
   */
  startPeriodicChecks(): void {
    setInterval(() => {
      if (!this.authService.isSessionValid()) {
        console.log('Periodic check: Session expired, redirecting to construction page');
        this.router.navigate(['/construction']);
      }
    }, 5 * 60 * 1000); // Check every 5 minutes
  }
}
