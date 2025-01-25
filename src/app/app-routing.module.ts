import { Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

export const routes: Routes = [
  { path: 'user', component: UserPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' } // Default route
];