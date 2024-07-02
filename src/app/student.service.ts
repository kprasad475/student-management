import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from './studentmodel';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students:Student[]=[
{id:1,name:'John mclaine',age:20,grade:'A'},
{id:2,name:'seth myers',age:22,grade:'B+'},
{id:3,name:'mathew fede',age:20,grade:'A+'},
  ]

  private studentsSubject = new BehaviorSubject<Student[]>(this.students);  

  constructor() { }

  getStudents(){
    return this.studentsSubject.asObservable();
  }

  addStudent(){
    
  }
}
