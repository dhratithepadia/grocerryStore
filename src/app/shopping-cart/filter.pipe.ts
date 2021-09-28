import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: Iproduct[], filteredString:any): Iproduct[] {
    if(!data || !filteredString){
    return data;
    }else{
      return data.filter(data=> data.type.toLocaleLowerCase().includes(filteredString.toLocaleLowerCase()));
    }
  }


}
