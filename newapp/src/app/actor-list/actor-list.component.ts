import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { Actor } from '../actor';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors: Actor[] = [];

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.getActors().subscribe(data => {
      this.actors = data.results;
    });
  }
}