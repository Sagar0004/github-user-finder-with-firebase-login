import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  constructor(private _http:HttpClient) { }

  // getAllUsers()
  // {
  //  return this._http.get('http://localhost:8088/Student/StudentAPi.php');
  // }

  // getStudentByID(id)
  // {
  //  return this._http.get('http://localhost:8088/Student/StudentAPi.php'+"/"+id);
  // }
}
