import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { Router } from 'express';
const routes: Routes = [
  { path: 'inicio-sesion', component: InicioSesionComponent }, 
  { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' }, 
  { path: '', redirectTo: 'inicio-sesion'}
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
