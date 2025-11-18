import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-backdrop',
  imports: [AsyncPipe],
  templateUrl: './backdrop.html',
  styleUrl: './backdrop.css',
})
export class Backdrop {
  readonly isMobileOpen$;

  constructor(private sidebarService: SidebarService) {
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
  }

  closeSidebar() {
    this.sidebarService.setMobileOpen(false);
  }
}
