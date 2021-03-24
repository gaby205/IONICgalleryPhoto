import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  des : string = "Click the button to start the game!"
  angka : number;
  jawab : number;
  won : string;
  play:string;
  hints : number;
  menang :boolean;
  mulaigame(){
    this.angka = Math.floor(Math.random()*10 + 1);
    this.won="";
    this.play="THE GAME IS STARTED!";
    this.hints=null;
    this.menang=false;
  }
  check(x){
    if(x == this.angka){
      this.menang=true;
      this.won="YOUR ANSWER IS RIGHT, AWESOME!";
      this.des="Click the start game button to restart"
      this.play="";
      
    }
    else
    {
      this.won="WRONG! try again"
    }
  }

  hint(){
    this.hints = this.angka;
  }
}
