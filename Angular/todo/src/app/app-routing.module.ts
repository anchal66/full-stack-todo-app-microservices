import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ListToDoComponent } from './components/list-to-do/list-to-do.component';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouteGuardService } from './services/route-guard.service';

const routes =[
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent},
    {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]},
    {path: 'todos', component: ListToDoComponent, canActivate: [RouteGuardService]},
    {path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService]},
    {path: '**', component: ErrorComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}