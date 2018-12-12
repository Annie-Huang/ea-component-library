import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDemo} from './buttondemo';
import {ButtonDemoRoutingModule} from './buttondemo-routing.module';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';

import { EaCompLibModule, FooModule } from 'ea-comp-lib';

@NgModule({
	imports: [
		CommonModule,
		ButtonDemoRoutingModule,
        TabViewModule,
        CodeHighlighterModule,
        EaCompLibModule,
        FooModule
    ],
	declarations: [
		ButtonDemo
	]
})
export class ButtonDemoModule {}
