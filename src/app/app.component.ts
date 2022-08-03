import { Component, OnInit } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  setting = false;

  key1 = '';
  key2 = '';
  key3 = '';

  pkey = '';
  spec = true;
  list: number[] = [];

  constructor(protected store: StorageService) {
  }

  ngOnInit() {
    this.setting = !this.store.exist();
    this.loadSetting();
    this.list = this.range(6, 34, 2);
  }

  saveSetting(): void {
    this.store.set(StorageService.KEY1, String(this.key1));
    this.store.set(StorageService.KEY2, String(this.key2));
    this.store.set(StorageService.KEY3, String(this.key3));
    this.setting = false;
  }

  loadSetting(): void {
    this.key1 = this.store.get(StorageService.KEY1) || '';
    this.key2 = this.store.get(StorageService.KEY2) || '';
    this.key3 = this.store.get(StorageService.KEY3) || '';
  }

  range(start: number, stop: number, step: number): number[] {
    const mas = [start];
    while (start < stop) {
      start += step;
      mas.push(start);
    }
    return mas;
  }

  copy(el: HTMLParagraphElement, parent: HTMLParagraphElement): void {
    if (el === null) {
      return;
    }
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = el.textContent || '';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    parent.classList.add('selected');
    setTimeout(() => {
      parent.classList.remove('selected');
    }, 5000);
  }
}
