import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { TrainingModel } from '../taining.model';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<TrainingModel>();

  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;


  constructor(private trainingServ: TrainingService) { }

  ngOnInit() {
    this.dataSource.data = this.trainingServ.completeOrCancelledExercises();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filter:string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

}
