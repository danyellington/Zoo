import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'new-animal',
	template: `
    <h1>New Animal</h1>
      <div>
        <label>Enter Animal Description</label>
        <input #newDescription>
      </div>
      <div>
        <label>Animal Priority:</label>
        <select #newPriority>
          <option [value]="1"> Low Priority </option>
          <option [value]="2"> Medium Priority </option>
          <option [value]="3"> High Priority </option>
        </select>
        <button (click)="submitForm(newDescription.value, newPriority.value); newDescription.value='';">Add</button>
      </div>
  `
})

export class NewAnimalComponent {
	@Output() newAnimalSender = new EventEmitter();

	submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
		var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
		this.newAnimalSender.emit(newAnimalToAdd);
	}
}
