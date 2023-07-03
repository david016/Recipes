import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;
  // showingRecepies = true; // else ingridients
  @Output()
  navigationChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeNavigation(recepies: boolean): void {
    // this.showingRecepies = !this.showingRecepies;
    // console.log(this.showingRecepies);

    this.navigationChanged.emit(recepies);
  }
}
