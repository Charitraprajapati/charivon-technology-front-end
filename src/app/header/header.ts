import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Whatwedo } from '../whatwedo/whatwedo';
@Component({
  selector: 'app-header',
  imports: [ RouterOutlet,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  readonly dialog = inject(MatDialog);
  openDiaLog() : void{
  this.dialog.open(Whatwedo)
  }

}
