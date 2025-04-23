import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navbar',
  imports: [BsDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isComponentsDropdownOpen = false;

  @ViewChild('componentsDropdownMenu') componentsDropdownMenu !: ElementRef;
  @ViewChild('componentsDropdownBtn') componentsDropdownBtn !: ElementRef;

  @HostListener('document:click', ['$event'])
  onComponentsClick(event: MouseEvent) {
    if (this.componentsDropdownBtn?.nativeElement.contains(event.target) && window.innerWidth >= 768) {
      this.navService.navTo('components');
    }
    this.updateComponentsDropdownVisibility(event);
  }

  @HostListener('document:mousemove', ['$event'])
  onComponentsHover(event: MouseEvent) {
    this.updateComponentsDropdownVisibility(event);
  }

  updateComponentsDropdownVisibility(event: MouseEvent) {
    this.isComponentsDropdownOpen = 
      this.componentsDropdownMenu?.nativeElement.contains(event.target)
      || this.componentsDropdownBtn?.nativeElement.contains(event.target)
  }
  
  constructor(public navService: NavigationService) {}
}
