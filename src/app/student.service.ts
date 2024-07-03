import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from './studentmodel';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    { id: 1, name: 'John Mclaine', age: 20, grade: 'A' },
    { id: 2, name: 'Seth Myers', age: 22, grade: 'B+' },
    { id: 3, name: 'Mathew Fede', age: 20, grade: 'A+' }
  ];

  private studentsSubject = new BehaviorSubject<Student[]>(this.students);

  constructor() {}

  getStudents(): Observable<Student[]> {
    return this.studentsSubject.asObservable();
  }

  addStudent(student: Student): void {
    this.students.push(student);
    this.studentsSubject.next(this.students);
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
    this.studentsSubject.next(this.students);
  }

  updateStudent(updatedStudent: Student): void {
    this.students = this.students.map(student => student.id === updatedStudent.id ? updatedStudent : student);
    this.studentsSubject.next(this.students);
  }

  getCurrentStudents(): Student[] {
    return this.studentsSubject.getValue();
  }
}
