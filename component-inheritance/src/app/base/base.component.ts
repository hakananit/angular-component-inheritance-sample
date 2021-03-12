import { Component, Inject, InjectionToken, OnInit, Optional } from '@angular/core';

const NAME = new InjectionToken<string>('name');
const SURNAME = new InjectionToken<string>('surname');

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  private _name: string;
  get name() {
    return this._name;
  }
  private _surname: string;
  get surname() {
    return this._surname;
  }

  constructor(@Optional() @Inject(NAME) name: string, @Optional() @Inject(SURNAME) surname: string) {
    console.log(name);
    console.log(surname);
  }

  ngOnInit(): void {
  }

}
