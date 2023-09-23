import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  // alert() {
  //   Swal.fire({
  //     title: "Oops...",
  //     text: "Please have a title and body in your post.",
  //     imageUrl: "assets/image/chickenville.png",
  //     background: "#16191c",
  //     color: "white",
  //     imageWidth: 200,
  //     imageHeight: 200,
  //   });
  // }



}
