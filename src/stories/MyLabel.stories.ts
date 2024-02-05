import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../component/MyLabel";




const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel, 
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'inline-radio' },
        color: { control: 'select' },
        fontColor: { control: 'color' } ,
    }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>


export const Basic: Story = {
    args: {
        label: 'Basic label',
    }
}
export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        allCaps: true,
    }
}
export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary',
    }
}
export const CustomColor: Story = {
    args: {
        label: 'Custom Color label',
        fontColor: '#5517ac',
    }
}
export const BackgroundColor: Story = {
    args: {
        label: 'Background Color label',
        size: 'h1',
        fontColor: '#eeeeee',
        backgroundColor: '#000000',
    }
}






