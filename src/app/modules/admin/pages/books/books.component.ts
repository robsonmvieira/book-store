import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import Category from 'src/app/models/category.model';
import { CategoryService } from 'src/app/modules/category/category.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  categories$: Observable<Category[]>
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.list()

    this.categories$.subscribe(r => console.log(r))
    // console.log(this.categories$[0])
  }

}
