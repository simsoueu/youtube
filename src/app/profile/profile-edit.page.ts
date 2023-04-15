import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { format, parseISO } from 'date-fns'


@Component({
  selector: 'profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfileEditPage implements OnInit {

  items: any[] = [];
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  showPicker: boolean = false;
  formattedString: string = '';

  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year']
  selectedMode = 'date';

  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    dob: '01/01/1980',
    height: '180',
    heightFmt: '180 cm',
    weight: '80',
    weightFmt: '80 kg',
    latestWorkout: '13/04/2023',
    workoutStreak: '5 days',
    img: 'https:://picsum.photos/200/300',
    badges: ['golden member']
  };

  constructor() {
    this.setToday();
  }

  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm, MMM d, yyyy');
  }

  dateChanged(value: any) {
    console.log(value)
    this.dateValue = value;
    this.user.dob = this.formattedString;
    this.formattedString = format(parseISO(value), 'HH:mm, MMM d, yyyy');
    this.showPicker = false;
  }


  ngOnInit() {
  }

  saveChanges() {
  }

  shareOnSocialMedia() { }

}
