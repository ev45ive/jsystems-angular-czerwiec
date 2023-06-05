import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Platform Server (Node)
// Platform Native (iOS/Android)
// Platform 3d ?? ( ThreeJS )

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
