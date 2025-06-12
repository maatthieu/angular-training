import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './routing.html',
  styleUrl: './routing.css'
})
export class Routing {
  router: Router = inject(Router);

  goToPage2() {
    this.router.navigateByUrl("/page2/10");
  }
}
