import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})

export class PasswordStrengthService {

  constructor() { }

  isEmpty(password: string | null): boolean {
    return password == null || password.length === 0;
  }

  isWeak(password: string | null | undefined): boolean {
    return password !== null && password !== undefined && password.length < 8;
  }

  isSimple(password: string | null): boolean {
    return (
      !!password &&
      password.length >= 8 &&
      (/^[a-zA-Z]+$/.test(password) ||
        /^\d+$/.test(password) ||
        /^[!"#£$%&'()*+,\-./:;<=>?@_`{}~]+$/.test(password))
    );
  }
  isMedium(password: string | null): boolean {
    return true;
  }
  isStrong(password: string | null): boolean {
    return !!password && password.length >= 8 &&
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?_`~])/.test(password);
  }

  getPasswordStrengthClass(password: string | null): string {
    switch (true) {
      case this.isEmpty(password): return 'gray';
      case this.isSimple(password): return 'red-simple';
      case this.isWeak(password): return 'red';
      case this.isStrong(password): return 'green';
      // case this.isStrong(password): return 'gray-medium';
      default: return 'gray-medium';
    }
  }
}






















