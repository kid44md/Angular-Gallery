import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {images} from './scripts/data';
import { LoggerService } from './Services/loggerService';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './Html/app.component.html',

  // styleUrl: ''
})
export class AppComponent {

/* reactive data */
//init the variable with array
index = signal(0);
imageList = signal(images);
showDescription = signal(false);

constructor(){
/* load the properties first to be able to 
imageList[index] */
this.imageList()[this.index()];

}

  handlePreviousButton():void{
  console.log('move back gallery');
  if(this.imageList().length >= this.index() && this.index() != 0){
    this.index.update(index => index - 1);
    } 
  }
  handleNextButton():void{
    console.log('move next gallery');
    if(this.index() < this.imageList().length - 1){
     this.index.update(index => index + 1);
    }
  }

handleDescription(): void {
  this.showDescription.set(!this.showDescription());
}



}
