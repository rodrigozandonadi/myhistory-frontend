import { Component, OnInit } from '@angular/core';
import { History } from '../shared/history.model';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-fantasia',
  templateUrl: './fantasia.component.html',
  styleUrls: ['./fantasia.component.css'],
  providers: [ HistoryService ]
})
export class FantasiaComponent implements OnInit {

public historys: History[];

  constructor(
    private historysService: HistoryService
  ) { }

  ngOnInit() {

    this.historysService.getHistoryPorCategoria('fantasia')
      .then(( historys: History[] ) => {
        this.historys = historys;
      })
      .catch((param: any) => {
        console.log(param);
      });

  }

}
