import React, { Component } from 'react';
import LogoTitle from './Logo-Title';
import MenuList from './Menu-List';
class SlideBar extends Component {

    render(){
        return(
            <div className="Slide-Bar">
                 <LogoTitle></LogoTitle>
                 <MenuList></MenuList>
            </div>
        )
    }

}
export default SlideBar;
