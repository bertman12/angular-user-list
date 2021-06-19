import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input() currentUser: User = null;  //corresponds to user iteration in userSet at instantiation of the component
  @Input() updateUser: boolean = false; //used for disabling ui that doesn't relate to updating user info
  @Output() userRemoveRequest = new EventEmitter<User>();
  @Output() userUpdateRequest = new EventEmitter<User>();

  onRemoveUser(){
    this.userRemoveRequest.emit(this.currentUser);
  }

  onUpdateUser(){
    this.userUpdateRequest.emit(this.currentUser);
  }
}
