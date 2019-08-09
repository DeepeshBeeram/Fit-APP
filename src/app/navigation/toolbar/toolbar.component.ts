import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() sideNavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onToggle(){
    this.sideNavToggle.emit();

  }

}
