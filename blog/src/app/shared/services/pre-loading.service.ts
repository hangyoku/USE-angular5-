import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// 自定义预加载服务
@Injectable()
export class PreloadingService implements PreloadingStrategy {
  // preloadedModules: string[] = []; // 预加载模块数组
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      // add the route path to the preloaded module array
      // this.preloadedModules.push(route.path);
      // log the route path to the console
      // console.log('Preloaded: ' + route.path);
      return load(); // 返回第二个参数 回调函数进行预加载
    } else {
      return Observable.of(null);
    }
  }
}
