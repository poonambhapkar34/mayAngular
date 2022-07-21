import { Pipe, PipeTransform } from '@angular/core';
console.log('pipe');

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number): number {
    return value*value;
  }
  // transform(value: number, isSymbol: boolean = false):string {
  //   if (!isNaN(value)) {
  //     var currencySymbol = '₹ ';
  //     var result = value.toString().split('.');

  //     var lastThree = result[0].substring(result[0].length - 3);
  //     var otherNumbers = result[0].substring(0, result[0].length - 3);
  //     if (otherNumbers != '')
  //         lastThree = ',' + lastThree;
  //     var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  //     if (result.length > 1) {
  //         output += "." + result[1];
  //     }
  //      if(isSymbol == true){
  //       output = currencySymbol + output;
  //      }
    
  //     return output;
  //   }
  //}

}
