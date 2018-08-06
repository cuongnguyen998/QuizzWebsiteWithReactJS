import React, { Component } from 'react';

class MenuItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isActive: true
    //     }
    // }


    render() {
        
        return (
            <div>
                <a className="MenuItemDisplay">
                    <span className="fa fa-info-circle mr-5"></span>
                    <span>Thông tin</span>
                </a>
                <a className="MenuItemBlind">
                    <span className="fa fa-question-circle mr-5"></span>
                    <span>Câu hỏi</span>
                </a>
            </div>

        );
    }
}

export default MenuItem;