import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BannerMessage {
  message: string;
  type: 'success' | 'error';
}

@Injectable({ providedIn: 'root' })
export class BannerService {
  private _banner$ = new BehaviorSubject<BannerMessage | null>(null);
  banner$ = this._banner$.asObservable();

  show(message: string, type: 'success' | 'error' = 'success', duration = 3000) {
    this._banner$.next({ message, type });
    setTimeout(() => this._banner$.next(null), duration);
  }
}
