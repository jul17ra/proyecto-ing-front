import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FinalUser } from '../model/FinalUser.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private finalUserData: Subject<FinalUser> = new Subject<FinalUser>();

  next(data: FinalUser) {
    this.finalUserData.next(data);
  }

  select(): Observable<FinalUser> {
    return this.finalUserData.asObservable();
  }


}
