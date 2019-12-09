import React, {Component} from 'react';
import {Button} from 'antd';
import './WebRtc.scss';

class Counter extends Component {

    startVideo = () => {
        const { startVideo, startAudio, addTrack } = this.props;
        const constraints = {
            video: { width: 500, height: 500 },
            audio: true
        };

        console.log('navigator.mediaDevices', navigator.mediaDevices);


        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (stream) {
                // alert('hhhhhh');
                // const videoTracks = stream.getVideoTracks();
                // const audioTracks = stream.getAudioTracks();
                // console.log('Got stream with constraints:', constraints);
                // console.log('Using video device: ' + videoTracks[0].label);

                startVideo({ src: stream });
                console.log('----------streamstreamstream', stream);

                stream.onaddtrack = function (event) {
                    // let trackList = document.getElementById("tracks");
                    // let label = document.createElement("li");
                    //
                    // label.innerHTML = event.track.kind + ": " + event.track.label;
                    // trackList.appendChild(label);
                    addTrack({
                        trackList: [
                            ...trackList,
                            {
                                kind: event.track.kind,
                                label: event.track.label,
                            }
                        ]
                    });
                };

                // stream.onended = function () {
                //     console.log('Stream ended');
                // };
            })
            .catch(function (error) {
                console.log('-------error', error)
            });

    };

    renderTrackList = () => {
        const {trackList} = this.props;
        return (<ul>
                {trackList.map((item, index) => {
                    return <li key={index}>{item.label}：{item.kind}</li>

                })}
            </ul>
        );
    };

    render() {
        // const { count, inCounter, deCounter } = this.props;

        const {videoSrc, audioSrc} = this.props;


        return (
            <div className="WebRtc-wrap">
                <div className='video-wrap'>
                    {videoSrc ? <video src={videoSrc} autoPlay/> : null}
                    {audioSrc ? <video src={audioSrc} autoPlay/> : null}
                    <div className='info'>
                        {this.renderTrackList()}
                    </div>
                    <Button onClick={this.startVideo}> 开始录制 </Button>
                    <div>
                    </div>
                </div>
            </div>
        )

    }

}

export default Counter;