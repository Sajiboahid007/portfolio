import { Component, signal, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { PORTFOLIO_DATA } from '../../models/portfolio.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    TooltipModule,
    DialogModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly sanitizer = inject(DomSanitizer);

  readonly data = PORTFOLIO_DATA.personal;

  readonly isSubmitting = signal<boolean>(false);
  readonly isSuccess = signal<boolean>(false);
  readonly copiedField = signal<string | null>(null);
  readonly isMapModalVisible = signal<boolean>(false);

  get googleMapsUrl(): string {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(this.data.location);
  }

  get embedMapUrl(): SafeResourceUrl {
    const rawUrl = 'https://maps.google.com/maps?q=' + encodeURIComponent(this.data.location) + '&t=&z=13&ie=UTF8&iwloc=&output=embed';
    return this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }

  openMap(): void {
    this.isMapModalVisible.set(true);
  }

  closeMap(): void {
    this.isMapModalVisible.set(false);
  }

  readonly contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    // Simulate reliable API/EmailJS submission
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSuccess.set(true);
      this.contactForm.reset();

      setTimeout(() => {
        this.isSuccess.set(false);
      }, 6000);
    }, 1200);
  }

  copyToClipboard(text: string, label: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    navigator.clipboard.writeText(text).then(() => {
      this.copiedField.set(label);
      setTimeout(() => {
        this.copiedField.set(null);
      }, 2500);
    });
  }
}
