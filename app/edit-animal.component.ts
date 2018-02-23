import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'edit-animal',
	template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>{{childSelectedAnimal.description}}</h3>
          <p>Animal Admitted? {{childSelectedAnimal.done}}</p>
          <hr>
          <h3>Edit Animal</h3>
          <label>Enter Animal Description:</label>
          <input [(ngModel)]="childSelectedAnimal.description">
          <label>Enter Animal Priority (1-3):</label><br>
          <input type="radio" [(ngModel)]="childSelectedAnimal.priority" [value]="1">1 (Low Priority)<br>
          <input type="radio" [(ngModel)]="childSelectedAnimal.priority" [value]="2">2 (Medium Priority)<br>
          <input type="radio" [(ngModel)]="childSelectedAnimal.priority" [value]="3">3 (High Priority)
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
