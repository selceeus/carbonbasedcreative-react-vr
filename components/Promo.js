import React from 'react';
import {
    View,
    asset,
    Environment,
    NativeModules
} from 'react-360';
import VideoModule from 'VideoModule';

export default class Promo extends React.Component {

    promoVideo = VideoModule.createPlayer('promo');

    componentDidMount() {

        Environment.setBackgroundImage(asset('happy_girls.jpg'), {
            rotateTransform: [{rotateY: '100deg'}]
        });

        this.promoVideo.play({
            source: { url: asset('./video/spi.mp4').uri },
            muted: true,
            volume: 0.1
        });

        Environment.setScreen(
            'default',
            'promo',
            'main',
            0, 0, 800, 450
        );

    }

    componentWillUnmount() {
        Environment.setScreen(
            'default',
            null,
            'main',
            0, 0, 800, 450
        );
        this.promoVideo.destroy();
    }

    render() {
        return( <View style={{ width: 800, height: 450 }}></View> );
    }

};
