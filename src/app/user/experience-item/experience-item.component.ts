import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ExperienceService } from "../../shared/services/experience.service";

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
 public fg: FormGroup;
 public months: any;
 public years : any;
  constructor(private fb: FormBuilder, private experienceService: ExperienceService) { }

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
      this.fg = this.fb.group({
         'name':[],
         'title':[],
         'start_date':[],
         'end_date':[],
         'current':[],
         'from_year':[],
         'from_month':[],
         'to_year':[],
         'to_month':[]
      });
  }

  addExperience(){
    this.fg.controls['start_date'].setValue(this.fg.controls['from_year'].value+'-0'+this.fg.controls['from_month'].value+'-01');
    this.fg.controls['end_date'].setValue(this.fg.controls['to_year'].value+'-0'+this.fg.controls['to_month'].value+'-01')
    console.log('adding experience', this.fg.value);
    this.experienceService.add(this.fg.value).subscribe( data => {
       console.log('ex created', data)
    },
  err => {
     console.error('error adding ex', err);
  } )

  }

}
