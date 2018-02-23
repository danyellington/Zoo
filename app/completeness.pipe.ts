import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {

  transform(input: Animal[], desiredCompleteness) {
    var output: Animal[] = [];
    if(desiredCompleteness === "juevenileAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].admitted === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "matureAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].admitted === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
