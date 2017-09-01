import { Component, Input } from '@angular/core';
import { Vehicle } from '../../../models/vehicle';

@Component({
  selector: 'vehicle-detail-component',
  templateUrl: './vehicle-detail-component.html'
})

export class VehicleDetailComponent {
  @Input()
  vehicle: Vehicle;
}