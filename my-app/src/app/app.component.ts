import { Component, Input, HostBinding, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title1 = 'Angular2';
    number = [1, 2, 3];
    text = 'Section text';
    colorValue = ['#1b6458', '#ef7c7c', '#3939d3'];
    images = [
    "https://static.pexels.com/photos/216657/pexels-photo-216657.jpeg",
    "https://static.pexels.com/photos/133184/pexels-photo-133184.jpeg",
    "https://static.pexels.com/photos/132419/pexels-photo-132419.jpeg"
    ];

    showImage: false;

    changeImage() {
        if(this.showImage) {
            return 'none';
        } else {
            return 'block';
        }
    }
// create a list of elements
    title = 'Tour of Colors';
    colors = ['Red', 'Violet', 'Blue', 'Green'];
    myColor = this.colors[0];
    addColor (newColor: string) {
        if(newColor) {
            this.colors.push(newColor);
        }
    }

// input text and show on event
    values = '';
    onKey(value: string) {
        this.values = value;
    }

// create buttons that change colors
// activeStyle:string = 'yellow';
@Input() style;

@HostBinding('class.yellow-style') yellowStyle:boolean = false;
@HostBinding('class.red-style') redStyle:boolean = false;

   ngOnChanges(changes) {
      let newStyle = changes.style.currentValue;

      if(newStyle === 'yellow') {
          this.yellowStyle = true;
          this.redStyle = false;
      } else if(newStyle === 'red') {
          this.yellowStyle = false;
          this.redStyle = true;
      } else {

      }
  }

}
