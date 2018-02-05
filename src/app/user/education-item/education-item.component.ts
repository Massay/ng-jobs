import { Component, OnInit , Output} from '@angular/core';
import {Education} from '../../shared/models/education.model';
import { EducationService } from "../../shared/services/education.service";
import { FormBuilder , FormGroup} from "@angular/forms";

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  public fg: FormGroup;
  public months: any;
  public years : any;


  constructor(private educationService: EducationService, private fb: FormBuilder) { }

  ngOnInit() {
     this.years = [
       '1992','1993','1994','1995',
       '1996','1997','1998','1999',
       '2000','2001','2002','2003',
       '2004','2005','2006','2007',
       '2008','2009','2010','2011',
       '2012','2013','2014','2015',
       '2016','2017','2018'
     ]
    this.months =[
        {
          id: 1,
          name: 'January'
        },
        {
          id: 2,
          name: 'Febuary'
        },
        {
          id: 3,
          name: 'March'
        },
        {
          id: 4,
          name: 'April'
        },  {
            id: 5,
            name: 'May'
          },  {
              id: 6,
              name: 'June'
            },  {
                id: 7,
                name: 'July'
              },  {
                  id: 8,
                  name: 'August'
                },
                {
                  id: 9,
                  name: 'September'
                },

                {
                  id: 10,
                  name: 'October'
                },
                {
                  id: 11,
                  name: 'November'
                },
                {
                  id: 12,
                  name: 'December'
                }


    ];
      this.fg  = this.fb.group({
          'name': [],
          'location': [],
          'field': [],
          'start_date': [],
          'end_date': [],
          'current': [],
          'from_year':[],
          'from_month':[],
          'to_year':[],
          'to_month':[]
      });
  }

  addEducation(){
      this.fg.controls['start_date'].setValue(this.fg.controls['from_year'].value+'-0'+this.fg.controls['from_month'].value+'-01');
      this.fg.controls['end_date'].setValue(this.fg.controls['to_year'].value+'-0'+this.fg.controls['to_month'].value+'-01')
      this.fg.removeControl['from_month'];
      this.fg.removeControl['from_year'];
      this.fg.removeControl['to_year'];
      this.fg.removeControl['to_month'];

      console.log('adding eduction details', this.fg.value);
      this.educationService.add(this.fg.value).subscribe( data => {
          console.log('after adding education', data);
      } )
  }


}
