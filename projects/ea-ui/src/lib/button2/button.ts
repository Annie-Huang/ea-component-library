import {NgModule,Component,EventEmitter,Output,Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'p-button',
    template: `
        <button [attr.type]="type" [class]="styleClass" [style]="style" [disabled]="disabled"
            [ngClass]="{'ui-button ui-widget ui-state-default ui-corner-all':true,
                        'ui-button-icon-only': (icon && !label),
                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),
                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),
                        'ui-button-text-only': (!icon && label),
                        'ui-button-text-empty': (!icon && !label),
                        'ui-state-disabled': disabled}"
                        (click)="onClick.emit($event)" (focus)="onFocus.emit($event)" (blur)="onBlur.emit($event)">
            <ng-content></ng-content>
            <span [ngClass]="{'ui-clickable': true,
                        'ui-button-icon-left': (iconPos === 'left'), 
                        'ui-button-icon-right': (iconPos === 'right')}"
                        [class]="icon" *ngIf="icon"></span>
            <span class="ui-button-text ui-clickable">{{label||'ui-btn'}}</span>
        </button>
    `,
    styleUrls: ['./button.scss']
})
export class Button {

    @Input() type: string;

    @Input() iconPos: string = 'left';

    @Input() icon: string;

    @Input() label: string;

    @Input() disabled: boolean;

    @Input() style: any;

    @Input() styleClass: string;

    @Output() onClick: EventEmitter<any> = new EventEmitter();

    @Output() onFocus: EventEmitter<any> = new EventEmitter();

    @Output() onBlur: EventEmitter<any> = new EventEmitter();
}

@NgModule({
    imports: [CommonModule],
    exports: [Button],
    declarations: [Button]
})
export class ButtonModule { }
