import { Component } from '@angular/core';
import { UsersService } from '../services/users.service'; 
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [UsersService]
})
export class Tab1Page {
    activeButton: boolean;
    type: string;
    message: string;
    loginSuccess: boolean;

    constructor(private _usersService: UsersService, private storage: Storage) { 
      this.clean();
    }

    onSubmit(user, pass, type) {
      if(type==="login"){
        this._usersService.login(user,pass).subscribe(
          response => { 
            this.storage.set('token', response.access_token);
            this.loginSuccess = true;
          },error =>{
            this.message = 'Disculpe, ha ocurrido un error, intente de nuevo.';
          }
        );
      }else{
        this._usersService.register(user,pass).subscribe(
          response => { 
            this.message = response.message;
          },error =>{
            this.message = 'Disculpe, ha ocurrido un error, intente de nuevo.';
          }
        );
      }
    }

    clean(){
      this.storage.clear();
      this.activeButton = this.loginSuccess = false;
      this.message = '';
    }

    select(value){
      this.message = '';
      this.type = value;
      this.activeButton = true;
      if(value === 'logout'){
        this.clean();
        window.location.href = '/tabs/tab1';
      }
    }

}
