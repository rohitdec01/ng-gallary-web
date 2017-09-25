import { Routes } from '@angular/router';
import { GallaryComponent } from  './app/gallary/gallary.component';
import { ImageDetailComponent } from './app/image/image-detail.component';

export const appRoutes:Routes = [
	{ path: "gallary",component: GallaryComponent},
	{ path: "image/:id",component: ImageDetailComponent},
	{ path: "",redirectTo: "/gallary", pathMatch: 'full'},
];