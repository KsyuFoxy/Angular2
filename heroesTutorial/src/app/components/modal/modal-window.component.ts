import { Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'modal-window',
  template: `
         <div (click)="onContainerClicked($event)" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
               [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">

            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <ng-content select=".app-modal-header"></ng-content>
                    </div>
                    <div class="modal-body">
                        <ng-content select=".app-modal-body"></ng-content>
                    </div>
                    <div class="modal-footer">
                        <ng-content select=".app-modal-footer"></ng-content>
                    </div>
                </div>
            </div>
         </div>
  `,
  styleUrls: ['./modal.component.css']
})
export class ModalDialog {

  public visible = false;
  private visibleAnimate = false;
  @Input() person;

  @Input() added = true;
  @Output() addedChange = new EventEmitter();

  constructor(){}

  public show(): void {
    this.visible = true;
    this.person.id = '';
    this.person.name = '';
    this.person.image = '';
    this.person.isSaved = false;
    setTimeout(() => this.visibleAnimate = true, 100);

  }
  public edit(): void {
      this.visible = true;
      this.person.isSaved = false;
      setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    this.person.isSaved = true;
    this.added = false;
    this.addedChange.emit(this.added);
    setTimeout(() => this.visible = false, 300);
  }
  public delete(): void {
     this.visibleAnimate = false;
     this.person.isSaved = false;
     this.added = false;
     this.addedChange.emit(this.added);
     setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

}
