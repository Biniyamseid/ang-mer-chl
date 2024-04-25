// // import { ComponentFixture, TestBed } from '@angular/core/testing';

// // import { ActorListComponent } from './actor-list.component';

// // describe('ActorListComponent', () => {
// //   let component: ActorListComponent;
// //   let fixture: ComponentFixture<ActorListComponent>;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       declarations: [ActorListComponent]
// //     })
// //     .compileComponents();
    
// //     fixture = TestBed.createComponent(ActorListComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';
// import { ActorListComponent } from './actor-list.component';
// import { ActorService } from '../actor.service';
// import { MatDialog } from '@angular/material/dialog';
// // import { jasmine } from '@types/jasmine';
// import 'jasmine';

// describe('ActorListComponent', () => {
//   let component: ActorListComponent;
//   let fixture: ComponentFixture<ActorListComponent>;
//   let actorService: jasmine.SpyObj<ActorService>;

//   beforeEach(async () => {
//     const actorServiceSpy = jasmine.createSpyObj('ActorService', ['getActors', 'getActorDetails']);
//     const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

//     await TestBed.configureTestingModule({
//       declarations: [ ActorListComponent ],
//       providers: [
//         { provide: ActorService, useValue: actorServiceSpy },
//         { provide: MatDialog, useValue: dialogSpy }
//       ]
//     })
//     .compileComponents();

//     actorService = TestBed.inject(ActorService) as jasmine.SpyObj<ActorService>;
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ActorListComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should fetch actors on init', () => {
//     const actorsResponse = {"message":"ok","total_records":82,"total_pages":9,"previous":'null',"next":"https://www.swapi.tech/api/people?page=2&limit=10","results":[{"uid":"1","name":"Luke Skywalker","url":"https://www.swapi.tech/api/people/1"},{"uid":"2","name":"C-3PO","url":"https://www.swapi.tech/api/people/2"},{"uid":"3","name":"R2-D2","url":"https://www.swapi.tech/api/people/3"},{"uid":"4","name":"Darth Vader","url":"https://www.swapi.tech/api/people/4"},{"uid":"5","name":"Leia Organa","url":"https://www.swapi.tech/api/people/5"},{"uid":"6","name":"Owen Lars","url":"https://www.swapi.tech/api/people/6"},{"uid":"7","name":"Beru Whitesun lars","url":"https://www.swapi.tech/api/people/7"},{"uid":"8","name":"R5-D4","url":"https://www.swapi.tech/api/people/8"},{"uid":"9","name":"Biggs Darklighter","url":"https://www.swapi.tech/api/people/9"},{"uid":"10","name":"Obi-Wan Kenobi","url":"https://www.swapi.tech/api/people/10"}]};
//     // actorService.getActors.and.returnValue(of(actorsResponse));

//     fixture.detectChanges(); // triggers ngOnInit

//     expect(actorService.getActors).toHaveBeenCalled();
//     // expect(component.actors).toEqual(actorsResponse.results);
//   });

//   it('should fetch actor details when an actor is selected', () => {
//     const actor = {result:{properties:{height:"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","created":"2024-04-25T03:55:58.949Z","edited":"2024-04-25T03:55:58.949Z","name":"Luke Skywalker","homeworld":"https://www.swapi.tech/api/planets/1","url":"https://www.swapi.tech/api/people/1"},"description":"A person within the Star Wars universe","_id":"5f63a36eee9fd7000499be42","uid":"1","__v":0}};
//     const actorDetails ={message:"ok",result:{properties:{height:"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","created":"2024-04-25T03:55:58.949Z","edited":"2024-04-25T03:55:58.949Z","name":"Luke Skywalker","homeworld":"https://www.swapi.tech/api/planets/1","url":"https://www.swapi.tech/api/people/1"},"description":"A person within the Star Wars universe","_id":"5f63a36eee9fd7000499be42","uid":"1","__v":0}};
//     // actorService.getActorDetails.and.returnValue(of(actorDetails));

//     component.selectActor(actor);

//     expect(actorService.getActorDetails).toHaveBeenCalledWith(actor.url);
//     // expect(component.selectedActor).toEqual(actorDetails);
//   });
// });