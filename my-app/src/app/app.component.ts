import { Component, Input, HostBinding, NgModule } from '@angular/core';
import { ImageBox } from './imagebox';


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
// first container valiant 2
    boxes = [
        new ImageBox(1, 'https://static.pexels.com/photos/216657/pexels-photo-216657.jpeg', '#1b6458', 'Green'),
        new ImageBox(2, 'https://static.pexels.com/photos/133184/pexels-photo-133184.jpeg', '#ef7c7c', 'White'),
        new ImageBox(3, 'https://static.pexels.com/photos/132419/pexels-photo-132419.jpeg', '#3939d3', 'Blue'),
        new ImageBox(4, 'https://static.pexels.com/photos/24299/pexels-photo-24299.jpg', '#ef7c7c', 'Icy'),
        new ImageBox(5, 'https://static.pexels.com/photos/134493/pexels-photo-134493.jpeg', '#3939d3', 'Black'),
        new ImageBox(6, 'https://static.pexels.com/photos/355604/pexels-photo-355604.jpeg', '#1b6458', 'Gorgeous'),
        new ImageBox(7, 'https://static.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg', '#1b6458', 'Perfect'),
        new ImageBox(8, 'https://static.pexels.com/photos/46528/bird-songbird-cute-close-46528.jpeg', '#ef7c7c', 'Small'),
        new ImageBox(9, 'https://static.pexels.com/photos/26832/pexels-photo-26832.jpg', '#3939d3', 'Violet'),
    ];

    isShown = this.boxes.map(() => true); // [true, true, true]


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
  // calendar
inputInfo: '';
availability: '';
option: '';
inputName: '';
inputDate: '';

getInputInfo(inputName, availability, option, inputDate) {
        this.inputName = inputName;
        this.availability = availability;
        this.option = option;
        this.inputDate= inputDate;
       this.inputInfo = this.inputName + this.availability + this.option + this.inputDate;
}

}
