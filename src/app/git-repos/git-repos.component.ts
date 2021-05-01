import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css']
})
export class GitReposComponent implements OnInit {

  @Input() GitRepos: object;
  constructor() { }

  ngOnInit(): void {
  }

}
