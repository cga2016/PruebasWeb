import { Component,Input, computed, signal, input, Output, EventEmitter,output} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users"
import { NgClass } from "../../../node_modules/@angular/common/index";

const randomIndx = Math.floor(Math.random() * DUMMY_USERS.length);
//type User = {id: string; name: string; avatar: string};
interface User{
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
@Input({ required: true}) user!: User;
@Output() select = new EventEmitter<string>();
//select = output<string>();
get imagePath() {
  return 'assets/users/'+ this.user.avatar;
}

onSelectUser() {  
 this.select.emit(this.user.id);
}
}

/**
 * version hecha con decoradores
 */


/**
 * version hecha con señales
 */
/*
export class UserComponent {

  //@Input({required: true}) avatar!: string;

//avatar = input<string>();
avatar = input.required<string>();

//@Input({required: true}) name!: string;

name = input.required<string>();
/*get imagePath() {
  return 'assets/users/'+ this.avatar;

    
imagePath = computed(() => {return 'assets/users/'+ this.avatar();});
onSelectUser() {
this.avatar.set();
}

}
}*/
