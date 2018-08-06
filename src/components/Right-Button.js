import React, { Component } from 'react';

class ButtonArea extends Component {

    render() {
        return (
            <div className="buttonArea">
                <button type="submit" className="btn btn-success btnCustom">
                <span className="fa fa-save mr-5"></span>
                Lưu lại
                </button>
                <button type="button" className="btn btn-primary btnCustom">
                <span className="fa fa-question-circle mr-5"></span>
                Thiết lập câu hỏi
                </button>
            </div>
            






        );
    }
}

export default ButtonArea;