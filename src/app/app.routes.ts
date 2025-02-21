import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'footer',component:FooterComponent
    },
    {
        path:'header',component:HeaderComponent
    },
    {
        path:'blog',component:BlogComponent
    },
    {
        path:'gallery',component:GalleryComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent
    },
    {
        path:'**',component:PnfComponent
    }
];
