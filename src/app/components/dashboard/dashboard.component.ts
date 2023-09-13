import { Component } from "@angular/core";

@Component({
    selector : 'dashboard',
    templateUrl : './dashboard.component.html',
    styleUrls : ['./dashboard.component.css']
})
export class DashboardComponent {
    loading = false
    fullName = 'Andrew Maruli'

    triggered() {
        this.loading = true
    }
}