import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {Button} from '../components/button2/button';
// import '../../assets/components/themes/nova-light/theme.css';
// import '../src/assets/components/themes/nova-light/theme.css';
// import '../src/assets/components/themes/nova-light/fonts/open-sans-v15-latin-regular.woff2';

storiesOf('Button2', module)
    .addDecorator(
        moduleMetadata({
            declarations: [Button],
        }),
    )
    .add('Button2', () => {
        return {
            template: `
                <link id="theme-css" rel="stylesheet" type="text/css" href="assets/components/themes/nova-light/theme.css">
                <p-button label="Click"></p-button>
                <p-button icon="pi pi-check" label="Click"></p-button>
                <p-button icon="pi pi-check" iconPos="right" label="Click"></p-button>
                <p-button icon="pi pi-check"></p-button>
                <p-button icon="pi pi-check" [disabled]="true" label="Disabled"></p-button>
            `,
            props: {
                // task,
                // onPinTask: actions.onPinTask,
                // onArchiveTask: actions.onArchiveTask,
            },
        };
    });
