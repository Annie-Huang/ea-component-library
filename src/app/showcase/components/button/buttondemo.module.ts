import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDemo} from './buttondemo';
import {ButtonDemoRoutingModule} from './buttondemo-routing.module';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';

import { FooModule } from 'ea-ui';

@NgModule({
	imports: [
		CommonModule,
		ButtonDemoRoutingModule,
        TabViewModule,
        CodeHighlighterModule,
        FooModule
    ],
	declarations: [
		ButtonDemo
	]
})
export class ButtonDemoModule {}
