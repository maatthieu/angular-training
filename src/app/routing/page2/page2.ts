import { AsyncPipe } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-page2',
  imports: [AsyncPipe],
  templateUrl: './page2.html',
  styleUrl: './page2.css'
})
export class Page2 {
  activatedRoute = inject (ActivatedRoute);
  router = inject(Router);

  idFromSnapshot: number;
  idFromObs?: number;
  idFromObservable$: Observable<number>;
  idSignal: Signal<number | undefined>;

  constructor() {
    this.idFromSnapshot = Number(this.activatedRoute.snapshot.params['id']);

    this.activatedRoute.params.subscribe(params => {
      this.idFromObs = Number(params['id']);
    })

    this.idFromObservable$ = this.activatedRoute.params
      .pipe(map(params => Number(params['id'])));

    this.idSignal = toSignal(this.idFromObservable$);
  }

  onPrev() {
    this.idFromSnapshot -= 1;

    this.router.navigate(["page2", this.idFromObs! -1])
  }

  onNext() {
    this.idFromSnapshot++;

    this.router.navigate(["page2", this.idFromObs! +1])
  }
}
