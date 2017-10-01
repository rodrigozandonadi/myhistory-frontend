import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css'],
  providers: [ HistoryService ]
})
export class FormloginComponent implements OnInit {

  public historys: History[];

  constructor(
    private historysService: HistoryService
  ) { }

  ngOnInit() {
  }

}
