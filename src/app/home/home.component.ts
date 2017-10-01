import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { History } from '../shared/history.model';

import { DestaqueComponent } from '../destaque/destaque.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HistoryService ]
})
export class HomeComponent implements OnInit {

  public historys: History[];

  constructor(
    private historysService: HistoryService
  ) { }

  ngOnInit() {

    this.historysService.getHistory()
      .then(( historys: History[] ) => {
        this.historys = historys;
      })
      .catch((param: any) => {
        console.log(param);
      });

  }

}
