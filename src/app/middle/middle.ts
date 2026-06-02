import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-middle',
  imports: [],
  templateUrl: './middle.html',
  styleUrl: './middle.css'
})
export class Middle implements AfterViewInit {
  ngAfterViewInit(): void {
    const video = document.getElementById('myvideo') as HTMLVideoElement | null;
    if (video) {
      video.muted = true;
    }
  }

}
