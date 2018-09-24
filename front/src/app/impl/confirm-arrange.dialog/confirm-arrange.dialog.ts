import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'confirm-arrange.dialog',
    templateUrl: 'confirm-arrange.dialog.html',
  })
  export class ConfirmArrangeDialog {
    private moveOrf: boolean = true;

    constructor(
      public dialogRef: MatDialogRef<ConfirmArrangeDialog>) {
      }

    onNoClick(): void {
      this.dialogRef.close({arrange: false});
    }
    onYesClick(): void {
      this.dialogRef.close({arrange: true, moveOrf: this.moveOrf});
    }
  }
  