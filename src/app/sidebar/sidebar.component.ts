import { Component, OnInit} from '@angular/core';
import { PostPreview } from '../content/models/content.model';
// import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  ngOnInit() {
  }

  // submitAPost() {
  //   // new PostPreview('Coast Guard', 'https://scontent-lga3-1.cdninstagram.com/vp/a32425a4a9b99972516ddbcf2b01cf4a/5B53D0CF/t51.2885-15/e35/28751440_1621525544582505_9041431883551866880_n.jpg');
  //   alert(PostPreview);
  // }
}
