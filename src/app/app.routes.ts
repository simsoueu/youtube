import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage)
  },

  {
    path: 'profile/edit',
    loadComponent: () => import('./profile/profile-edit.page').then(m => m.ProfileEditPage),
  },
  {
    path: 'details',
    loadComponent: () => import('./details/details.page').then(m => m.DetailsPage)
  },
  {
    path: 'sheet',
    loadComponent: () => import('./sheet/sheet.page').then(m => m.SheetPage)
  },
];
