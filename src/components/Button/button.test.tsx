import React from 'react';
import { render,fireEvent } from '@testing-library/react'
import Button from './button'
const defaultProps = {
    onClick: jest.fn()
}

test('our first react', () => {
    const wrapper = render(<Button>aaa</Button>);
    const element = wrapper.getByText('aaa');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
});

describe('test Button component', () => {
    it('test default button', () => {
        const wrapper = render(<Button {...defaultProps}>aaa</Button>);
        const element = wrapper.getByText('aaa');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });

    // it('test func', ()=>{
    //     const
    // })
})