import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [UsersService]
})
export class Tab3Page {
  show: boolean;
  message: string;
  promotion: any;
  token: string;

  constructor(private _usersService: UsersService, private storage: Storage) {
    this.show = false;
    this.message = '';
  }

  onSubmit() {
    this.storage.get('token').then((val) => {
      this.token = val;
      this._usersService.promotion(this.token).subscribe(
        response => { 
            this.promotion = response.requests[0].response;
            this.show = true;
        },error =>{
            this.message = 'Disculpe, debe iniciar sesión para ver la promociones.';
        }); 
    }); 
  }

}
