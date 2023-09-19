import { Component, OnInit } from "@angular/core";
import { NonNullableFormBuilder } from "@angular/forms";
import { Dialog } from "primeng/dialog";
import { CategoryInsertMultipleReqDto } from "src/app/dto/categories/category-insert-multiple.req.dto";
import * as XLSX from 'xlsx';

@Component({
    selector: 'categories',
    templateUrl: './categories-list.component.html',
    styleUrls: ['./categories-list.component.css']
})
export class CategoryComponent implements OnInit {
    dialogSingleCategory!: boolean
    dialogMultipleCategory!: boolean
    convertedJson!: string
    rawValue: [] = []
    categoriesMultiple! : CategoryInsertMultipleReqDto

    multipleCategoryInsertReqDto = this.fb.group({

    })
    constructor(
        private fb: NonNullableFormBuilder
    ) { }

    ngOnInit(): void {

    }

    showDialogCategoryM(dialog: Dialog) {
        this.dialogMultipleCategory = true
        dialog.maximized = false
    }

    showDialogCategoryS() {

    }

    insertMultiCategoriesConf() {

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

                this.categoriesMultiple =
                {
                    categories: obj
                }
            })
        }
    }

    closeDialogUploadCSVConf() {
        
    }
}