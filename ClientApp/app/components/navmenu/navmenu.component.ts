import { Component } from '@angular/core';
import { NodeEvent, TreeModel, RenamableNode, Ng2TreeSettings } from 'ng2-tree';

declare const alertify: any;

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    public settings: Ng2TreeSettings = {
        rootIsVisible: false
    };

    public pls: TreeModel;

    public ngOnInit(): void {
        setTimeout(() => {
            this.pls = {
                value: 'Programming languages by programming paradigm',
                children: [
                    {
                        value: 'Aspect-oriented programming',
                        children: [
                            { value: 'AspectJ' },
                            { value: 'AspectC++' }
                        ]
                    },
                    {
                        value: 'Object-oriented programming',
                        children: [
                            {
                                value: {
                                    name: 'Java',
                                    setName(name: string): void {
                                        this.name = name;
                                    },
                                    toString(): string {
                                        return this.name;
                                    }
                                } as RenamableNode
                            },
                            { value: 'C++' },
                            { value: 'C#' }
                        ]
                    },
                    {
                        value: 'Prototype-based programming',
                        children: [
                            { value: 'JavaScript' },
                            { value: 'CoffeeScript' },
                            { value: 'TypeScript' }
                        ]
                    }
                ]
            };
        }, 1000);
    }

    public onNodeRemoved(e: NodeEvent): void {
        NavMenuComponent.logEvent(e, 'Removed');
    }

    public onNodeMoved(e: NodeEvent): void {
        NavMenuComponent.logEvent(e, 'Moved');
    }

    public onNodeRenamed(e: NodeEvent): void {
        NavMenuComponent.logEvent(e, 'Renamed');
    }

    public onNodeCreated(e: NodeEvent): void {
        NavMenuComponent.logEvent(e, 'Created');
    }

    public onNodeSelected(e: NodeEvent): void {
        NavMenuComponent.logEvent(e, 'Selected');
    }

    private static logEvent(e: NodeEvent, message: string): void {
        console.log(e);
        alertify.message(`${message}: ${e.node.value}`);
    }
}
