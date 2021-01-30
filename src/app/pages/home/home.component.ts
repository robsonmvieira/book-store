import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984, 900].map((n) => `https://picsum.photos/id/${n}/2000/500`);

  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  config = { leftTime: 80000 }

  menuIsToggle = false
  constructor() { }

  ngOnInit(): void {
    // this.countdown.begin();
  }
  handleEvent(e) {
    // console.log(e)
  }

  toggleMenu() {
    this.menuIsToggle = !this.menuIsToggle;
    console.log('ok.')
  }

}
