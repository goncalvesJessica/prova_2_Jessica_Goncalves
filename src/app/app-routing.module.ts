import { ListarComponent } from './listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'form/:id', component: FormComponent },
  { path: 'form', component: FormComponent },
  { path: 'listar', component: ListarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
