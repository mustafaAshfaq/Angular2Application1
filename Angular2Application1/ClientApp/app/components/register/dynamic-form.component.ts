import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionControlService} from './question-control.service';
import {QuestionBase} from './question-base';

@Component({
    //moduleId: module.id,
    selector: 'dynamic-form',
    template: require('./dynamic-form.component.html'),
    providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {
    constructor(private qcs: QuestionControlService) { }
    @Input() questions: QuestionBase<any>[];
    form: FormGroup;
    payload = '';
    ngOnInit(): void{
        this.form = this.qcs.toFormGroup(this.questions);
    }
    onSubmit() {
        this.payload = JSON.stringify(this.form.value);
    }
}