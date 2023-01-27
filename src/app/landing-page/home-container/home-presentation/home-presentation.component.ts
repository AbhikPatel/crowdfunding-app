import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomePresenterService } from '../home-presenter/home-presenter.service';

@Component({
  selector: 'app-home-presentation',
  templateUrl: './home-presentation.component.html',
  viewProviders: [HomePresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePresentationComponent implements OnInit {


  @Input() public set pledgeDetails(v: any[] | null) {
    if (v) {
      this._pledgeDetails = v;
    }
  }
  public get pledgeDetails(): any[] | null {
    return this._pledgeDetails;
  }

  @Output() public emitOverlayData:EventEmitter<any>  

  private _pledgeDetails: any[] | null;

  public markText: string;
  public currentDonation: number;
  public currentBackers: number;
  public progressBar: number;

  constructor(
    private _service: HomePresenterService,
    private _cdr:ChangeDetectorRef
  ) {
    this.markText = 'Bookmark';
    this._pledgeDetails = [];
    this.currentDonation = 0;
    this.currentBackers = 0;
    this.progressBar = 0;
    this.emitOverlayData = new EventEmitter();
  }

  ngOnInit(): void {
    this._service.overlayData$.subscribe((data) => {
      this.updateProgress(data.donation);
      delete data.donation
      this.emitOverlayData.emit(data)
    })
  }

  public onBookmark() {
    this.markText === 'Bookmark' ? this.markText = 'Bookmarked' : this.markText = 'Bookmark'
  }

  public onProject(data?: any) {
    if (this.pledgeDetails)
      this._service.openPledgeOverlay(this.pledgeDetails, data);
  }

  public updateProgress(donation:number) {
    this.currentBackers++;
    this.currentDonation += donation;
    this.progressBar = (this.currentDonation / 100000) * 100;
    this._cdr.markForCheck();
  }
}
