import { Component, OnInit } from '@angular/core';
import { AutorService } from './compartido/autor.service';
import { LoopBackConfig } from './compartido/lbsdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   constructor(private autoservice: AutorService){ 
      LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
      LoopBackConfig.setApiVersion('api');

   }
   autores:any[]=[];
   ngOnInit(): void {
    this.autoservice.find().suscribe(autores => {this.autores=autores});
  }
}
