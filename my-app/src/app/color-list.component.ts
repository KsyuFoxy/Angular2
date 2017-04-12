import { OnInit  } from '@angular/core';

export class ColorListComponent implements OnInit {
    errorMessage: string;
    colors: Color[];
    mode = 'Observable';

    constructor (private colorService: ColorService) {}

    ngOnInit() {this.getColors(); }

    getColors() {
        this.colorService.getColors()
            .subscribe(
                colors => this.colors = colors,
                error => this.errorMessage = <any>error);
    }

    addColor(name:string) {
        if(!name) { return; }
        this.colorService.create(name)
        .subscribe(
            color => this.colors.push(color),
            error =>this.errorMessage = <any>error );
    }
}
