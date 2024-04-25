// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ActorListComponent } from './actor-list.component';

// describe('ActorListComponent', () => {
//   let component: ActorListComponent;
//   let fixture: ComponentFixture<ActorListComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ActorListComponent]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(ActorListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActorListComponent } from './actor-list.component';
import { ActorService } from '../actor.service';
import { MatDialog } from '@angular/material/dialog';
import jasmine from 'jasmine';

describe('ActorListComponent', () => {
  let component: ActorListComponent;
  let fixture: ComponentFixture<ActorListComponent>;
  let actorService: jasmine.SpyObj<ActorService>;

  beforeEach(async () => {
    const actorServiceSpy = jasmine.createSpyObj('ActorService', ['getActors', 'getActorDetails']);
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ ActorListComponent ],
      providers: [
        { provide: ActorService, useValue: actorServiceSpy },
        { provide: MatDialog, useValue: dialogSpy }
      ]
    })
    .compileComponents();

    actorService = TestBed.inject(ActorService) as jasmine.SpyObj<ActorService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch actors on init', () => {
    const actorsResponse = { results: [{ name: 'Luke Skywalker', url: 'https://www.swapi.tech/api/people/1' }] };
    actorService.getActors.and.returnValue(of(actorsResponse));

    fixture.detectChanges(); // triggers ngOnInit

    expect(actorService.getActors).toHaveBeenCalled();
    expect(component.actors).toEqual(actorsResponse.results);
  });

  it('should fetch actor details when an actor is selected', () => {
    const actor = { name: 'Luke Skywalker', url: 'https://www.swapi.tech/api/people/1' };
    const actorDetails = { name: 'Luke Skywalker', height: '172' };
    actorService.getActorDetails.and.returnValue(of(actorDetails));

    component.selectActor(actor);

    expect(actorService.getActorDetails).toHaveBeenCalledWith(actor.url);
    expect(component.selectedActor).toEqual(actorDetails);
  });
});