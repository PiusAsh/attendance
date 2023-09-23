import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // @Input()
  // text!: string;
  
  // @Input() textt!: string;
  // @Input() btnClass: string = "yellow";

  constructor() { }
  
  ngOnInit(): void {
  }

}
