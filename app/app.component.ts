import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
     <h1>Animal Admissions: {{month}}/{{day}}/{{year}}</h1>
     <h3>{{currentFocus}}</h3>
     <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
     <hr>
     <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
     <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
   </div>
 `
})

export class AppComponent {
 currentFocus: string = 'Admission Status';
 currentTime = new Date();
 month: number = this.currentTime.getMonth() + 1;
 day: number = this.currentTime.getDate();
 year: number = this.currentTime.getFullYear();
 selectedAnimal: Animal = null;

 masterAnimalList: Animal[] = [
 ];

 editAnimal(clickedAnimal) {
   this.selectedAnimal = clickedAnimal;
 };

 finishedEditing() {
   this.selectedAnimal = null;
 }

 addAnimal(newAnimalFromChild: Animal) {
   this.masterAnimalList.push(newAnimalFromChild);
 }
}
