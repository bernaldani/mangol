import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import {MangolDemoModule} from './app/_index';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MangolDemoModule);