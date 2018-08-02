import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-spinnerwheel',
    templateUrl: './spinnerwheel.component.html',
    styleUrls: ['./spinnerwheel.component.css']
})

export class SpinnerwheelComponent implements OnInit {
    @Input() fullPath : string = "../assets/default.gif";

    constructor() { 
    }

    ngOnInit(){
    }
}
