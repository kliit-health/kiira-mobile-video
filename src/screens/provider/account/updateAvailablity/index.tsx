import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Platform, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import CustomText from '../../../../components/customText';
import Constant from '../../../../utils/constants';
import CustomInputText from '../../../../components/customInputText';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {updateExpertDataToFirebase} from './action';
import {showOrHideModal} from '../../../../components/customModal/action';

class UpdateAvailablity extends PureComponent {
	public props: any;
	public state: any;
	public setState: any;
	public userData: any;
	public navigation: any;
	public lang: any;
	public updateUserData: any;
	public clinicInfo: any;
	public hours: any;

  constructor(props) {
    super(props);
    const {userData} = this.props;
    this.state = {
      clinicInfo: userData.clinicInfo,
      hours: userData.clinicInfo.hours,
    };
  }

  renderHeaderView() {
    const {userData, navigation, lang, updateUserData} = this.props;
    const {clinicInfo, hours} = this.state;
    return (
      <View style={styles.headerStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <CustomText style={styles.cancelTextStyle}>
            {lang.setting.cancel}
          </CustomText>
        </TouchableOpacity>
        <CustomText style={styles.titleTextStyle}>
          Update Availbility
        </CustomText>
        <TouchableOpacity
          onPress={() => {
            const payloadData = {
              userParams: {
                userData,
                clinicInfo,
                hours,
              },
              navigation,
            };
            updateUserData(payloadData);
          }}>
          <CustomText style={styles.doneTextStyle}>
            {lang.setting.done}
          </CustomText>
        </TouchableOpacity>
      </View>
    );
  }

  renderInputTextView() {
    const {hours} = this.state;

    return hours.map((ele, i) => {
      return (
        <View key={ele.day} style={styles.inputTextParentContainerStyle}>
          <Text style={{marginRight: 5}}>{ele.day}</Text>
          <View style={styles.inputTextContainerStyle}>
            <View style={styles.inputTextFirstNameContainerStyle}>
              <CustomInputText
                autoCapitalize="words"
                onChangeText={(value) => {
                  const newHours = [...hours];
                  const update = {
                    day: ele.day,
                    endTime: ele.endTime,
                    startTime: value,
                  };
                  newHours[i] = update;
                  this.setState({hours: [...newHours]});
                }}
                placeholder={'Start Time'}
                value={ele.startTime}
                style={
                  ele.startTime
                    ? styles.inputTypeStyle
                    : [styles.inputTypeStyle, {fontWeight: '100'}]
                }
                placeholderTextColor={Constant.App.colors.blackColor}
              />
            </View>
            <View style={styles.inputTextFirstNameContainerStyle}>
              <CustomInputText
                autoCapitalize="words"
                onChangeText={(value) => {
                  const newHours = [...hours];
                  const update = {
                    day: ele.day,
                    endTime: value,
                    startTime: ele.startTime,
                  };
                  newHours[i] = update;
                  this.setState({hours: [...newHours]});
                }}
                placeholder={'End Time'}
                value={ele.endTime}
                style={
                  ele.endTime
                    ? styles.inputTypeStyle
                    : [styles.inputTypeStyle, {fontWeight: '100'}]
                }
                placeholderTextColor={Constant.App.colors.blackColor}
              />
            </View>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeaderView()}
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {this.renderInputTextView()}
        </ScrollView>
        {Platform.OS === 'ios' && <KeyboardSpacer />}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.user.data,
  lang: state.language,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (value) => dispatch(updateExpertDataToFirebase(value)),
  showHideErrorModal: (value) => dispatch(showOrHideModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAvailablity);
