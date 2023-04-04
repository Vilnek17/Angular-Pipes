import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

   transform(users: any[]): any[] {
     return users.sort((a, b) => a.name.localeCompare(b.name));
   }
 
    //  transform(users: any[]): any[] {
    //   return users.sort((a, b) => a.name.localeCompare(b.name));
    // }
  }
