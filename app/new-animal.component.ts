import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'new-animal',
	template: `
    <h1>New Animal</h1><br>
      <div>
        <label>Species:</label>
        <input #newSpecies><br><br>
				<label>Name:</label>
        <input #newName><br><br>
				<label>Age:</label>
        <input #newAge><br><br>
				<label>Diet:</label>
        <input #newDiet><br><br>
				<label>Location:</label>
        <input #newLocation><br><br>
				<label>Caretakers:</label>
        <input #newCaretakers><br><br>
				<label>Sex:</label>
        <input #newSex><br><br>
				<label>Likes:</label>
        <input #newLikes><br><br>
				<label>Dislikes:</label>
        <input #newDislikes><br>
      </div>
      <div>

        <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
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
