import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = '';
  age: number = null;
  city: string = '';
  userNumber: number = null;
  updateUser: boolean = false;
  userSet:User[]  = [];
  selectedUser: User = null;

  onAddUser(){
    this.userSet.push(new User(this.name,this.age,this.city));
  }

  onRemoveUserRequest(user: User){
    this.userSet.splice(this.userSet.indexOf(user), 1);
  }

  onUpdateUserRequest(user: User){
    this.updateUser = true;
    this.selectedUser = user;
  }

  onFinishUpdateUser(){
    this.updateUser = false;
  }

}
