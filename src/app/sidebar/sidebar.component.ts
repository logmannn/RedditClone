import { Component, OnInit } from '@angular/core';
import { PostPreview } from '../content/models/content.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitAPost() {
    // alert("Submit a post");
    // PostPreview = [
    //   new PostPreview('Marijuana Dispensaries Are Keeping Cannabis Out Of The Hands Of Minors In Oregon', 'https://www.forbes.com/sites/monazhang/2018/03/30/marijuana-dispensaries-are-keeping-cannabis-out-of-the-hands-of-minors-in-oregon/')
    // ];
    alert(PostPreview.length)
  }

}
