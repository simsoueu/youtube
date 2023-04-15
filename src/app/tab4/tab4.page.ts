import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab4Page implements OnInit {


  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    dob: '01/01/1980',
    height: '180 cm',
    weight: '80 kg',
    latestWorkout: '13/04/2023',
    workoutStreak: '5 days',
    badges: ['golden member']
  };
  constructor() { }

  ngOnInit() {
  }

  shareOnSocialMedia() { }

}
