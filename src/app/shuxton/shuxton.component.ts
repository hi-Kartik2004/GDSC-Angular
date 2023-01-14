import { Component, OnInit } from '@angular/core';

interface Participant {
  id: number;
  name: string;
  link: string;
}

@Component({
  selector: 'app-shuxton',
  templateUrl: './shuxton.component.html',
  styleUrls: ['./shuxton.component.css'],
})
export class ShuxtonComponent implements OnInit {
  //Add your name and link to the array below

  participants: Participant[] = [
    { id: 1, name: 'Shubham', link: 'shuxton' },
    {
      id: 2,
      name: 'Shubham NJ',
      link: 'shubham-nj',
    },
    {
      id: 3,
      name: 'Kartikeya Saini',
      link: 'kartikeya',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
