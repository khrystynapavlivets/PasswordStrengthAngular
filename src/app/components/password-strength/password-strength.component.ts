import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordStrengthService } from '../../services/password-strength.service';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss'
})
export class PasswordStrengthComponent {
  @Input() passwordControl: FormControl = new FormControl();

  constructor(public service: PasswordStrengthService) { }

  // get strengthClass(): string {
  //   return this.service.getPasswordStrengthClass(
  //     this.passwordControl.value
  //   );
  // }


  // get strengthClass(): string {
  //   console.log('Password:', this.passwordControl.value);
  //   console.log('Is Empty:', this.service.isEmpty(this.passwordControl.value));
  //   console.log('Is Weak:', this.service.isWeak(this.passwordControl.value));
  //   console.log('Is Simple:', this.service.isSimple(this.passwordControl.value));
  //   console.log('Is Medium:', this.service.isMedium(this.passwordControl.value));
  //   console.log('Is Strong:', this.service.isStrong(this.passwordControl.value));

  //   return this.service.getPasswordStrengthClass(this.passwordControl.value);
  // }
}
