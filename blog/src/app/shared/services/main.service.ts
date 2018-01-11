import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MainService {

  constructor(private http: HttpClient) {
  }

  public request(params: any): any {
    if (params['method'] === 'post' || params['method'] === 'POST') {
      return this.post(params['url'], params['data'], params['header']);
    } else {
      return this.get(params['url'], params['data'], params['header']);
    }
  }

  // 封装一个post方法
  public post(url: string, params?: any, header?: string): any {
    // 设置post请求
    return this.http.post(url, params, {
      headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})
        .set('Authorization', header)
    })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  // 封装一个get方法
  public get (url: string, params?: any, header?: any): any {
    return this.http.get(url, {
        headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})
          .set('Authorization', header), params: params})
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }
}
