import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

import { PasswordStrengthService } from '../../services/password-strength.service';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss'
})
export class PasswordInputComponent {

  @Input() passwordControl: FormControl = new FormControl();

  constructor(public PasswordStrengthService: PasswordStrengthService) { }
}
