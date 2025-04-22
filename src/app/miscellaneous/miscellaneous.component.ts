import { Component } from '@angular/core';
import { PageContainerComponent } from '../page-container/page-container.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-miscellaneous',
  imports: [PageContainerComponent, ShowcaseComponent],
  templateUrl: './miscellaneous.component.html',
  styleUrl: './miscellaneous.component.css'
})
export class MiscellaneousComponent {
  constructor (public navService: NavigationService) {}
  
}
