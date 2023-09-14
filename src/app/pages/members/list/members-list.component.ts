import { Component, OnInit } from "@angular/core";
import { FormArray, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Dialog } from "primeng/dialog";
import { MemberInsertMultipleReqDto } from "src/app/dto/members/member-insert-multiple.req.dto";
import * as XLSX from 'xlsx';

export interface Gender {
    value: string
    name: string
}
@Component({
    selector: 'members',
    templateUrl: './members-list.component.html',
    styleUrls: ['./members-list.component.css']
})
export class MemberListComponent implements OnInit {
    dialogMultipleMember!: boolean
    dialogSingleMember!: boolean
    dialogInsertMMConf!: boolean
    dialogInsertSMConf!: boolean
    dialogCancelInsertMMConf!: boolean
    dialogCancelInsertSMConf! : boolean
    loading!: false
    gender!: Gender[]
    membersMultiple!: MemberInsertMultipleReqDto
    convertedJson!: string
    rawValue: [] = []
    cmembers: MemberInsertMultipleReqDto[] = []

    multipleMembersInsertReqDto = this.fb.group({
        file: ['', [Validators.required]]
    })
    singleMemberInsertReqDto = this.fb.group({
        memberEmail: ['', [Validators.required]],
        memberFullname: ['', [Validators.required]],
        memberGender: ['', [Validators.required]],
        memberAddress: ['', [Validators.required]],
        memberPhone: ['', [Validators.required]]
    })
    constructor(
        private fb: NonNullableFormBuilder
    ) { }

    ngOnInit(): void {
        this.gender = [
            {
                'value': 'Male',
                'name': 'Male'
            },
            {
                'value': 'Female',
                'name': 'Female'
            }
        ]
    }

    fileUploadCSV(event: any) {
        const selectedFile = event.target.files[0]
        const fileReader = new FileReader()
        fileReader.readAsBinaryString(selectedFile)
        fileReader.onload = (event: any) => {
            let binaryData = event.target.result;
            let workBook = XLSX.read(binaryData, { type: 'binary' })

            workBook.SheetNames.forEach(sheet => {
                const data = XLSX.utils.sheet_to_json(workBook.Sheets[sheet])
                this.convertedJson = JSON.stringify(data, undefined, 4)
                const obj = JSON.parse(this.convertedJson)
                this.rawValue = obj

                this.membersMultiple =
                {
                    members: obj
                }
            })
        }
    }

    showDialogMemberM(dialog: Dialog) {
        this.rawValue = []
        this.multipleMembersInsertReqDto.reset()
        // dialog.maximized = true;
        this.dialogMultipleMember = true
    }

    showDialogMemberS() {
        this.singleMemberInsertReqDto.reset()
        this.dialogSingleMember = true
    }

    insertMultiMembersConf() {
        if (this.multipleMembersInsertReqDto.valid) {
            this.dialogInsertMMConf = true
        } else {
            console.log('Please Insert File!');
        }
    }

    insertSingleMemberConf() {
        if (this.singleMemberInsertReqDto.valid) {
            this.dialogInsertSMConf = true
        } else {
            console.log('Please Fill up the form!')
        }
    }

    insertMultiMembers() {
        this.dialogInsertMMConf = false
        this.dialogMultipleMember = false
        console.log('Member Multiple Inserted!')
    }

    insertSingleMember() {
        this.dialogInsertSMConf = false
        this.dialogSingleMember = false
        console.log('Member Single Inserted!');
        
    }

    closeDialogUploadCSVConf() {
        this.dialogCancelInsertMMConf = true
    }

    closeDialogUploadCSV() {
        this.dialogMultipleMember = false
    }

    closeDialogSingleMember() {
        this.dialogCancelInsertSMConf = true
    }

    closeDialogMultiMembersConf() {
        this.dialogInsertMMConf = false
    }

    closeDialogSingleMembersConf() {
        this.dialogInsertSMConf = false
    }

    cancelInsetMDialog(i: number) {
        if (i == 1) {
            this.dialogCancelInsertMMConf = false
        } else if (i == 2) {
            this.dialogCancelInsertMMConf = false
            this.dialogMultipleMember = false
        }
    }

    cancelInsetSMDialog(i : number) {
        if (i == 1) {
            this.dialogCancelInsertSMConf = false
        } else if (i == 2) {
            this.dialogCancelInsertSMConf = false
            this.dialogSingleMember = false
        }
    }
}