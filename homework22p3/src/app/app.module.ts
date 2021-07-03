import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingTabComponent } from './setting-tab/setting-tab.component';
import { SettingMenuComponent } from './setting-menu/setting-menu.component';
import { SettingItemComponent } from './setting-item/setting-item.component';
import { SettingPageComponent } from './setting-page/setting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingTabComponent,
    SettingMenuComponent,
    SettingItemComponent,
    SettingPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
