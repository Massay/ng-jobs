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
  constructor() { }

  ngOnInit() {
  }

}
