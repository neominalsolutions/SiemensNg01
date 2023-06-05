import { Component } from '@angular/core';

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string; // required
  phoneNumber?: string; // opsiyonel değer.
}

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent {
  // users: User[] = [];
  sortType:string = '';
  users2: Array<User> = [
    {
      id: 1,
      name: 'ali',
      surname: 'can',
      email: 'ali@test.com',
    },
    {
      id: 2,
      name: 'can',
      surname: 'hakan',
      email: 'hakan.can@test.com',
      phoneNumber: '34324324',
    },
  ];
}
