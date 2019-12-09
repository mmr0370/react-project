const initialState = {
    trackList: [],
    videoSrc: '',
    audioSrc: '',
};

export default function todoListReducer(state = initialState, action) {
    const trackList = state.trackList;

    switch (action.type) {
        case 'startVideo':
            return {
                ...state,
                videoSrc: action.src,
                audioSrc: ''
            };
        case 'startAudio':
            return {
                ...state,
                videoSrc: '',
                audioSrc: action.src,
            };

        case 'addTrack':
            return {
                ...state,
                trackList: [
                    ...trackList,
                    {
                        kind: action.kind,
                        label: action.label,
                    }
                ]
            };


        default:
            return state;

    }


}