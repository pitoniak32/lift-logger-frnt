import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LiftLogsService } from '../liftlogs.service';

@Component({
  selector: 'app-lift',
  templateUrl: './liftlogs.component.html',
  styleUrls: ['./liftlogs.component.css']
})
export class LiftLogsComponent implements OnInit {

  liftLogs$: Observable<any>
  title = 'test'

  constructor(private liftLogService: LiftLogsService) {
    this.liftLogs$ = this.liftLogService.getLiftLogs()
  }

  ngOnInit(): void {
  }

}
