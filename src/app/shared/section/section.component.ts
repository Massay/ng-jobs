import { Component, OnInit , Input} from '@angular/core';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() text: string;
  @Input() color: string;
  @Input() LeftPosition: boolean;
  @Input() RightPosition: boolean;
  constructor() {
      this.color = 'bg-dark';
  }

  ngOnInit() {
    if (this.LeftPosition) {
      this.RightPosition = false;
    }
    if (!this.LeftPosition) {
      this.RightPosition = true;
    }
  }

}
