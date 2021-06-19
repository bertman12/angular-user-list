import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //user entry info
  name: string = '';
  age: number = null;
  city: string = '';

  userSet:User[]  = 
  [
    new User('Courage the Cowardly Dog', 22, 'Middle of Nowhere'),
    new User('Lich', 666, 'Icecrown'),
    new User('Billy', 21, 'Endsville'),
  ];

  updateUser: boolean = false; //used for disabling ui that doesn't relate to updating user info
  selectedUser: User = null; //acquired from update user event, holds the user to be updated

  onAddUserRequest(){
    this.userSet.push(new User(this.name,this.age,this.city));
    this.name = '';
    this.age = null;
    this.city = '';
  }

  onRemoveUserRequest(user: User){
    this.userSet.splice(this.userSet.indexOf(user), 1);
  }

  onUpdateUserRequest(user: User){
    this.updateUser = true;
    this.selectedUser = user;
  }

  onFinishUpdateUserRequest(){
    this.updateUser = false;
  }

}
