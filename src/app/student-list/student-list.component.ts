import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../studentmodel';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent  implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'age', 'grade', 'actions'];
  dataSource: MatTableDataSource<Student>;

  constructor(private studentService: StudentService, public dialog: MatDialog) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe(students => {
      this.dataSource = new MatTableDataSource(students);
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  editStudent(student: Student) {
    const dialogRef = this.dialog.open(StudentFormComponent, {
      width: '250px',
      data: { ...student }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.updateStudent(result);
      }
    });
  }

}
