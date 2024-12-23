import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getSameValueOf(list: any[], criteria: string, value: any): number {
    const matchingItems = list.filter(item => item[criteria] === value);
    
    return matchingItems.length;
  }
}
