import { Component, OnInit } from '@angular/core';
import { History } from '../shared/history.model';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-newhistory',
  templateUrl: './newhistory.component.html',
  styleUrls: ['./newhistory.component.css'],
  providers: [ HistoryService ]
})
export class NewhistoryComponent implements OnInit {

  public historys: History[];

  constructor(
    private historysService: HistoryService
  ) { }

  ngOnInit() {

    this.historysService.postNewHistory()
      .then(( historys: History[] ) => {
        this.historys = historys;
      })
      .catch((param: any) => {
        console.log(param);
      });

  }

}
