import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MainService} from "../shared/services/main.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm;

  constructor(private _form: FormBuilder, private service: MainService) {
    this.loginForm = this.createForm();
  }

  ngOnInit() {
  }

  login() {
    this.service.request({
      method: 'POST',
      url: '/api/login',
      data: this.loginForm.value,
      header: '+++++++++++++++++++1321365456423132132132132++++++++++++++++'
    }).subscribe(data => {
      console.log(data);
    });
  }

  createForm() {
    const group = this._form.group({
      username: [''],
      password: ['']
    });
    return group;
  }
}
