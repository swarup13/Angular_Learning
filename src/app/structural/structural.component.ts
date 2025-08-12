import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertBoxComponent } from '../reusableComponent/alert-box/alert-box.component';
import { ReuseButtonComponent } from '../reusableComponent/reuse-button/reuse-button.component';

@Component({
  selector: 'app-structural',
  imports: [CommonModule , AlertBoxComponent , ReuseButtonComponent],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent  {
visiblity:boolean = true;
  isVisible(){
     this.visiblity = true;
  } 

  notVisible(){
     this.visiblity = false;
  }

  paretntBtn(data:any){
    alert(data);
  }


  

}
