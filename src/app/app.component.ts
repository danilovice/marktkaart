import { Component } from '@angular/core';
import { Market } from './viewmodels/market';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{market.name}} details!</h2>
  <div><label>id: </label>{{market.id}}</div>
  <div><label>name: </label>{{market.name}}</div>
  `
})

export class AppComponent {
  title = 'Marktkaart';
  market: Market = {
    id: 1,
    name: 'Test Markt'
  };
}