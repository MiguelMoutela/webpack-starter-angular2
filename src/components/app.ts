import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {Home} from './home';
import {About} from './about';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Webpack Starter Angular 2</h1>
    <div>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/about']">About</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class MyApp {}
