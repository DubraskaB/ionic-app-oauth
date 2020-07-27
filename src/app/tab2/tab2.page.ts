import { Component, ViewEncapsulation, Pipe } from '@angular/core';
import { UsersService } from '../services/users.service'; 
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [UsersService],
  encapsulation: ViewEncapsulation.None
})
export class Tab2Page {
  columns: any;
  rows: any;
  show: boolean;
  message: string;
  token: string;

  constructor(private _usersService: UsersService, private storage: Storage) {
    this.columns = [{ name:'title'}];
    this.show = false;
    this.message = '';
  }

  onSubmit() {
    this.storage.get('token').then((val) => {
      this.token = val;
      this._usersService.promotions(this.token).subscribe(
        response => {
            this.rows = response.requests[0].response;
            this.show = true;
        },error =>{
            this.message = 'Disculpe, debe iniciar sesión para ver la promociones.';
        }); 
    });
  }

}
