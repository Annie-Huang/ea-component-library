import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


storiesOf('Button', module)
    .add('Button', () => {
        return {
            template: `
                <button class="ea-button">Annie Test</button>
            `,
            props: {
                // task,
                // onPinTask: actions.onPinTask,
                // onArchiveTask: actions.onArchiveTask,
            },
        };
    });
