import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  // changeDetection:ChangeDetectionStrategy.OnPush
  //to make change detection false
})
export class SignalComponent {


     //how we create signal

     course = signal('Angular 18');

     //to added types

     count = signal<number>(101);

     //change signal value
     changeCourse(){
        this.course.set('Angular.JS')
     }

     changeCount(){
      this.count.set(20);
     }


     //computed()
     //to dynamically update

     courseCount = computed(() => this.course() + " "+ this.count());



     //for non primitive data

    arr = signal<string[]>(['kop', 'pune']);

     //to add in array

    addCity(city: string) {
      this.arr.set([...this.arr(), city]);
    }
}
