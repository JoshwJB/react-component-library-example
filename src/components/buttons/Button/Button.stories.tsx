import React from "react";
import Button, {ButtonProps} from "./Button";
import { Story, Meta } from '@storybook/react';

export default {
    title: "buttons/Button",
    component: Button
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (props) => <Button {...props}>Example Button</Button>;

export const Default = Template.bind({});
Default.props = {
  disabled: false,
  onClick: () => console.log("clicked")
}