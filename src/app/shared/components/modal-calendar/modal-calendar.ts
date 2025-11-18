import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  OnInit,
  OnDestroy,
  HostListener,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-modal-calendar',
  imports: [CommonModule],
  templateUrl: './modal-calendar.html',
  styleUrl: './modal-calendar.css',
})
export class ModalCalendar implements OnInit, OnDestroy, OnChanges {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Input() className = '';
  @Input() showCloseButton = true;
  @Input() isFullscreen = false;

  // 🥅 Nouvelles propriétés pour les détails du match
  @Input() teamA: string = 'Équipe Locale';
  @Input() teamB: string = 'Équipe Visiteuse';
  @Input() location: string = 'Stade Non Spécifié';
  @Input() matchTime: string = 'Heure Non Définie';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }

  ngOnDestroy() {
    document.body.style.overflow = 'unset';
  }

  ngOnChanges() {
    document.body.style.overflow = this.isOpen ? 'hidden' : 'unset';
  }

  onBackdropClick(event: MouseEvent) {
    if (!this.isFullscreen) {
      this.close.emit();
    }
  }

  onContentClick(event: MouseEvent) {
    event.stopPropagation();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent | any) {
    if (event.key === 'Escape' && this.isOpen) {
      this.close.emit();
    }
  }
}
