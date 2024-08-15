import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetAdviceServiceService } from './get-advice-service.service';
import { response } from 'express';
import { error } from 'console';
import { Adviceinterface } from './adviceinterface';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgIf],
  providers:[GetAdviceServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'empty';
  adviceCOunt:number = 0
  advices: string | undefined;
  constructor(private apiService: GetAdviceServiceService){}
  getAdvice(){
    this.apiService.getAdvice().subscribe({
      next: (response: Adviceinterface ) => {
        this.advices = response.slip.advice
        this.adviceCOunt += 1
      },
      error: (error: Error) => {
        console.log('error fetching advbice data ')
      }
    })
  }
}
