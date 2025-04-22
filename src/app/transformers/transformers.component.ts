import { Component } from '@angular/core';
import { PageContainerComponent } from '../page-container/page-container.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-transformers',
  imports: [PageContainerComponent, ShowcaseComponent],
  templateUrl: './transformers.component.html',
  styleUrl: './transformers.component.css'
})
export class TransformersComponent {
  constructor(public navService: NavigationService) {}

}
