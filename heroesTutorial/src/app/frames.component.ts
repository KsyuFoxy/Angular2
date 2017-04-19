import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Frame } from './frame';
import { FrameDetailComponent } from './frame-detail.component';
import { FrameService } from './frame.service';


@Component({
  selector: 'my-frames',
  template: `
    <div class="frames">
        <section *ngFor="let frame of frames"
            (click)="onSelect(frame)"
            [class.selected]="frame === selectedFrame" >
            <div class='image'>
                <img src='{{frame.image}}'/>
            </div>
            <div class="badge">{{frame.id}}</div>
            <p class='name'>{{frame.name}}</p>
        </section>
    </div>
    <my-frame-details [frame]='selectedFrame'></my-frame-details>
  `,
  styleUrls: [ './frames.component.css' ]
})

export class FramesComponent implements OnInit {
    selectedFrame: Frame;
    frames: Frame[];

    constructor(private _frameService: FrameService) {}

    ngOnInit () {
        this.getFrames();
    }
    getFrames() {
        this._frameService.getFrames().then(frames => this.frames = frames);
    }

    onSelect(frame: Frame): void {
      this.selectedFrame = frame;
    }

 }
