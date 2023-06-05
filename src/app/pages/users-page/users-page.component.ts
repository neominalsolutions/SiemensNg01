import { Component } from '@angular/core';
import * as _ from 'lodash';
export interface User {
  id: number;
  name: string;
  surname: string;
  email: string; // required
  phoneNumber?: string; // opsiyonel değer.
}

type orderType = 'asc' | 'desc'; // string literal type
// type btnColor = 'red' | 'pink' | 'yellow';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent {
  // users: User[] = [];
  // color:btnColor = 'black';
  sortType: orderType = 'asc';
  users2: Array<User> = [
    {
      id: 1,
      name: 'ali',
      surname: 'tan',
      email: 'ali@test.com',
    },
    {
      id: 2,
      name: 'ahmet',
      surname: 'tavan',
      email: 'hakan.can@test.com',
      phoneNumber: '34324324',
    },
  ];

  /**
   *
   */
  constructor() {
    this.users2 = _.orderBy(this.users2, ['name'], [this.sortType]);
  }

  onSortChange(event: any) {
    this.sortType = event.target.value;
    this.users2 = _.orderBy(this.users2, ['name'], [this.sortType]);
  }
}
