import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  fdata:any;
  results:any;
  submitted = false;
  emplye: any;
  searchText;
  constructor(private s: DetailsService, private fb: FormBuilder) {} 
    form = this.fb.group({
    id: [],
    fname: ['', Validators.required],
    lname: ['', Validators.required] 
  })
ngOnInit() {
     this.getData();
  }

   getData()  {
    this.s.ge().subscribe(res=>this.fdata=res); 
    
  }
    get f() { return this.form.controls; }
    onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    alert('Are you sure want to add data ?')
    this.s.po(this.form.value).subscribe(res=>this.getData());
    this.form.reset();
    this.submitted = false;
}
  del(d) {
    alert('Are you sure to delete ?')
    this.s.de(d.id).subscribe(res=>this.getData());
  }
 
}

