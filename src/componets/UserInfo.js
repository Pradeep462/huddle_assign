import React from 'react';

const UserInfo = () => {
    return (
        <>
             <div className="detail">
                 <div style={{textAlign:"center"}}>
                      <h1>Have a Look Around</h1>
                      <p style={{color:"gray",  fontWeight: "600"}}>Review how your audio and video work in calls</p>
                 </div>
                 <div className="detail-input">
                        <div >
                            <label >Your Name*</label><br/>
                            <input placeholder="Please Enter your Name" />
                        </div>
                        <div>
                            <label>Password</label><br/>
                            <input placeholder="Please Enter Your password (if any one)"/>
                        </div>
                        <div>
                            <button>Start Meeting</button>
                        </div>
                 </div>
              </div>
            
        </>
    );
};

export default UserInfo;