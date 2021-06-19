import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

    @Input() currentUser: User = null;
    @Input() updateUser: boolean = false; //listen if user is still being updated
    @Output() userRemoveRequest = new EventEmitter<User>();
    @Output() userUpdateRequest = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {
  }

  onRemoveUser(){
    this.userRemoveRequest.emit(this.currentUser);
  }

  onUpdateUser(){
    this.userUpdateRequest.emit(this.currentUser);
  }
}
