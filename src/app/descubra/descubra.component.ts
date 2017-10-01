import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { History } from '../shared/history.model';

@Component({
  selector: 'app-descubra',
  templateUrl: './descubra.component.html',
  styleUrls: ['./descubra.component.css'],
  providers: [ HistoryService ]
})
export class DescubraComponent implements OnInit {

  title = 'Encontre uma History'

  public historys: History[];
  
  constructor(
    private historysService: HistoryService
  ) { }

  ngOnInit() {
  }

}
