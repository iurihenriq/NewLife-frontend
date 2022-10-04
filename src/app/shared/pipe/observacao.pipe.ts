import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'observacao'
})
export class ObservacaoPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value === null || value === "") { return '-' }
    else { return value }
  }
}