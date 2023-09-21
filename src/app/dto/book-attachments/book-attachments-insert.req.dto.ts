import { FileInsertReqDto } from "../files/file-insert.req.dto"

export interface BookAttachmentsInsertReqDto {
    bookId : string 
    files : FileInsertReqDto[]
}