import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PledgePresentationComponent } from '../pledge-presentation/pledge-presentation.component';

@Injectable()
export class HomePresenterService {

  private overlayData:Subject<any>;
  public overlayData$:Observable<any>;

  constructor(
    private _overlay: Overlay
  ) { 
    this.overlayData = new Subject();
    this.overlayData$ = new Observable();
    this.overlayData$ = this.overlayData.asObservable();
  }

  public openPledgeOverlay(pledge: any[], data?: any) {
    const overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically()
    })

    const component = new ComponentPortal(PledgePresentationComponent)
    const componentRef = overlayRef.attach(component)

    overlayRef.backdropClick().subscribe(() => overlayRef.detach())

    componentRef.instance.pledgeForm = pledge;

    if (data)
      componentRef.instance.rewardSelect = data

    componentRef.instance.emitUpdatedData.subscribe((items) => {
      this.overlayData.next(items)
      overlayRef.detach();
    })

  }
}
