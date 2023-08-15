import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regex'
})
export class RegexPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    // let arr = value.split(' ').filter(item => Number(item) )
    // console.log(arr)

    // return arr.map(item => 'UAH '+item + '  ; ')

    let pattern = /\d+/g;

    let res = value.match(pattern);
    res?.join(' ')

    return res

  }

}
