import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-stmt',
  imports: [],
  templateUrl: './control-flow-stmt.component.html',
  styleUrl: './control-flow-stmt.component.css'
})
export class ControlFlowStmtComponent {


     isDivVisible:boolean = true;
     isDiv2:boolean = true;

     onHide(){

       this.isDivVisible = false;
     }

     onShow(){

       this.isDivVisible = true;
     }


     onToggle(){
        this.isDiv2 = !this.isDiv2;     //true asel tr false and vice versa
     }
}
