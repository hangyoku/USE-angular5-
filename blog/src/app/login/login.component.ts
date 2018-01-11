import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm;

  constructor(private _form: FormBuilder, private http: HttpClient) {
    this.loginForm = this.createForm();
  }

  ngOnInit() {
  }

  login() {
    // this.http.post()
  }

  createForm() {
    const group = this._form.group({
      username: [''],
      password: ['']
    });
    return group;
  }
}
