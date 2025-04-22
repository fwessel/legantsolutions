import { Component } from '@angular/core';
import { PageContainerComponent } from "../page-container/page-container.component";
import { ShowcaseComponent } from '../showcase/showcase.component';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-switches',
  imports: [PageContainerComponent, ShowcaseComponent],
  templateUrl: './switches.component.html',
  styleUrl: './switches.component.css'
})
export class SwitchesComponent {
  constructor(public navService: NavigationService) {}

}
