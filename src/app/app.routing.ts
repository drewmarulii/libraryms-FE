import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModuleComponent } from "./components/shared-module";
import { LoginComponent } from "./components/login/login.component";
import { ButtonComponent } from "./components/button/button.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { BaseComponent } from "./components/base/base.component";
import { BaseModule } from "./components/base/base.module";
import { UserModule } from "./pages/users/users.module";

const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        component : BaseComponent,
        path : 'dashboard',
        children : [{
            path : '',
            component : DashboardComponent
        }]
    },
    {
        component : BaseComponent,
        path : 'users',
        // loadChildren: () => import('./pages/users/user.module').then(u => UserModule)
    }
]

@NgModule({
    declarations : [
        LoginComponent,
        DashboardComponent
    ],
    imports : [
        RouterModule.forRoot(routes),
        SharedModuleComponent,
        ButtonComponent,
        CommonModule,
        ReactiveFormsModule    
    ],
    exports : [
        RouterModule,
        LoginComponent,
        BaseModule,
        DashboardComponent,
        ButtonComponent
    ]
})
export class AppRouting {

}