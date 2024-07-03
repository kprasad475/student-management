import { Component, OnInit } from '@angular/core';
interface Student {
  name: string;
  address: string;
  class: string;
  age: number;
  rollNo:string
}

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrl: './student-display.component.css'
})
export class StudentDisplayComponent  implements OnInit{
  names:any

  students:Student[] = [
    { name: 'John Doe', address: '123 Main St', class: '10th', age: 15, rollNo: 'A001' },
    { name: 'Jane Smith', address: '456 Elm St', class: '12th', age: 19, rollNo: 'A002' },
    { name: 'steven smith', address: '12 b brisbane', class: '11th', age: 17, rollNo: 'A003' },
    { name: 'samuel clark', address: ' Elm St adlade', class: '11th', age: 16, rollNo: 'A004' },
    { name: 'adam george', address: 'melbourne St', class: '12th', age: 17, rollNo: 'A005' },
    { name: 'harry Smith', address: 'christchruch 2b', class: '12th', age: 18, rollNo: 'A006' },
    { name: 'nial horrin', address: 'sydney 13a', class: '11th', age: 16, rollNo: 'A007' },
    { name: 'bret hart', address: 'willington 20c', class: '9th', age: 15, rollNo: 'A008' },
    // Add more students as needed
  ];

  displayedColumns: string[] = ['name', 'address', 'class', 'age', 'rollNo', 'actions'];

  constructor() { }
  ngOnInit(): void {
console.log("kabbb")  }

  editStudent(student: any) {
    // Implement edit functionality here
    console.log('Edit student:', student);
  }

  deleteStudent(student: any) {
    // Implement delete functionality here
    console.log('Delete student:', student);
  }

  sortStudentsBy(property: keyof Student) {
    this.students = [...this.students].sort((a, b) => (a[property] > b[property]) ? 1 : (a[property] < b[property]) ? -1 : 0);
    console.log(this.students);
  }

  reverseSortStudentsBy(name: keyof Student) {
    this.students.sort((a, b) => (a[name] < b[name]) ? 1 : (a[name] > b[name]) ? -1 : 0);
  }
}
