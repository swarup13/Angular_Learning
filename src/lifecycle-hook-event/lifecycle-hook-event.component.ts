import { Component, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook-event',
  imports: [],
  templateUrl: './lifecycle-hook-event.component.html',
  styleUrl: './lifecycle-hook-event.component.css'
})
export class LifecycleHookEventComponent implements OnInit, DoCheck, AfterContentInit , AfterContentChecked , AfterViewInit , AfterViewChecked , OnDestroy{


       constructor(){
        console.log('constructor workk');        
      }

       ngOnInit() {
        console.log('ngoninit works');
        
       }


       ngDoCheck(): void {
           console.log('ngDoCheck works');
           
       }

       ngAfterContentInit(): void {
           console.log('ngAfterContentInit works');
           
       }

       
       ngAfterContentChecked(): void {
           console.log('ngAfterContentChecked works');
           
       }

       ngAfterViewInit(): void {
           console.log('ngAftetrViewInit works');
           
       }

       ngAfterViewChecked(): void {
           console.log('ngAfterViewChecked works');
           
       }

ngOnDestroy(): void {
    console.log('Destry works');
    
}

      



      

       
}
