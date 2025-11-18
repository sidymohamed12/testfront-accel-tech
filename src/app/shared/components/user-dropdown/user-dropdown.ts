import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Dropdown } from '../dropdown/dropdown';
import { DropdownItemTwo } from '../dropdown-item-two/dropdown-item-two';

@Component({
  selector: 'app-user-dropdown',
  imports: [CommonModule, RouterModule, Dropdown, DropdownItemTwo],
  templateUrl: './user-dropdown.html',
  styleUrl: './user-dropdown.css',
})
export class UserDropdown {
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }
}
