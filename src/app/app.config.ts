import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { customInterceptor } from './Service-Folder/custom.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(
     withInterceptors([
        customInterceptor
      ])
  ),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)  ]
  //if we want to use api call then we have to import provideHttpClient()
};
