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
    this.http.get('/api/login').subscribe(data => {
      console.log(data);
    });
  }

  login() {
    this.http.post('/api/login', {name: 'zhangsan', age: 18}).subscribe(data => {
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
