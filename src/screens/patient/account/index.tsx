import React, { useState } from 'react';
import { CustomButton, CustomText, Screen, TextButton } from '~/components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { Modal, ScrollView, Text, View } from 'react-native';
import { app, screenNames } from '~/utils/constants';
import { Profile, List, Plan } from './sections';
import { signOut } from '~/redux/reducers/account';
import styles, { modifiers } from './styles';
import { handleNavigation } from '~/utils/functions';

const Account = ({ navigation }) => {
    const dispatch = useDispatch();

    const subscription = useSelector((state: RootState) => state.subscription);
    const user = useSelector((state: RootState) => state.user.data);
    const lang = useSelector((state: RootState) => state.language);
    const [showModal,setShowModal] = useState(false)

    const handleSignOut = () => {
        dispatch(signOut({ navigation }));
    };
    const RenderModalView = () =>{
        return (
             <Modal
           transparent={true}
           animationType="fade"
           onRequestClose={() => {}}
           visible={showModal}
       >
            <View style={styles.centeredView}>
           <View style={styles.modalView}>
             
                   <CustomText style={styles.modalText}>
                       {'These records are currently empty because you have not filled out your health intake form.'}
                   </CustomText>
                   
         
               <CustomButton
                   buttonStyle={styles.button}
                   textStyle={styles.textStyle}
                   text={'Complete Health Intake'}
                   onPress={() =>{
                       setShowModal(false)
                    navigation.navigate(screenNames.settings)
                   }}
               />
           </View>
           </View>
       </Modal>
       )
    }
    return (
        <Screen test="Profile Screen" >
             
            <ScrollView showsVerticalScrollIndicator={false} >
           
                <Profile {...user} setShowModal={setShowModal}/>
                {!!subscription.data.id && (
                    <Plan subscription={subscription} user={user} />
                )}
                <List onItemPress={handleNavigation} /> 
                <View style={showModal ? styles.ModalContainer: {}}>
                <RenderModalView />
                </View>
            </ScrollView>
            
        </Screen>
    );
};

export default Account;
