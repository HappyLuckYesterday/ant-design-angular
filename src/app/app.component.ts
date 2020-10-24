import { Component } from '@angular/core';

import {
  ActivationEnd,
  NavigationEnd,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router
} from '@angular/router';

import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ant-design-angular-template';

  constructor(
    private router: Router,
    private loadingBar: LoadingBarService
  ) {
    router.events.subscribe((event: any): void => {

      if (event instanceof RouteConfigLoadStart) {
        // tslint:disable-next-line: deprecation
        this.loadingBar.start();
      }

      if (event instanceof RouteConfigLoadEnd) {
        // tslint:disable-next-line: deprecation
        this.loadingBar.stop();
      }

      if (event instanceof NavigationEnd) {
        // tslint:disable-next-line: deprecation
        this.loadingBar.stop();
      }

      if (event instanceof ActivationEnd) {
        // tslint:disable-next-line: deprecation
        this.loadingBar.stop();
      }

      window.scrollTo(0, 0);

    });

  }
}
