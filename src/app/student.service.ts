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

  addStudent(student:Student){
    this.students.push(student);
    this.studentsSubject.next(this.students)
  }
  deleteStudent(id:number){
    this.students = this.students.filter(student =>student.id ! == id)
    this.studentsSubject.next(this.students)
  }

  updateStudent(updateStudent:Student){
    this.students=this.students.map(student =>student.id === updateStudent.id ? updateStudent:student);
    this.studentsSubject.next(this.students)
  }
  getCurrentStudents(): Student[] {
    return this.studentsSubject.getValue();
  }
}
