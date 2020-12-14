import React from 'react';

interface MenuProps{
    mode:string;
}

const AMenu:React.FC<MenuProps> = (props) => {

    function renderChildren(){
        return React.Children;
    }
    
    return <ul>
        {renderChildren()}
    </ul>
}

export default AMenu;