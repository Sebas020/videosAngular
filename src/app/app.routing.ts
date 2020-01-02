import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { VideoNewComponent } from './components/video-new/video-new.component';
import { VideoEditComponent } from './components/video-edit/video-edit.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component'

import { IdentityGuard } from './services/identity.guard';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'inicio', component: HomeComponent},
	{path: 'inicio/:page', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'logout/:sure', component: LoginComponent},
	{path: 'registro', component: RegisterComponent},
	{path: 'error', component: ErrorComponent},
	{path: 'ajustes', canActivate: [IdentityGuard], component: UserEditComponent},
	{path: 'guardar-favorito', canActivate: [IdentityGuard], component: VideoNewComponent},
	{path: 'editar-favorito/:id', canActivate: [IdentityGuard], component: VideoEditComponent},
	{path: 'video/:id', canActivate: [IdentityGuard], component: VideoDetailComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);