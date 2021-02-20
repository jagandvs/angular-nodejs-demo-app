import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getNameForCodes',
  pure: true
})
export class GetNameForCodesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    return null;
  }

}
