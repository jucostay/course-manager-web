import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 21,
        name: 'Angular 14',
        imageUrl: '/assets/images/angular.png',
        price: 1399,
        code: '751A31',
        duration: 40,
        rating: 4.5,
        releaseDate: '21/01/2022'
      },
      {
        id: 6,
        name: 'Java',
        imageUrl: '/assets/images/java.png',
        price: 254,
        code: '899J89',
        duration: 32,
        rating: 3,
        releaseDate: '23/07/2021'
      }
    ]
  }

}
