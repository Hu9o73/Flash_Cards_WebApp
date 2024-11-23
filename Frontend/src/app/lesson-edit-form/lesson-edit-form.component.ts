import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lesson-edit-form.component.html',
  styleUrl: './lesson-edit-form.component.css'
})

export class LessonEditFormComponent implements OnInit, OnDestroy {
  constructor(private router:Router){
    console.log("LessonEditFormComponent.constructor()");
  }

  onClickSubmit(){
    // could execute code here before navigating (saving/sending requests to server...)
    this.router.navigate(['lesson-list']).then(res => {});
  }

  ngOnInit(): void{
    console.log("LessonEditFormComponent.ngOnInit()");
  }

  ngOnDestroy(): void {
    console.log("LessonEditFormComponent.ngOnDestroy()");
  }
}
