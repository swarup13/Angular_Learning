import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    if(value !== null && value !== '' && value !== undefined){

       return value;
    }
    return 'Not Available';
  }



}
