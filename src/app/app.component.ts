import {Component} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

/**
 * Main application component.
 */

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None // apply styles globally
})

export class AppComponent {
  title = "Vertex";
}