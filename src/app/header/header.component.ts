import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}
  Works = [];
  todo:'';

  ngOnInit(): void {
    if (localStorage.getItem('todo')) {
      this.Works = JSON.parse(localStorage.getItem('todo'))
    }
  }
  addWork() {
    let todo = {
      id : this.Works.length+1,
      todo:this.todo,
      isDone:false
    }
    this.Works.push(todo);
    this.todo = '';
    localStorage.setItem('todo', JSON.stringify(this.Works));
  }
  deleteWork(i) {
    this.Works.splice(i, 1);
    localStorage.setItem('todo', JSON.stringify(this.Works));
  }
  changestyle(i) {
    // document.getElementById('work').style.textDecoration = 'line-through';
    this.Works[i].isDone = true;
  }
}
