import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public static KEY1 = 'key1';
  public static KEY2 = 'key2';
  public static KEY3 = 'key3';

  constructor() {
  }

  exist(): boolean {
    return this.get(StorageService.KEY1) !== null &&
      this.get(StorageService.KEY2) !== null &&
      this.get(StorageService.KEY3) !== null;
  }

  set(key: string, data: string): void {
    try {
      localStorage.setItem(key, btoa(encodeURIComponent(data)));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
      const vv = localStorage.getItem(key);
      if (vv === null) {
        return null;
      }
      return decodeURIComponent(atob(vv));
    } catch (e) {
      return null;
    }
  }
}
