import React, {Component} from 'react';
import {ScrollView, View, Text, StatusBar, Modal} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AirbnbRating, Rating} from 'react-native-elements';
import {CustomButton} from '../../../components';
import Constant from '../../../utils/constants';
import {connect} from 'react-redux';
import {rateVisit} from '../../appointments/action';

import styles from './style';

const {staticImages} = Constant.App;

class VideoRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      modalVisible: false,
    };
  }

  static navigationOptions = () => {
    return {
      header: () => null,
    };
  };

  handleRatingChange = (value) => {
    this.setState({rating: value});
  };

  render() {
    let {
      current: {visit},
    } = this.props;

    return (
      <ScrollView>
        <StatusBar barStyle="light-content" translucent={true} />
        <View style={styles.heading}>
          <Text style={styles.headingText}>Rate your consultation</Text>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.expertImageContainer}>
            <FastImage
              style={styles.expertImage}
              defaultSource={staticImages.profilePlaceholderImg}
              source={{uri: visit.expert.imageUrl}}
              activeOpacity={0.7}
            />
          </View>
          <Text
            style={
              styles.expertText
            }>{`${visit.expert.firstName} ${visit.expert.lastName}`}</Text>
          <AirbnbRating
            size={35}
            readonly={false}
            startingValue={5}
            showRating={false}
            starStyle={styles.ratingStar}
            defaultRating={5}
            onFinishRating={this.handleRatingChange}
          />
          <CustomButton
            buttonStyle={styles.yesContainerStyle}
            textStyle={styles.yesTextStyle}
            onPress={() =>
              this.setState({modalVisible: !this.state.modalVisible})
            }
            text="Continue"
          />
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalImageContainer}>
                  <FastImage
                    style={styles.modalImage}
                    defaultSource={staticImages.profilePlaceholderImg}
                    source={{uri: visit.expert.imageUrl}}
                    activeOpacity={0.7}
                  />
                </View>
                <View style={styles.modalRatingStarContainer}>
                  <Rating
                    size={35}
                    readonly
                    startingValue={this.state.rating}
                    showRating={false}
                    starStyle={styles.ratingStar}
                  />
                </View>
                <Text style={styles.expertText}>
                  Thank you for rating this experience.
                </Text>
                <CustomButton
                  buttonStyle={styles.yesContainerStyle}
                  textStyle={styles.yesTextStyle}
                  onPress={() =>
                    this.props.rateVisit({
                      visit,
                      rating: this.state.rating,
                      navigation: this.props.navigation,
                    })
                  }
                  text="Back to home"
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  current: state.visitReducer,
});

const mapDispatchToProps = (dispatch) => ({
  rateVisit: (data) => dispatch(rateVisit(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoRating);
