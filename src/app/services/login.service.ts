import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { BaseService } from "./base.service";
import { BASE_URL } from "../constant/api.constant";
import { LoginReqDto } from "../dto/login/login.req.dto";
import { LoginResDto } from "../dto/login/login.res.dto";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private base: BaseService) { }

    login(data: LoginReqDto): Observable<LoginResDto> {
        return this.base.post<LoginResDto>(`${BASE_URL}/login`, data, false);
    }
}