import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showingRecepies = false; // else ingredients

  handleNavigationChange(childVariable: boolean) {
    this.showingRecepies = childVariable;
  }
}
