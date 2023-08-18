import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export const functionalAuthGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  return true;
};
