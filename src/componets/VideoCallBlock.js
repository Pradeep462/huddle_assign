
import { useEffect, useState } from "react";
import Dropdown from "./Dropdoun";
import UserInfo from "./UserInfo";
import "./VideoCallBlock.css"

const videoOn  = "https://beta.huddle01.com/static/media/VideoOn.4fc76b20.svg";
const videoOff =  "https://beta.huddle01.com/static/media/VideoOff.0ae8beee.svg";
const audioOn  =  "https://beta.huddle01.com/static/media/MicOn.d3732787.svg";
const audioOff =  "https://beta.huddle01.com/static/media/MicOff.42f250f2.svg";

const VideoCallBlock =()=>{
  
    const [audioIcon,setAudioIcon] = useState(audioOff);
    const videoDropdown=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABvSURBVHgBfY8xDoAgDEVb4+Tg4OIiKyv3P4Ezq6sn0MHFoX4SSEojNPlA+18pECFExEMrNaL4I5YJuc/FyMynAQM2B10DzAeHI3sBpvsBXyiyHlUmJANaFLjj0pvt21QDaTAlFWwaKpA6v9+g2dY/7Yc76JlWL/IAAAAASUVORK5CYII=";
    const [videoDropdownClass,setVideodropdownClass] =useState("");
    const [onClickDropdown,setClickDropdown] = useState(true);
    const [AudioDropdownClass,setAudiodropdownClass] =useState("");
    const [onAudioClickDropdown,setAudioClickDropdown] = useState(true);
    const [playing,setPlaying] = useState(false);
    const height=250;
    const width=600;

    const startVideo = () =>{
            
              setPlaying(true);
              navigator.getUserMedia(
                {
                 video:true,
                },
                (stream) =>{
                    let video = document.getElementsByClassName("app__videoFeed")[0];
                    if(video){
                        video.srcObject = stream;
                    }
                },
                (err) =>console.error(err)
              );
           
    }
    const stopVideo = () =>{
           setPlaying(false);
           let video =document.getElementsByClassName("app__videoFeed")[0];
           video.srcObject.getTracks()[0].stop();
    };

    const changeAudioIcon =()=>{
        setAudioIcon(audioIcon === audioOff ? audioOn : audioOff);
       
    };

    const changeVideoDropdown =()=>{
        setClickDropdown(!onClickDropdown);
     };

    const changeAudioDropdown =()=>{
        setAudioClickDropdown(!onAudioClickDropdown);
     };

    useEffect(()=>{
        
        if(onClickDropdown===true)
          setVideodropdownClass("videodropdownClass")
        else
          setVideodropdownClass("");
        if(onAudioClickDropdown===true)
          setAudiodropdownClass("videodropdownClass")
        else
          setAudiodropdownClass("");
        
    },[onClickDropdown,onAudioClickDropdown]);


    return (
        <div className="callBlock">
            <div className="videoBlock">
                  <div className="screen">
                      <div className="userLogo">
                      {playing===true?
                          <div>
                              <video
                                height={height}
                                width={width}
                                muted
                                autoPlay
                                className="app__videoFeed"
                              >
                              </video>
                          </div>
                     :
                         
                           <div className="defaultUser">
                                
                          </div>
                        }
                      </div>
                      <div  className="playIcons" style={{height:"18%",paddingLeft:"7px",paddingRight:"7px",backgroundColor:" rgb(32, 32, 32)",borderBottomLeftRadius:"3px",borderBottomRightRadius:"3px"}}>
                         <span onClick={playing===false?startVideo:stopVideo} className="vidoIcon">
                              <img  alt="video icon" src={ playing === false ? videoOff : videoOn}></img>
                         </span>
                              <span className="setting" style={{color:"white",marginLeft:"0.6rem"}}>Video Settings</span>
                              <img  alt="audio icon" onClick={changeVideoDropdown} src={videoDropdown} style={{cursor:"pointer",marginLeft:"0.5rem"}} className={videoDropdownClass}></img>
                         <span onClick={changeAudioIcon} className="audioIcon"> <img alt="icons" src={audioIcon}></img></span>
                         <span className="setting"  style={{color:"white",fontWeight:"600",marginLeft:"1%"}}>Audio Settings</span>
                         <img alt="dropdown" onClick={changeAudioDropdown} src={videoDropdown} style={{cursor:"pointer",marginLeft:"0.5rem"}}class={AudioDropdownClass}></img>
                      </div>    
                      <div className="dropdown">

                           <Dropdown onClickDropdown={onClickDropdown} onAudioClickDropdown={onAudioClickDropdown}/>
                           
                      </div>
                  </div>
                 
                  
            </div>
            <div className="Userdetail">
              <UserInfo />
             
            </div>
        </div>
    )
}

export default VideoCallBlock;