import { Component, Input } from '@angular/core';
import { PasswordInputComponent } from "./password-input/password-input.component";
import { PasswordStrengthComponent } from "./password-strength/password-strength.component";
import { FormControl } from '@angular/forms';
import { PasswordStrengthService } from '../services/password-strength.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-components',
    standalone: true,
    templateUrl: './components.component.html',
    styleUrl: './components.component.scss',
    imports: [PasswordInputComponent, PasswordStrengthComponent, FormsModule, ReactiveFormsModule]
})
export class ComponentsComponent {
 passwordControl: FormControl = new FormControl();
    constructor(public passwordStrengthService: PasswordStrengthService) { }
}
