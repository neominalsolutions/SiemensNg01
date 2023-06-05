import { Component } from '@angular/core';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  onModelChange($event: any) {
    this.title = $event;
  }
  title: string = 'SimensAngularIntro'; // property
  visible: boolean = false;

  onClick(event: any): void {
    // this.title = 5;

    this.title = 'title1';
  }
}
