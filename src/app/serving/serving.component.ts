import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-serving',
  // template: `<h1>Heading 1</h1>
  //   ,
  //   <h2>Heading 2</h2>
  //   ,
  //   <h3>Heading 3</h3>
  //   ,
  //   <h4>Heading 4</h4>
  //   ,
  //   <h5>Heading 5</h5>
  //   ,
  //   <h6>Heading 6</h6>`,
  templateUrl: './serving.component.html',
  styleUrls: ['./serving.component.css'],
})
export class ServingComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Created!';
  serverName = 'TestServer';
  firstName = 'UserName';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  // onCreateServer() {
  //   this.serverCreationStatus = 'Server Was Created! Name is' + this.serverName;
  // }

  onCreateEmptyString() {
    this.firstName = ' ';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
