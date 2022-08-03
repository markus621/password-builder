import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HashPipe } from './hash.pipe';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HashPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
