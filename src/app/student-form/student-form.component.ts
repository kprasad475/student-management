import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../studentmodel';
import { StudentService } from '../student.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  student: Student;

  constructor(
    private service: StudentService,
    public dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    this.student = { ...data };
  }

  saveStudent(form: NgForm) {
    const updatedStudent: Student = {
      id: this.student.id,
      name: form.value.name,
      age: form.value.age,
      grade: form.value.grade
    };

    this.dialogRef.close(updatedStudent);
  }

  onNoClick(){
    
  }
}
