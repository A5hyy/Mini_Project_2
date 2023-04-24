import {Component, OnInit} from '@angular/core';
import {AddWorkoutComponent} from '../../my-workouts/add-workout/add-workout.component';
import {ExerciseComponent} from '../exercise/exercise.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-exercise',
  templateUrl: './view-exercise.component.html',
  styleUrls: ['./view-exercise.component.scss']
})
export class ViewExerciseComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onExerciseView = ($event: MouseEvent, type: string) => {
    if ($event) {
      $event.stopPropagation();
      $event.preventDefault();
    }

    const dialogRef = this.dialog.open(ExerciseComponent, {
        panelClass: 'custom-dialog-panel',
        width: '50%',
        data: {
          type: type,
        }
      }
    );

    const dialogSubs = dialogRef.afterClosed()
      .subscribe((response) => {
        if (response) {

        }
        dialogSubs.unsubscribe();
      });
  };
}
