import React from 'react';
import Tabs from "../components/tabs"

import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { checkA11y } from '@storybook/addon-a11y';

storiesOf('Tabs', module)
  .addDecorator(checkA11y)
  .add('tabs', () =><Tabs style={{ backgroundColor: 'red', color: 'darkRed', }} />)
