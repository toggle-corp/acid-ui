import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button, { Props as ButtonProps } from '../../lib/src/components/Button';

export default {
    title: 'Action/Button',
    component: Button,
    argType: {},
};

// eslint-disable-next-line react/function-component-definition
const Template: Story<ButtonProps<string>> = (args) => (
    <Button
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...args}
    />
);

export const Default = Template.bind({});
Default.args = {
    children: 'Click me!',
};
