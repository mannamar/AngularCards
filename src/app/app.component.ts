import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, CardComponent]
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      userName: 'nature',
      content: 'Cool tree bro'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      userName: 'mountainlover',
      content: 'Ice King lives here'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      userName: 'BikerMouse',
      content: 'Do a wheelie!'
    }
  ]
}
