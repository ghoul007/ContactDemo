import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: 
  `<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Contact Project</a>
    </div>
     
  </div>
</nav>
`
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}