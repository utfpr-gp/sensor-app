import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'sensor-app';

  ready: boolean = false;
  active: boolean = true;

  private readySubject = new BehaviorSubject<boolean>(this.ready);
  private activeSubject = new BehaviorSubject<boolean>(this.active);

  ngOnInit() {
    this.readySubject.subscribe(value => {
      this.ready = value;
      this.rule()
    });

    this.activeSubject.subscribe(value => {
      this.active = value;
      this.rule()
    });
  }

  rule() {
    if (this.ready == false && this.active == true) {
      console.log("Executou!");
      this.readySubject.next(true);
      this.activeSubject.next(false);
    }
  }

}
