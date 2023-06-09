import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { JavacmdComponent } from './javacmd/javacmd.component';
import { JavaguiComponent } from './javagui/javagui.component';

const routes: Routes = [
  { path: 'frontend', component: FrontendComponent },
  { path: 'backend', component: BackendComponent },
  { path: 'javacli', component: JavacmdComponent },
  { path: 'javagui', component: JavaguiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
