import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'module-one', loadChildren: () => import('./module-one/module-one.module').then(m => m.ModuleOneModule) }, 
  { path: 'module-two', loadChildren: () => import('./module-two/module-two.module').then(m => m.ModuleTwoModule) },
  { path: '',
    redirectTo: '',
    pathMatch: 'full' 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
