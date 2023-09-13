import { Component } from "@angular/core";
import { FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";

@Component({
    selector : 'login',
    templateUrl : './login.component.html'
})
export class LoginComponent {

    loading = false

    userLoginReqDto = this.fb.group({
        userEmail: ['', [Validators.required]],
        userPassword: ['', [Validators.required]]
      })

    constructor (
        private fb : NonNullableFormBuilder

    ) { }

    checkForm(form:FormGroup) {
        if(form.invalid){
            form.markAllAsTouched()
          }
    }

    onLogin() {
        const data = this.userLoginReqDto.getRawValue()

        if (this.userLoginReqDto.valid) {
            this.loading = true
        } 
    }
}