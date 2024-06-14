import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByKey',
  standalone: true
})
export class FilterByKeyPipe implements PipeTransform {

  transform(list: object[], filter: string, key: string): object[] {
    if (!list?.length) {
      return [];
    }

    if(!filter) {
      return list;
    }
    return list.filter( (value: any) => (value[key]?.toLowerCase())?.indexOf(filter.toLowerCase()) >= 0);
  }

}
