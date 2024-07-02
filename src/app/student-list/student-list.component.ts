import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../studentmodel';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';
import { AddStudentComponent } from '../add-student/add-student.component';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent  implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'age', 'grade', 'actions'];
  dataSource: MatTableDataSource<Student>;

  constructor(private service: StudentService, public dialog: MatDialog) {}

  ngOnInit() {
    this.service.getStudents().subscribe(students => {
      this.dataSource = new MatTableDataSource(students);
    });
  }

  deleteStudent(id: number) {
    this.service.deleteStudent(id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // addStudent(form: NgForm) {
  //   const newStudent: Student = {
  //     id: this.generateId(),
  //     name: form.value.name,
  //     age: form.value.age,
  //     grade: form.value.grade
  //   };

  //   this.service.addStudent(newStudent);
  //   form.resetForm();
  // }

  addStudent(student:Student){
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '250px',
      data: { ...student }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.updateStudent(result);
      }
    });
  }
  editStudent(student: Student) {
    const dialogRef = this.dialog.open(StudentFormComponent, {
      width: '250px',
      data: { ...student }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.addStudent(result);
      }
    });
  }

}
