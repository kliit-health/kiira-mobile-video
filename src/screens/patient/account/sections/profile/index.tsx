import React, { useState } from 'react';
import { View, Text, Image, Modal } from 'react-native';
import { get } from 'lodash';
import { cardDetails } from './model';
import { Avatar, Icon, Header, Screen, CustomButton, CustomText } from '~/components';
import styles, { messageStyles, modifiers } from './styles'; 

export default ({ profileInfo, navigation }) => {
    const { firstName, lastName, profileImageUrl } = profileInfo;
    const [showModal,setShowModal] = useState(false)

    const handleOnBackPress = () => {
         
    }; 

    const handleSetting = () => {
       setShowModal(true)  
    }; 

    const onListPlan = () => {
         
    }; 

    const getFieldNames = (value, fieldName) => { 
        console.log(fieldName, value)
         if(value == null || value == ""){
            if(fieldName == 'state.value'){
                return "Location";
            }
            else if(fieldName == 'pronouns'){
                return "Gender";
            }
            else if(fieldName == 'sexuality.value'){
                return "Orientation";
            }
            else if(fieldName == 'dob'){
                return "Birthday";
            }
         }
         return value;
    }
     const RenderModalView = () =>{
         return ( <Modal
            animationType="fade"
            onRequestClose={() => {}}
            transparent
            visible={showModal}
        >
            <View style={messageStyles.card}>
              
                    <CustomText style={messageStyles.card}>
                        {'These records are currently empty because you have not filled out your health intake form.'}
                    </CustomText>
                    
          
                {/* <CustomButton
                    buttonStyle={styles.actionModalOkBtnErrorContainerStyle}
                    textStyle={styles.actionModalOkBtnErrorTextStyle}
                    text={'Complete Health Intake'}
                    onPress={() => console.log('')}
                /> */}
            </View>
        </Modal>)
     }
    return (
        <Screen>
            <View style={styles.headerStyle}>
                <Header 
                    title="Basic Plan"  
                    onBack={handleOnBackPress}
                    onListPress={onListPlan}
                    OnSettingPress={handleSetting}  
                />
            </View>
            <Avatar
                source={profileImageUrl ? profileImageUrl : ''}
                size="large"
                styles={modifiers.avatar}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
            </View>
            <RenderModalView />
            <View style={styles.root}>
                {cardDetails.map(({ icon, value }) => (
                    <View style={styles.itemContainer}>
                        <Icon options={[styles.icon]} source={icon} /> 
                        <Text style={get(profileInfo, value) ? styles.itemTitle : styles.itemEmptyTitle}>
                            {getFieldNames(get(profileInfo, value), value)}
                        </Text>
                    </View>
                ))}
            </View>
        </Screen>
    );
};
