import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { History } from '../shared/history.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [ HistoryService ]
})
export class NewsComponent implements OnInit {

  title = 'News';
  subtitle = 'Confira as últimas histórias adicionadas e atualizadas no MyHistory';

  public historys: History[];
  
  constructor(
    private historysService: HistoryService
  ) { }

  ngOnInit() {
  }

}
