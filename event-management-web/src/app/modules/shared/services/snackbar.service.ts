import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) { }

  showMessage(message: string, action = 'close', duration = 5000){
    this.snackBar.open(message, action, 
      {
        duration,
        horizontalPosition: 'center', 
        verticalPosition: 'top',
        panelClass: ['snackbar']
      })
 }
}
