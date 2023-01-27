import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PledgePresenterService } from '../pledge-presenter/pledge-presenter.service';

@Component({
  selector: 'app-pledge-presentation',
  templateUrl: './pledge-presentation.component.html',
  viewProviders: [PledgePresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PledgePresentationComponent implements OnInit {

  @Output() public emitUpdatedData:EventEmitter<any>;  

  public pledgeGroup: FormGroup;
  public currentValue: string;
  public rewardSelect: string;
  public pledgeForm:any

  constructor(
    private _service: PledgePresenterService
  ) {
    this.pledgeGroup = this._service.getGroup()
    this.currentValue = '';
    this.rewardSelect = '';
    this.emitUpdatedData = new EventEmitter();
  }

  ngOnInit(): void {
    this.pledgeGroup.valueChanges.subscribe((data) => this.currentValue = data.pledgeType);
    this._service.updatedData$.subscribe((items) => this.emitUpdatedData.emit(items));
  }

  public onDonate(data:any){
    data.left = data.left - 1;
    let amount = {donation: this.pledgeGroup.value.donate}
    this._service.getData(Object.assign(data,amount))
  }
}
