import React from 'react';

const Dropdown = ({onClickDropdown , onAudioClickDropdown}) => {
    return (
        <>
            <div style={{ display: onClickDropdown ? 'none' : null }} className="dropdowns1">
                                <label className="options">
                                    Webcam
                                    <input type="checkBox" name="checkBox"/>
                                </label>
                                <label className="options" >
                                    Default-Webcam
                                    <input type="checkBox" name="checkBox"/>
                                </label>
                                <label className="options">
                                    Preferred-Webcam
                                    <input type="checkBox" name="checkBox"/>
                                </label>
                                
                            </div>
                            <div style={{ display: onAudioClickDropdown ? 'none' : null }} className="dropdowns2">
                                    <label className="option">
                                        audio 1
                                        <input type="checkBox" name="checkBox"/>
                                    </label>
                                    <label className="option">
                                        audio 2
                                        <input type="checkBox" name="checkBox"/>
                                    </label>
                                    <label className="option">
                                        audio 3
                                        <input type="checkBox" name="checkBox"/>
                                    </label>
                            </div>
        </>
    );
};

export default Dropdown;