import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { MemberInsertReqDto } from "../dto/members/member-insert.req.dto";
import { Observable } from "rxjs";
import { InsertResDto } from "../dto/insert.res.dto";
import { BASE_URL } from "../constant/api.constant";
import { MemberInsertMultipleReqDto } from "../dto/members/member-insert-multiple.req.dto";

@Injectable({
    providedIn: 'root'
})
export class MemberService {

    constructor(
        private base: BaseService
    ) { }

    create(data: MemberInsertReqDto): Observable<InsertResDto> {
        return this.base.post<InsertResDto>(`${BASE_URL}/members`, data);
    }

    createMultiple(datas : MemberInsertMultipleReqDto) : Observable<InsertResDto> {
        return this.base.post<InsertResDto>(`${BASE_URL}/members`, datas);
    }
}