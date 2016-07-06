import {Component, trigger, style, animate, state, transition } from '@angular/core';

@Component({
    selector: 'animation-enter-leave',
    templateUrl: './examples/animation/animation-enter-leave-test.html',
    styleUrls: [ './examples/animation/animation-enter-leave-test.css' ],
    animations: [
        trigger('state', [
            state('in', style({ 'background-color': 'red', 'opacity': 1 })),
            state('void', style({ 'background-color': 'white', 'opacity': 0 })),
            transition('void => *', [ animate('600ms ease-out') ]),
            transition('* => void', [ animate('600ms ease-out')])
        ])
    ]
})
export class AnimationEnterLeaveTest {
    
    public items: Array<string>;

    constructor() {
        this.items = [];
        for (var i = 0; i < 3; i++) {
            this.items.push("Item " + i);
        }
    }
    
    onAddTap() {
        this.items.push("Item " + (this.items.length + 1));
    }
    
    onRemoveAllTap() {
        this.items = [];
    }
    
    onItemTap(event) {
        var index = this.items.indexOf(event.object.text);
        this.items.splice(index, 1);
    }
}

