import { Component, OnInit } from '@angular/core';
import { TopLink } from './models/topLink.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topLinks: TopLink[] = [
    new TopLink('https://www.reddit.com/r/popular/', 'popular'),
    new TopLink('https://www.reddit.com/r/all/', 'all')
  ];

}
