import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../studentmodel';
import { StudentService } from '../student.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student: Student;
  constructor(private service:StudentService,public dialogRef: MatDialogRef<StudentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student){
      this.student = data || { id: 0, name: '', age: 0, grade: '' };

    }

    addStudent(form: NgForm) {
      const newStudent: Student = {
        id: this.generateId(),
        name: form.value.name,
        age: form.value.age,
        grade: form.value.grade
      };
  
      this.service.addStudent(newStudent);
      form.resetForm();
    }

    private generateId(): number {
      // Generate unique IDs here, for simplicity, you can increment from existing max ID
      const currentStudents = this.service.getCurrentStudents();
      const maxId = currentStudents.length > 0 ? Math.max(...currentStudents.map(s => s.id)) : 0;
      return maxId + 1;
    }

}