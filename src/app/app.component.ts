import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[] =[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data;
            },
      (error) => {
        console.error('Error handling response:', error);
      }
    );
  }
}

  

  





