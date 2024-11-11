import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses: Course[]; //ou pode inicilizar tambem aqui course[] = []
  displayedColumns = ['id','name', 'category'];

  constructor() {
    this.courses = [{_id:'20', name: 'Angular', category: 'iniciante'}];
  }

  ngOnInit(): void {

  }
}
