import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit, OnDestroy {
  // ================================================
  // ---------------- VARIABLES -----------------
  // ================================================

  formLogin: FormGroup;
  isloading = false;
  showPassword = false;
  isGoogleLoading = false;
  private readonly destroy$ = new Subject<void>();

  // ================================================
  // ---------------- CONSTRUCTEURS -----------------
  // ================================================

  constructor(
    private readonly formBuilder: FormBuilder,
    // private readonly authService: Authentification,
    private readonly router: Router // private readonly messagingService: NotificationPushService, // private readonly messageService: MessageService, // private readonly googleAuthService: GoogleAuthService
  ) {
    this.formLogin = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  // ================================================
  // ---------------- AUTH NORMAL -----------------
  // ================================================

  // ===================================================
  // ---------------- AUTH AVEC GOOGLE -----------------
  // ===================================================

  // ===================================================
  // ---------------- AUTH AVEC TELEPHONE -----------------
  // ===================================================

  // ========================================================
  // ---------------- FONCTIONS UTILITAIRES -----------------
  // ========================================================

  //Basculer la visibilité du mot de passe
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Getters pour l'accès aux contrôles du formulaire
  get login() {
    return this.formLogin.get('login');
  }

  get password() {
    return this.formLogin.get('password');
  }

  // ================================================================
  // ---------------- FONCTIONS NOTIFICATIONS -----------------
  // ================================================================
  //   showSucces(message: string, summary: string = 'Succès'): void {
  //     this.messageService.add({
  //       severity: 'success',
  //       summary: summary,
  //       detail: message,
  //     });
  //   }

  //   showError(error: string, summary: string = 'Erreur'): void {
  //     this.messageService.add({
  //       severity: 'error',
  //       summary: summary,
  //       detail: error,
  //     });
  //   }

  //   showWarning(message: string, summary: string = 'Attention'): void {
  //     this.messageService.add({
  //       severity: 'warn',
  //       summary: summary,
  //       detail: message,
  //     });
  //   }
}
