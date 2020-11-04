import React from 'react'
import {fireEvent, render,RenderResult} from '@testing-library/react'
import Menu,{MenuProps} from './menu'
import MenuItem from './munuitem'

const testProps:MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps:MenuProps = {
    defaultIndex: 0,
    mode:'vertical'
}
let wrapper:RenderResult,menuElement:HTMLElement,activeElement:HTMLElement,disabledElement:HTMLElement
const generateMenu = (props:MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem index = {0}>
            active
            </MenuItem>
            <MenuItem  disabled index = {1}>
            disabled
            </MenuItem>
            <MenuItem index = {2}>
            xyz
            </MenuItem>
        </Menu>
    )
}
describe('test Menu and MenuItem component',()=>{
    beforeEach(() => {
        wrapper = render(generateMenu(testProps));
        menuElement = wrapper.getByTestId('test-menu');
        activeElement = wrapper.getByText('active');
        disabledElement = wrapper.getByText('disabled');

    })
    it('should render corrent Menu and MenuItem based on default props',()=>{
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('test')
        expect(menuElement.getElementsByTagName('li').length).toEqual(3);
    });
    it('click items should change active and call the righe callback',()=>{
        const thirdItem = wrapper.getByText('xyz');
        fireEvent.click(thirdItem);
        expect(thirdItem).toHaveClass('is-active');
        fireEvent.click(disabledElement);
        expect(activeElement).not.toHaveClass('is-active');
    });
    it('should render vertical mode when mode is set to vertical',()=>{});
})