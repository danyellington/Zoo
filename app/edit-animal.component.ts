import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'edit-animal',
	template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>{{childSelectedAnimal.Species}}</h3>
					<h3>{{childSelectedAnimal.Name}}</h3>
          <p>Juvenile Status: {{childSelectedAnimal.admitted}}</p>
          <hr>
          <h3>Edit Animal</h3>
          <label>Edit Animal Description:</label><br><br>
					<label>Species</label><br>
          <input [(ngModel)]="childSelectedAnimal.Species"><br><br>
					<label>Name</label><br>
					<input [(ngModel)]="childSelectedAnimal.Name"><br><br>
					<label>Age</label><br>
					<input [(ngModel)]="childSelectedAnimal.Age"><br><br>
					<label>Diet</label><br>
					<input [(ngModel)]="childSelectedAnimal.Diet"><br><br>
					<label>Location</label><br>
					<input [(ngModel)]="childSelectedAnimal.Location"><br><br>
					<label>Caretakers</label><br>
					<input [(ngModel)]="childSelectedAnimal.Caretakers"><br><br>
					<label>Sex</label><br>
					<input [(ngModel)]="childSelectedAnimal.Sex"><br><br>
					<label>Likes</label><br>
					<input [(ngModel)]="childSelectedAnimal.Likes"><br><br>
					<label>Dislikes</label><br>
					<input [(ngModel)]="childSelectedAnimal.Dislikes"><br><br>
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
	@Input() childSelectedAnimal: Animal;
	@Output() doneButtonClickedSender = new EventEmitter();

	doneButtonClicked() {
		this.doneButtonClickedSender.emit();
	}

}
