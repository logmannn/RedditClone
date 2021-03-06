import { Component, OnInit } from '@angular/core';
import { PostPreview } from './models/content.model';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  showSubmitDiv = false;

  constructor() { }

  ngOnInit() {
  }

  //set to true in production

  postPreviews: PostPreview[] = [
    new PostPreview('Marijuana Dispensaries Are Keeping Cannabis Out Of The Hands Of Minors In Oregon', 'https://www.forbes.com/sites/monazhang/2018/03/30/marijuana-dispensaries-are-keeping-cannabis-out-of-the-hands-of-minors-in-oregon/'),
    new PostPreview('Coast Guard', 'https://scontent-lga3-1.cdninstagram.com/vp/a32425a4a9b99972516ddbcf2b01cf4a/5B53D0CF/t51.2885-15/e35/28751440_1621525544582505_9041431883551866880_n.jpg'),
  ];

  submitAPosts(upvote: number, title: string, titleLink:string) {
    this.postPreviews.push({upvote: 0, title: title, titleLink: titleLink});
    this.showSubmitDiv = false;
    // alert(titleLink);
  }

  showSubmitAPosts() {
    if (this.showSubmitDiv == false) {
      this.showSubmitDiv = true;
    } else {
      this.showSubmitDiv = false;
    }
  }



}
