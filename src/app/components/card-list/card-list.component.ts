import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  trigger, transition, style, animate, query, stagger
} from '@angular/animations';
import { Card } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardItemComponent } from '../card-item/card-item.component';
import { CardService } from '../../services/card/card.service';
import { BannerService } from '../../services/banner/banner.service'


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CardItemComponent],
animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(10px) scale(.98)' }),
          stagger('60ms', [
            animate('260ms cubic-bezier(.2,.8,.2,1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
          ])
        ], { optional: true }),
        query(':leave', [
          stagger('40ms', [
            animate('200ms ease', style({ opacity: 0, transform: 'translateY(-10px) scale(.98)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class CardListComponent implements OnInit {
  items: Card[] = [];
  loading = false;
  newTitle = '';
  newDesc = '';
  @ViewChild('descInput') descInput!: ElementRef;

  constructor(private cardService: CardService, private banner: BannerService) {}

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.loading = true;
    this.cardService.getAll().subscribe({
      next: (data: any) => { this.items = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  focusDesc() {
    this.descInput.nativeElement.focus();
  }

  add() {
    if (!this.newTitle.trim()) return;
    const tempId = Date.now();
    const newItem: Card = { id: tempId, title: this.newTitle, description: this.newDesc || '' };

    // optimistic UI
    this.items = [newItem, ...this.items];
    this.newTitle = '';
    this.newDesc = '';

    // call API
    this.cardService.create({ title: newItem.title, description: newItem.description }).subscribe({
      next: (realItem: any) => {
        this.items = this.items.map(i => i.id === tempId ? realItem : i);
        this.banner.show('Successfully Added', 'success');
      },
      error: () => {
        this.items = this.items.filter(i => i.id !== tempId);
      }
    });
  }

  remove(item: Card) {
    if (!item.id) return;
    const prev = [...this.items];
    this.items = this.items.filter(i => i.id !== item.id);

    this.cardService.delete(item.id).subscribe({
      next: () => { 
        this.banner.show('Successfully Deleted', 'success');
      },
      error: () => { 
        this.items = prev;
        this.banner.show('Failed to delete item', 'error');
       }
    });
  }
}



