import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { environment } from '@environments/environment';
import { ConstructionAuthService } from '../../services/construction-auth.service';
import { NavigationComponent } from '../../components/navigation/navigation';

@Component({
  selector: 'app-construction',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule, InputTextModule, ButtonModule, CardModule, MessageModule, NavigationComponent],
  templateUrl: './construction.html',
  styleUrl: './construction.scss'
})
export class ConstructionComponent implements OnInit {
  password = '';
  passwordForm = new FormGroup({
    password: new FormControl('', [Validators.required])
  });
  isAuthenticated = signal(false);
  errorMessage = signal('');
  redirectCountdown = signal(3);
  
  // Get password from environment variable
  private readonly CONSTRUCTION_PASSWORD = environment.constructionPassword;

  constructor(private authService: ConstructionAuthService) {}

  ngOnInit() {
    // Check if user is already authenticated and not expired
    if (this.authService.isSessionValid()) {
      this.isAuthenticated.set(true);
      this.startRedirectCountdown();
    }
  }


  private startRedirectCountdown(): void {
    const countdown = setInterval(() => {
      const current = this.redirectCountdown();
      if (current <= 1) {
        clearInterval(countdown);
        this.continueToSite();
      } else {
        this.redirectCountdown.set(current - 1);
      }
    }, 1000);
  }

  onSubmit() {
    if (this.passwordForm.value.password === this.CONSTRUCTION_PASSWORD) {
      this.isAuthenticated.set(true);
      this.errorMessage.set('');
      // Store authentication with expiry in sessionStorage
      this.authService.setAuthWithExpiry();
      this.startRedirectCountdown();
    } else {
      this.errorMessage.set('Incorrect password. Please try again.');
      this.passwordForm.patchValue({ password: '' });
    }
  }

  logout() {
    this.isAuthenticated.set(false);
    this.authService.clearAuth();
  }

  continueToSite() {
    // Redirect to the main app or remove the construction overlay
    // For now, we'll just reload the page to show the main content
    window.location.href = '/';
  }
}
