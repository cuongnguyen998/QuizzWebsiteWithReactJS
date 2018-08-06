import React, { Component } from 'react';

class TestInfo extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    render() {
        return (

            <div>
                <form className="formInformation">
                    {/* <div className="form-group formInformation ml-10"> */}
                        <label className = "algL">Tên đề thi:</label>
                        <input type="text" className="form-control" placeholder="Nhập đề thi của bạn" />
                        <label className="algL">Mô tả:</label>
                        <textarea className="textarea" placeholder="Mô tả đề thi"></textarea>
                        <lable className="algL">Chủ đề:</lable>
                        <select className="select ml-10 mt-10">
                            <option>Tự nhiên</option>
                            <option>Xã hội</option>
                            <option>Văn học</option>
                            <option>Tiếng Anh</option>
                            <option>Kinh tế</option>
                        </select>
                    {/* </div> */}
                    
                </form>
            </div>



        );
    }
}

export default TestInfo;