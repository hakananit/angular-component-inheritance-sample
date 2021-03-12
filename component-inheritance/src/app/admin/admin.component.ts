import { Component, Inject, InjectionToken, OnInit, Optional } from '@angular/core';
import { BaseComponent } from '../base/base.component';

const NAME = new InjectionToken<string>('name');
const SURNAME = new InjectionToken<string>('surname');

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [
    {
      provide: NAME, useValue: 'erika',
    },
    {
      provide: SURNAME, useValue: 'mustermann'
    }
  ]
})
export class AdminComponent extends BaseComponent implements OnInit {

  constructor(@Optional() @Inject(NAME) name: string, @Optional() @Inject(SURNAME) surname: string) {
    super(name, surname)
  }

  ngOnInit(): void {
  }

}
