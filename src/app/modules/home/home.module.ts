import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { WarningComponent } from './components/warning/warning.component';

@NgModule({
  declarations: [HomeComponent, ButtonComponent, HeaderComponent, WarningComponent],
  imports: [CommonModule],
})
export class HomeModule {}
