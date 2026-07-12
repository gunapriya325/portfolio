import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { About } from './about/about';
import { Skill } from './skill/skill';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { Certificates } from './certificates/certificates';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'navbar',
    component: Navbar,
  },
  {
    path: 'skill',
    component: Skill,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'experience',
    component: Experience,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path:'certificates',
    component:Certificates,
  }

];
