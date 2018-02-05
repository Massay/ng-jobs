import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  list: any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
   this.categoryService.getAll().subscribe( data => {
       console.log('category list skils', data);
       this.list = data;
   })
    //this.list = [{display: 'Item1', value: 0}, {display: 'Item1123', value: 1}, 'item2', 'item3','item4','item5'];
  }

}
