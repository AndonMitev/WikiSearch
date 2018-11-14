import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @ViewChild('username')
  username: ElementRef;

  @Output()
  output = new EventEmitter();

  register() {
    const username = this.username.nativeElement.value;
    if (username) {
      this.output.emit({ username });
    }
  }
}
