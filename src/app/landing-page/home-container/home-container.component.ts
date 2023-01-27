import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
})
export class HomeContainerComponent implements OnInit {

  public getPledgeDetails$:Observable<any[]>
  constructor(
    private _service:LandingService
  ) { 
    this.getPledgeDetails$ = new Observable();
  }

  ngOnInit(): void {
    this.getPledgeDetails$ = this._service.convertPledge.asObservable();
  }

  public emitOverlayData(data:any){
    this._service.pledge[data.id] = data;
  }

}
