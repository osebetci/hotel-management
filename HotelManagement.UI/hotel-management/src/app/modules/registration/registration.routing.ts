import { OrganizasyonSemasiComponent } from './organizasyon-semasi/organizasyon-semasi.component';
import { PersonelIslemleriModule } from './personel-islemleri/personel-islemleri.module';
import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';

export const RegistrationRoutes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'kullanici-islemleri',
          loadChildren: () =>
            import('./kullanici-islemleri/kullanici-islemleri.module').then(
              (m) => m.KullaniciIslemleriModule
            ),
        },
        {
          path: 'personel-islemleri',
          loadChildren: () =>
            import('./personel-islemleri/personel-islemleri.module').then(
              (m) => m.PersonelIslemleriModule
            ),
        },
        {
          path: 'organizasyon-semasi',
          canActivate: [AuthGuardService],
          data: { pageId: 10 },
          component: OrganizasyonSemasiComponent,
        },
      ],
    },
  ];
  