import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { BannerComponent } from './shared/banner/banner.component'
import { BannerMessage, BannerService } from './services/banner/banner.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, CardListComponent, BannerComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  newTitle = '';
  newBody = '';
  banner$ = this.bannerService.banner$ as import('rxjs').Observable<BannerMessage | null>;

  constructor(public bannerService: BannerService) {}

  // strongly type the async observable

  onAdded() {
    this.newTitle = '';
    this.newBody = '';
  }
}
