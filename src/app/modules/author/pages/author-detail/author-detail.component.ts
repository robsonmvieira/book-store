import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => console.log(param.get('id')))
  }

}
