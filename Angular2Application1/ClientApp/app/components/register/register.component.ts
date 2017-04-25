import {Component, OnInit} from '@angular/core';
import {QuestionService} from './question.service';

@Component({
    //moduleId: module.id,
    selector: 'register-form',
    template:require( './register.component.html'),
    providers: [QuestionService]
})

export class RegisterComponent implements OnInit{

    questions: any[];
    constructor(private qs: QuestionService) { }
    ngOnInit(): void { this.questions = this.qs.getQuestions(); }
}