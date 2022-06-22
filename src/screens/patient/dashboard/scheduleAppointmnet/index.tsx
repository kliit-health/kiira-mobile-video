import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';
import { ProgressBar, Colors } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation';
import { CustomText, Header, Text } from '~/components';
import { getStatusBarHeight } from '~/components/iPhoneXHelper';
import { colors } from '~/utils/constants';
import metrics from '~/utils/metrices';
import Constant from '~/utils/constants';
import { getAllDocumentsFromCollection } from '~/utils/firebase';
import { NavigationService as navigation } from '../../../../navigation';
import { useEffect, useState } from 'react';
import CustomSelectModal from '~/components/customselectModal';


let parentPaddingValue = metrics.width * 0.08;
let parentPadding = parentPaddingValue * 2;
let childPaddingValue = metrics.width * 0.03;
let childPadding = parentPadding + childPaddingValue * 2;
const { staticImages } = Constant.App;

const ScheduleAppointment = () => {
    const [catagories, setCatagories] = useState(null);
    const [selectedService,setSelectedService] = useState(null);
    const [showSelectedModal,setShowSelectedModal] = useState(false)
    useEffect(() => {
        (async () => {
            const topics = await getAllDocumentsFromCollection(
                `appointmentCategories`,
            );

            if (Array.isArray(topics)) {
                const reasons = topics.map((item) => {
                    
                    return item.reasons;
                });

                 setCatagories(reasons);
            //     // setData(reasons[activeTab]);
            }
            // setCatagories(reasons)
        })();
    }, []);
       console.log("Categories",catagories) 
   return  <SafeAreaView style={styles.container}>
        <Header onBack={()=>navigation.goBack()}/>
        <Text>Book an appointment</Text>
  <ProgressBar progress={0.3} color={colors.primaryBlue} style={{marginTop:30,height:7,marginLeft:30,marginRight:30,borderRadius:100}}/>
  <View style={styles.stateDropDownContainerStyle}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={() =>setShowSelectedModal(!showSelectedModal)}
                    >
                        <CustomText style={styles.stateDropDownTextStyle}>
                            Boook a Service
                        </CustomText>
                        <Image
                            resizeMode="contain"
                            source={staticImages.downArrow}
                            style={styles.dropDownIconStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.stateDropDownContainerStyle}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={() => console.log("hello")}
                    >
                        <CustomText style={styles.stateDropDownTextStyle}>
                            service type
                        </CustomText>
                        <Image
                            resizeMode="contain"
                            source={staticImages.downArrow}
                            style={styles.dropDownIconStyle}
                        />
                    </TouchableOpacity>
                    {showSelectedModal ? <CustomSelectModal
                                data={catagories}
                                onSelection={item => {
                                    console.log(
                                        '---onSelection CustomSelectModal---',
                                        item,
                                    );
                                    setSelectedService(item);
                                    setShowSelectedModal(false)
                                    // this.setState({
                                    //     selectedState: item,
                                    //     showSelectStateModal: false,
                                    // });
                                }}
                                onClose={() => {
                                    console.log(
                                        '---onClose CustomSelectModal---',
                                    );
                                    setShowSelectedModal(false)
                                    // this.setState({
                                    //     showSelectStateModal: false,
                                    // });
                                }}
                            />: null}
                    
                </View>
  </SafeAreaView>
};
const styles = StyleSheet.create({ 
        headerStyle:{
            borderBottomColor: colors.greyAccent,
            borderBottomWidth: 1, 
            backgroundColor:colors.greyAccent  
        },
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: colors.white,
            marginTop: getStatusBarHeight(null),
        },
        stateDropDownContainerStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: metrics.width - childPadding,
            marginTop: metrics.height * 0.03,
            borderBottomColor:colors.black,
            borderBottomWidth: 0.5,
            paddingBottom: metrics.height * 0.01,
        },
        dropDownIconStyle: {
            height: metrics.width * 0.04,
            width: metrics.width * 0.04,
        },stateDropDownTextStyle: {
            color: Constant.App.colors.blackColor,
            fontSize: Constant.App.textSize.Normal,
            fontFamily: Constant.App.fontFamily.bodyRegular,
            textAlign: 'left',
            alignSelf: 'center',
            width: metrics.width - childPadding - metrics.width * 0.05,
        },
    
  })
export default ScheduleAppointment;