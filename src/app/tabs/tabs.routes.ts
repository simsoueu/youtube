import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/history.page').then((m) => m.HistoryPage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../start/start.page').then((m) => m.StartPage),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('../progress/progress.page').then((m) => m.ProgressPage),
      },
      {
        path: 'profile/profile-edit',
        loadComponent: () =>
          import('../profile/profile-edit.page').then((m) => m.ProfileEditPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
