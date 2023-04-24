import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AlertService} from '../../../../../main/service/common/alert.service';
import {WorkoutService} from '../../service/workout.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  title: any;
  type: string;
  content: string;

  constructor(public dialogRef: MatDialogRef<ExerciseComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.type = this.data.type;

    switch (this.type) {
      case 'ABDUCTORS' :
        this.title = 'Abductors';
        this.content = 'Abductors exercises. Target your abductors with these movements';
        break;

      case 'ABS' :
        this.title = 'Abs';
        this.content = 'Ab exercises. Build impressive "6-pack abs" with these movements';
        break;

      case 'ADDUCTORS' :
        this.title = 'Adductors';
        this.content = 'Adductors exercises. Target your adductors with these movements';
        break;

      case 'BICEPS' :
        this.title = 'Biceps';
        this.content = 'Biceps exercises. Build sleeve-splitting guns with these exercises';
        break;

      case 'CALVES' :
        this.title = 'Calves';
        this.content = 'Calf exercises. Essential exercises for developing calf muscle size';
        break;

      case 'CHEST' :
        this.title = 'Chest';
        this.content = 'Chest exercises. Learn how to build a big, strong and muscular chest.';
        break;

      case 'FOREARMS' :
        this.title = 'Forearms';
        this.content = 'Forearm exercises. Build "Popeye Forearms" with these exercises.';
        break;

      case 'GLUTES' :
        this.title = 'Glutes';
        this.content = 'Glute exercises. Target your glutes with these movements.';
        break;

      case 'HAMSTRINGS' :
        this.title = 'Hamstrings';
        this.content = 'Hamstring exercises. Build strength and flexibility in your hamstrings';
        break;
    }
  }

  onCancelClick($event: MouseEvent) {
    if ($event) {
      $event.stopPropagation();
      $event.preventDefault();
    }

    this.dialogRef.close(false);
  }
}
