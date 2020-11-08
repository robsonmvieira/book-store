import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984, 900].map((n) => `https://picsum.photos/id/${n}/2000/500`);
  // images = [1, 2, 3, 4]
  constructor() { }

  ngOnInit(): void {
    console.log(this.images)
  }

}
