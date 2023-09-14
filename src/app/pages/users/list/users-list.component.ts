import { Component, OnInit } from "@angular/core";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";

interface Role {
    value : string 
    name : string
}
interface CompanyProfile {
    name: String
    sector: String
    thisYearSales: String
    lastYearSales: String
    thisYearGrowth: String
    lastYearGrowth: String
}
interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
    selector : '',
    templateUrl : './users-list.component.html',
    styleUrls : ['./users-list.component.css'],
    providers: [MessageService]
})
export class UserListComponent implements OnInit {
    role! : Role[]
    dialogUserInsert! : boolean
    companyProfiles: CompanyProfile[] = [];
    uploadedFiles: any[] = [];
    
    userInsertReqDto = this.fb.group({
        userFullname : ['', [Validators.required]],
        userEmail : ['', [Validators.required]],
        userPassword : ['', [Validators.required]],
        roleId : ['', [Validators.required]],
        fileName : ['', [Validators.required]],
        fileExtension : ['', [Validators.required]]
    })
    constructor(
        private fb : NonNullableFormBuilder,
        private messageService : MessageService
    ) { }
  
    ngOnInit() {
        this.companyProfiles = [
            {
                name: "Apple",
                sector: "Technology",
                thisYearSales: "$ 2,000,000,000",
                lastYearSales: "$ 1,700,000,000",
                thisYearGrowth: "21%",
                lastYearGrowth: "15%",
            },
            {
                name: "Mac Donalds",
                sector: "Food",
                thisYearSales: "$ 1,100,000,000",
                lastYearSales: "$ 800,000,000",
                thisYearGrowth: "18%",
                lastYearGrowth: "15%",
            },
            {
                name: "Google",
                sector: "Technology",
                thisYearSales: "$ 1,800,000,000",
                lastYearSales: "$ 1,500,000,000",
                thisYearGrowth: "15%",
                lastYearGrowth: "13%",
            },
            {
                name: "Domino's",
                sector: "Food",
                thisYearSales: "$ 1,000,000,000",
                lastYearSales: "$ 800,000,000",
                thisYearGrowth: "13%",
                lastYearGrowth: "14%",
            },
            {
                name: "Meta",
                sector: "Technology",
                thisYearSales: "$ 1,100,000,000",
                lastYearSales: "$ 1,200,000,000",
                thisYearGrowth: "11%",
                lastYearGrowth: "12%",
            }
        ];

        this.role = [
            {
                'value' : 'Admin',
                'name' : 'Admin'
            }, 
            {
                'value' : 'Librarian',
                'name' : 'Librarian'
            }
        ]

    }

    onUpload(event:UploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

    showDialogInsertUser() {
        this.dialogUserInsert = true
    }

    insertUser() {

    }

    closeDialogCreateUser() {

    }
}