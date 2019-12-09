import React from 'react';
import { connect } from 'react-redux';
import WebRTC from '../Component/WebRtc/WebRTC';
import webRTCReducer from "../Reducers/webRTC";

const mapStateToprops = state=>{
    return {
        trackList: state.webRTCReducer.trackList,
        videoSrc: state.webRTCReducer.videoSrc,
        audioSrc: state.webRTCReducer.audioSrc,
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        startVideo:(item)=>{dispatch({ type:'startVideo', videoSrc: item.src })},
        startAudio:(item)=>{dispatch({ type:'startAudio', videoSrc: item.src })},
        addTrack: ()=>{dispatch({type:'addTrack', kind: item.kind, label: item.label})}
    }
};

const WebRtcApp = connect(mapStateToprops, mapDispatchToProps)(WebRTC);

export default WebRtcApp;