import { Component, Input } from '@angular/core';
import { Room, Category, Item } from '../shared/rooms-tree.model';
import { ModalModule } from 'ng2-modal';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent { 
    @Input() private rooms: Room[];
}
