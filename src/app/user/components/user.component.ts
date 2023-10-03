import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'nombre'];

  public users: IUser[] = [];

  public isDataUserLoad: boolean = false;

  constructor(private _userService: UserService){}

  ngOnInit(){
  }

  public getUsers(){
      this._userService.getUsers(`Usuario/GetAllUsers`)
        .subscribe({
          next: (usersData: IUser[]) => {
            this.users = this.removeDuplicates(this.users, 'id', usersData);
          },
          error: (err) => {
            console.log(err)
          },
      });
  }

  private removeDuplicates(array: any[], propertyName: string, newData: any[]): any[] {
    const existingIds = array.map(item => item[propertyName]);
    const uniqueData = newData.filter(item => !existingIds.includes(item[propertyName]));
    return array.concat(uniqueData);
  }

}
