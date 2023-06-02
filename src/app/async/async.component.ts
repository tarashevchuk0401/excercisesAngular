import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { AsyncserviceService } from './asyncservice.service';
import { IProduct } from './Iproduct';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncComponent implements OnInit {

  productSubscription?: Subscription
  async = of(1, 2, 3, 4, true);
  products?: Observable<IProduct[]>;

  res = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise');

    }, 3000)
  })

  constructor(private appService: AsyncserviceService) { }
  ngOnInit(): void {
    this.products = this.appService.Products$;
  }



}
