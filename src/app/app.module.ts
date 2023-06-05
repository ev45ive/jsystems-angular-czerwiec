import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}

// export class AppModule implements DoBootstrap{
//   ngDoBootstrap(appRef: ApplicationRef): void {
//    appRef.bootstrap(AppComponent,'app-root')
//    appRef.bootstrap(AppComponent,'lubie-placki')
//   }
//  }

