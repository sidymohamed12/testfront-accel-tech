import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Dropdown } from '../dropdown/dropdown';
import { DropdownItem } from '../dropdown-item/dropdown-item';

@Component({
  selector: 'app-notification-dropdown',
  imports: [CommonModule, RouterModule, Dropdown, DropdownItem],
  templateUrl: './notification-dropdown.html',
  styleUrl: './notification-dropdown.css',
})
export class NotificationDropdown {
  isOpen = false;
  notifying = true;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.notifying = false;
  }

  closeDropdown() {
    this.isOpen = false;
  }
}
