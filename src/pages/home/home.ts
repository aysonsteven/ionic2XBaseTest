import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  id: number  ;
  password:string;
  email:string;
  name: string;
  url = 'http://work.org/xbase';
  users = [];
  constructor(public navCtrl: NavController, private http: Http) {
    this.getUser()
  }

  getUser(){
    this.http.request( this.url + '/?mc=user.fetch' ).subscribe(re=>{
      this.users = JSON.parse(re['_body']).data
      console.log(JSON.parse(re['_body']).data)
    })
  }

  onClickRegister(){
    
    this.http.get( this.url + '?mc=user.register&id=' + this.id + '&password=' + this.password+ '$email='+ this.email +'&name=' +this.name ).subscribe( re=>{
      this.getUser();
    }, e=>{
      console.log('error' + e)
    })
  }

}
