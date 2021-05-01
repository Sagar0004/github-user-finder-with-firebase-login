import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-git-user-details',
  templateUrl: './git-user-details.component.html',
  styleUrls: ['./git-user-details.component.css']
})
export class GitUserDetailsComponent implements OnInit {

  @Input() GitUsers: object;
  constructor() { }

  ngOnInit(): void {
  }

}
