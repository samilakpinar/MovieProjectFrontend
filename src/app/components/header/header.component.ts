import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { FormService } from 'src/app/services/form.service';
import { MovieService } from 'src/app/services/movie.service';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route:Router
    ) { }

  email:any;
  user:any;

  

  ngOnInit(): void {
    this.user = {
      fullName: localStorage.getItem("name-surname"),
      email: localStorage.getItem("email")
    }
  }

  
  logout():void{
    localStorage.removeItem("jwt-token");
    this.route.navigate(['/']);
  }

}