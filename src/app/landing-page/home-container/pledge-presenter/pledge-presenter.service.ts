import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class PledgePresenterService {

  private updatedData:Subject<any>;
  public updatedData$:Observable<any>;
  constructor(
    private _fb:FormBuilder
  ) { 
    this.updatedData = new Subject();
    this.updatedData$ = new Observable();
    this.updatedData$ = this.updatedData.asObservable();
  }

  public getGroup(){
    return this._fb.group({
      pledgeType:[''],
      donate:['']
    })
  }

  public getData(data:any){
    this.updatedData.next(data)
  }
}
