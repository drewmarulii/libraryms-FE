import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";

@Injectable({
    providedIn : 'root'
})
export class BaseService {
    
    constructor(
        private authService : AuthService,
        private messageService : MessageService,
        private router : Router
    ) { }

    private get token() : string | null {
        const profile = this.authService.getProfile()
        if (profile && profile.token) {
            return profile.token
        }
        return null
    }

    private get header() {
        return {
            headers :
                { Authorization : `Bearer ${this.token}`}
        }
    }
}