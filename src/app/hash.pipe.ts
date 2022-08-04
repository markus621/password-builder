import { Pipe, PipeTransform } from '@angular/core';
import { sha512 } from 'js-sha512';
import { StorageService } from 'src/app/storage.service';

@Pipe({
  name: 'hash'
})
export class HashPipe implements PipeTransform {

  protected repl = [
    {s: 0, r: '!'},
    {s: 2, r: '#'},
    {s: 3, r: '$'},
    {s: 6, r: '*'},
    {s: 7, r: '+'},
    {s: 9, r: '/'}
  ];

  constructor(private store: StorageService) {
  }

  transform(pkey: string, len: number, spec: boolean): string {
    const k1 = this.store.get(StorageService.KEY1);
    const k2 = this.store.get(StorageService.KEY2);
    const k3 = this.store.get(StorageService.KEY3);


    const maps = [
      sha512(k1 + pkey + k2 + pkey + k3).toUpperCase(),
      this.replaceAll(sha512(k1 + pkey + k3 + pkey + k2), spec).toUpperCase(),
      sha512(k2 + pkey + k3 + pkey + k1),
      this.replaceAll(sha512(k2 + pkey + k1 + pkey + k3), spec)
    ];

    const min = Math.min(...maps.map(el => {
      return el.toString().length;
    }));

    const step = Math.floor(min / len);

    return this.range(0, min, step).map((i, j) => {
      return maps[j % 4].substring(i, i + 1);
    }).join('').substring(0, len);
  }

  protected replaceAll(s: string, spec: boolean): string {
    if (!spec) {
      return s;
    }

    this.repl.forEach(e => {
      s = s.replace(new RegExp(e.s.toString(), 'g'), e.r);
    });

    return s;
  }

  protected range(start: number, stop: number, step: number): number[] {
    const mas = [start];
    while (start < stop) {
      start += step;
      mas.push(start);
    }
    return mas;
  }

}
