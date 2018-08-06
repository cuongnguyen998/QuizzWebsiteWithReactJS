import React, { Component } from 'react';

class LogoTitle extends Component {
    render() {
        return (
            <div className="LogoTitle">
                <img src="https://t3.ftcdn.net/jpg/01/88/66/28/240_F_188662840_KDEuvSi74V54mVoESvJhELBNS3X7rOW2.jpg" 
                    alt="Trang chủ"
                    width="40px"
                    height="40px"
                    className="img"
                    
                />
                <span className="title">Tạo đề thi</span>
            </div>
        );
        
    }
}

export default LogoTitle;