import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

export interface Post {
  title: string;
  description: string;
}
export interface User {
  position: number;
  name: string;
  username: string;
  address: string;
  email: string;
  phoneNumber: string;
  post: Post | null;
}

const ELEMENT_DATA: User[] = [
  {
    position: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    address: 'Avenida Sucre, Número 456, Lince',
    email: 'lisa.watson@example.com',
    phoneNumber: '(+51) 555-0104',
    post: {
      title: 'title 1',
      description: 'description 1'
    },
  },
  {
    position: 2,
    name: 'Savannah Howard',
    username: 'Savannah Howard',
    address: '8445 Railroad St undefined Tampa',
    email: 'jeff.brown@example.com',
    phoneNumber: '(201) 555-0124',
    post: {
      title: 'title 2',
      description: 'description 2'
    },
  },
  {
    position: 3,
    name: 'Morris Cooper',
    username: 'Morris Cooper',
    address: '8584 W Sherman Dr undefined Desoto',
    email: 'terra.hamilton@example.com',
    phoneNumber: '(505) 555-0125',
    post: {
      title: 'title 3',
      description: 'description 3'
    },
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'username', 'address', 'email', 'phoneNumber' /*, 'Post'*/];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: User | null;
}
