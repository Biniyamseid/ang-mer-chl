import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { MatDialog } from '@angular/material/dialog';
import { Actor } from '../actor';
import { ActorDetailComponent } from '../actor-detail/actor-detail.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors: Actor[] = [];
  selectedActor: Actor | null = null;

  constructor(private actorService: ActorService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.actorService.getActors().subscribe(data => {
      this.actors = data.results;
    });
  }

  selectActor(actor: Actor): void {
    this.actorService.getActorDetails(actor.url).subscribe(data => {
      this.selectedActor = data; 
    });
  }
  

}