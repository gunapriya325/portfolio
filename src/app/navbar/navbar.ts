import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  closeMenu() {
    const menu = document.getElementById('menu-toggle') as HTMLInputElement;

    if (menu) {
      menu.checked = false;
    }
  }

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {

    const menu = document.getElementById('menu-toggle') as HTMLInputElement;

    if (!menu?.checked) return;

    const clickedInsideNavbar =
      this.elementRef.nativeElement.contains(event.target);

    if (!clickedInsideNavbar) {
      menu.checked = false;
    }
  }
}