import 'react-native-gesture-handler';
import React, {useRef, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {smallScreen} from '../../../../utils/metrices';
import {setExpertCallConfig} from '../../../../redux/actions/twillio';
import {
  TwilioVideoLocalView,
  TwilioVideoParticipantView,
  TwilioVideo,
} from 'react-native-twilio-video-webrtc';

import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

const initialState = {
  isAudioEnabled: true,
  isVideoEnabled: true,
  status: 'disconnected',
  userName: '',
  roomName: '',
  token: '',
};

const ExpertTwillioCalling = ({navigation}) => {
  const twilioVideo = useRef(null);
  const dispatch = useDispatch();
  const callConfig = useSelector((state) => state.twillio);
  const [videoTracks, setVideoTracks] = useState(new Map());
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    twilioVideo.current.connect({
      roomName: callConfig.roomName,
      accessToken: callConfig.token,
    });
    dispatch(setExpertCallConfig({...callConfig, status: 'connecting'}));
    return () => {
      _onEndButtonPress();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _onEndButtonPress = () => {
    twilioVideo.current.disconnect();
    dispatch(setExpertCallConfig({...initialState}));
    navigation.goBack();
  };

  const _onPauseButtonPress = () => {
    twilioVideo.current
      .setLocalVideoEnabled(!callConfig.isVideoEnabled)
      .then((isEnabled) =>
        dispatch(
          setExpertCallConfig({...callConfig, isVideoEnabled: isEnabled}),
        ),
      );
  };

  const _onMuteButtonPress = () => {
    twilioVideo.current
      .setLocalAudioEnabled(!callConfig.isAudioEnabled)
      .then((isEnabled) =>
        dispatch(
          setExpertCallConfig({...callConfig, isAudioEnabled: isEnabled}),
        ),
      );
  };

  const _onFlipButtonPress = () => {
    twilioVideo.current.flipCamera();
  };

  const _onLocalViewPress = () => {
    if (callConfig.status === 'connected') {
      setShowPreview(!showPreview);
    }
  };

  return (
    <View style={styles.callContainer}>
      {(callConfig.status === 'connected' ||
        callConfig.status === 'connecting') && (
        <View style={styles.callWrapper}>
          {(callConfig.status === 'connected' ||
            callConfig.status === 'connecting') && (
            <View style={styles.callWrapper}>
              {callConfig.status === 'connected' && (
                <View style={styles.remoteGrid}>
                  {Array.from(videoTracks, ([trackSid, trackIdentifier]) => (
                    <TwilioVideoParticipantView
                      style={styles.remoteVideo}
                      key={trackSid}
                      trackIdentifier={trackIdentifier}
                    />
                  ))}
                </View>
              )}
            </View>
          )}
        </View>
      )}
      <SafeAreaView>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={{...styles.button, flexDirection: 'column'}}
            onPress={_onEndButtonPress}>
            <Ionicons
              style={styles.icon}
              name="call"
              color="#4F8EF7"
              size={smallScreen ? 15 : 35}
            />
            <Text style={{textAlign: 'center'}}>End</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.button, flexDirection: 'column'}}
            onPress={_onMuteButtonPress}>
            <Octicons
              style={styles.icon}
              name={callConfig.isAudioEnabled ? 'unmute' : 'mute'}
              color="#4F8EF7"
              size={smallScreen ? 15 : 35}
            />
            <Text style={{textAlign: 'center'}}>
              {callConfig.isAudioEnabled ? 'Mute' : 'Unmute'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.button, flexDirection: 'column'}}
            onPress={_onPauseButtonPress}>
            <Feather
              style={styles.icon}
              name={callConfig.isVideoEnabled ? 'video' : 'video-off'}
              color="#4F8EF7"
              size={smallScreen ? 15 : 35}
            />
            <Text style={{textAlign: 'center'}}>
              {callConfig.isVideoEnabled ? 'On' : 'Off'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.button, flexDirection: 'column'}}
            onPress={_onFlipButtonPress}>
            <Ionicons
              style={styles.icon}
              name="camera-reverse"
              color="#4F8EF7"
              size={35}
            />
            <Text style={{textAlign: 'center'}}>Flip</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <TouchableOpacity onPress={_onLocalViewPress}>
        {showPreview && (
          <TwilioVideoLocalView
            enabled={callConfig.status === 'connected'}
            style={styles.localVideo}
          />
        )}
      </TouchableOpacity>
      <TwilioVideo
        ref={twilioVideo}
        onRoomDidConnect={() => {
          dispatch(setExpertCallConfig({...callConfig, status: 'connected'}));
        }}
        onRoomDidDisconnect={() => {
          // dispatch(setExpertCallConfig({...initialState}));
          navigation.goBack();
        }}
        onRoomDidFailToConnect={(error) => {
          Alert.alert('Error', error.error);
          dispatch(setExpertCallConfig({...initialState}));
          navigation.goBack();
        }}
        onParticipantAddedVideoTrack={({participant, track}) => {
          if (track.enabled) {
            console.log('onParticipantAddedVideoTrack: ', participant, track);
            setVideoTracks(
              new Map([
                ...videoTracks,
                [
                  track.trackSid,
                  {
                    participantSid: participant.sid,
                    videoTrackSid: track.trackSid,
                  },
                ],
              ]),
            );
          }
        }}
        onParticipantRemovedVideoTrack={({participant, track}) => {
          console.log('onParticipantRemovedVideoTrack: ', participant, track);
          const videoTracksLocal = videoTracks;
          videoTracksLocal.delete(track.trackSid);
          setVideoTracks(videoTracksLocal);
        }}
      />
    </View>
  );
};

export default ExpertTwillioCalling;
