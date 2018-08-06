import React, { Component } from 'react';
import SlideBar from './Slide-Bar';
import Header from './Header';
import TestInfo from './Test-Info';
import ButtonArea from './Right-Button';
import QuizzesForm from './QuizzesForm';
class Grid_Container extends Component {
    render() {
        return (
            <div className="Grid-Container">
                <SlideBar></SlideBar>
                <Header></Header>
                <TestInfo></TestInfo>
                <ButtonArea></ButtonArea>
                <QuizzesForm></QuizzesForm>
            </div>
        );
    }
}

export default Grid_Container;