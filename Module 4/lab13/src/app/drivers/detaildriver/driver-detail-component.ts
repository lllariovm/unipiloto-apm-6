import { Component, Input } from '@angular/core';
import { Driver } from '../../../models/driver';

@Component({
  selector: 'driver-detail-component',
  templateUrl: './driver-detail-component.html'
})

export class DriverDetailComponent {
  @Input()
  driver: Driver;
}