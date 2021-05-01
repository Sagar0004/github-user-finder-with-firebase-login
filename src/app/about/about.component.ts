import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  studentName = " ";
  students = [];
  selectedStudent = null;
  ngOnInit(): void {
  }
  SetStudent(e)
  {
    this.studentName = e.target.value;
  }
  AddStudent()
  {
    this.students.push(this.studentName);
    this.studentName = "";
  }
  deleteStudent(i)
  {
    this.students.splice(i,1);
  }
  selectStudent(i)
  {
    this.selectedStudent = i;
    this.studentName = this.students[i];
  }
  UpdateStudent()
  {
    this.students[this.selectedStudent] = this.studentName;
    this.studentName = "";
    this.selectedStudent = null;
  }
}
