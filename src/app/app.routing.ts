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
import { MemberModule } from "./pages/members/members.module";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CategoryModule } from "./pages/categories/categories.module";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        component: BaseComponent,
        path: 'dashboard',
        children: [{
            path: '',
            component: DashboardComponent
        }]
    },
    {
        component: BaseComponent,
        path: 'users',
        loadChildren: () => import('./pages/users/users.module').then(u => UserModule)
    },
    {
        component: BaseComponent,
        path: 'members',
        loadChildren: () => import('./pages/members/members.module').then(m => MemberModule)
    },
    {
        component: BaseComponent,
        path: 'categories',
        loadChildren: () => import('./pages/categories/categories.module').then(c => CategoryModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: "full"
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    declarations: [
        LoginComponent,
        DashboardComponent,
        NotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        SharedModuleComponent,
        ButtonComponent,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        RouterModule,
        LoginComponent,
        BaseModule,
        DashboardComponent,
        ButtonComponent,
        NotFoundComponent
    ]
})
export class AppRouting {

}