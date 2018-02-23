import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="completedAnimals">Juvenile Animals</option>
      <option value="incompleteAnimal" selected="selected">Mature Animals</option>
    </select>
    <ol>
      <li (click)="isAdmitted(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | completeness:filterByCompleteness"><br><strong>Species:</strong> {{currentAnimal.species}}<br><strong>Name:</strong> {{currentAnimal.name}}<br><strong>Age:</strong> {{currentAnimal.age}}<br><strong>Diet:</strong> {{currentAnimal.diet}}<br><strong>Location:</strong> {{currentAnimal.location}}<br><strong>Caretakers:</strong> {{currentAnimal.caretakers}}<br><strong>Sex:</strong> {{currentAnimal.sex}}<br><strong>Likes:</strong> {{currentAnimal.likes}}<br><strong>Dislikes:</strong> {{currentAnimal.dislikes}}<br>
        <input *ngIf="currentAnimal.admitted === true" type="checkbox" checked (click)="toggleAdmitted(currentAnimal, false)"/>
        <input *ngIf="currentAnimal.admitted === false" type="checkbox" (click)="toggleAdmitted(currentAnimal, true)"/>
				<label>Check if Juvenile (Under 2 years)</label><br>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button><br>
      </li>
    </ol>
  `
})

export class AnimalListComponent {
	@Input() childAnimalList: Animal[];
	@Output() clickSender = new EventEmitter();

	onChange(optionFromMenu) {
  this.filterByCompleteness = optionFromMenu;
}

  toggleAdmitted(clickedAnimal: Animal, setCompleteness: boolean) {
     clickedAnimal.admitted = setCompleteness;
   }

	editButtonHasBeenClicked(animalToEdit: Animal) {
		this.clickSender.emit(animalToEdit);
	}

	filterByCompleteness: string = "incompleteAnimal";

	isAdmitted(clickedAnimal: Animal) {
		if (clickedAnimal.admitted === true) {
			console.log("This animal has been admitted.");
		} else {
			console.log("This animal is not yet admitted.");
		}
	};



}
