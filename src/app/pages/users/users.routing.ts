import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./list/users-list.component";

const routes : Routes = [
    {
        path: '',
        component: UserListComponent
    }
]

@NgModule({
    declarations : [
        UserListComponent
    ],
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule,
        UserListComponent
    ]
})
export class UserRouting {

}