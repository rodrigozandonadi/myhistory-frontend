import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { History } from '../shared/history.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ HistoryService ]
})
export class ContentComponent implements OnInit {

  public historys: History[];

  constructor(private historysService: HistoryService) { }

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
