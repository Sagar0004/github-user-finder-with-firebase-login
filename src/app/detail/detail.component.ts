import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiUsersService } from '../api-users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _route : ActivatedRoute,private _api : ApiUsersService) { }
  cartoon = [];
  ngOnInit(): void {
   
    var id=this._route.snapshot.paramMap.get('id');
    
    
    // this._api.getStudentByID(id).subscribe(
     //(response:any) => this.cartoon = response);
    
  }

}
