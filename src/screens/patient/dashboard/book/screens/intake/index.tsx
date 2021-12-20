import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, TextInput, Alert } from 'react-native';
import { Screen, Header, Column, Text, Row, Button } from '~/components';
import { withNavigation } from 'react-navigation';
import { h1, h2, h3, default as globalStyles } from '~/components/styles';
import { colors, text, screenNames, healthIntakeQuerying, controlType } from '~/utils/constants';
import SimpleGradientProgressbarView from "react-native-simple-gradient-progressbar-view";
import * as Kiira from '~/components';
import metrices from '~/utils/metrices'; 
import { useDispatch, useSelector } from 'react-redux';
import { updateIntakeData } from '~/redux/reducers/account';
import { TouchableOpacity } from 'react-native-gesture-handler'; 
import { images } from '~/utils/constants';  
import Logo from '~/svgs/gpenguin.svg';

const { size, fontFamily } = text;

const { height_50, width_50, align_items_c, justify_c, sm_pad_v, white_bg } =
    globalStyles;

const intakeData = [
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    },
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    },
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    },
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    },
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    },
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    },
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    },
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    },
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    },
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    },
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    },
    { 
        label: "",
        name: "",
        type: controlType.RadioType,
    }, 
    {
        label: [],
        name: "",
        type: controlType.CheckType,
    },
    {
        label: [],
        name: "",
        type: controlType.CheckType,
    },
    {
        label: "",
        name: "",
        type: controlType.TextType,
    },
    {
        label: [],
        name: "",
        type: controlType.CheckType,
    },
    {
        label: "",
        name: "",
        type: controlType.TextType,
    },
    {
        label: "",
        name: "",
        type: controlType.TextType,
    },
]; 

const selectItems = []; 

const Intake = ({ navigation }) => {   

    const dispatch = useDispatch();
    const { appointmentDetails } = navigation.state.params;
    const [queryIndex, setQueryIndex] = useState(0); 
    const [data, setData] = useState(healthIntakeQuerying[queryIndex].kind); 
    const [type, setType] = useState(healthIntakeQuerying[queryIndex].type); 
 
     
    useEffect(() => {
         
    }, []);

    const onIntakeFinish = () => {  
        const data = {
            intakeData: intakeData,
            navigation,
        }; 
        dispatch(updateIntakeData(data));  
    }

    const handleSelection = item => {  
        if(healthIntakeQuerying[queryIndex].type == controlType.RadioType){
            intakeData[queryIndex].label = item.label;
            intakeData[queryIndex].name = item.name;
        }
        else {
            intakeData[queryIndex].name = item;
            intakeData[queryIndex].name = item;
        } 

        selectItems[queryIndex] = item; 
    };
    
    return (
        <Screen>
            <Header title="Health Intake"/>
            <SimpleGradientProgressbarView
                    style={styles.progressBarStyle} 
                    fromColor="#00C0E2"
                    toColor="#0253E2"
                    progress={(queryIndex + 1) / (healthIntakeQuerying.length - 1)}
                    maskedCorners={[1, 1, 1, 1]}
                    cornerRadius={3.0} 
            /> 
            {type !== controlType.CompleteType &&
                <Text options={[styles.numberStyle]}>{(queryIndex + 1) + ' of ' +  (healthIntakeQuerying.length - 1)}</Text>
            }

            {type !== controlType.CompleteType &&
                <View style={[styles.queryStyle]}> 
                    <Text options={[styles.queryTextStyle]}>{healthIntakeQuerying[queryIndex].name}</Text>
                </View> 
            }
            {type === controlType.CompleteType && 
                <Column options={[align_items_c, justify_c]}>
                    <Logo />
                    <Text options={[h1, styles.allSetStyle]}>You're all set!</Text>
                    <Text options={[h3, sm_pad_v, styles.centerStyle]}>
                        Thanks for completing your intake form. 
                    </Text>
                </Column>
            }

            {type === controlType.TextType &&
                <View style={[styles.optionTextStyle]}> 
                    <TextInput 
                        multiline={true}
                        placeholder={healthIntakeQuerying[queryIndex].hint}  
                        onChangeText={handleSelection}
                        style={styles.textStyle} 
                        placeholderTextColor={'#868992'}
                    />
                </View>
            }
             
            {(type === controlType.RadioType || type === controlType.CheckType) && 
                <Column options={[white_bg, styles.optionStyle]}>
                    <Kiira.RadioGroupQuery 
                        onSelect={handleSelection} 
                        data={data} type={type} 
                        styles={styles.radioGropStyle}
                        initialValue={ selectItems[queryIndex] } 
                    />
                </Column>
            } 
            
            {type !== controlType.CompleteType &&
                <Row options={[styles.buttonContainer]}>
                    <TouchableOpacity onPress={() => 
                    {
                        const index = queryIndex <= 0 ? 0 : queryIndex - 1;
                        setQueryIndex(index);
                        setData(healthIntakeQuerying[index].kind); 
                        setType(healthIntakeQuerying[index].type); 
                    }}>
                        <Image
                            style={styles.icon}
                            resizeMode="contain"
                            source={images.circleBackButton}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { 
                        if(queryIndex >= healthIntakeQuerying.length - 1){
                            onIntakeFinish();
                            return;
                        }
                        const index = queryIndex + 1; 
                        setQueryIndex(index);
                        setData(healthIntakeQuerying[index].kind); 
                        setType(healthIntakeQuerying[index].type); 
                    }}>
                        <Image
                        style={styles.icon}
                        resizeMode="contain"
                        source={images.circleNextButton}
                    />
                    </TouchableOpacity> 
                </Row>
            }
            {type === controlType.CompleteType && 
                <Column options={[styles.finishButton]}>
                    <Button 
                        onPress={onIntakeFinish}
                        title="Go to Home"
                        style={{
                            container: styles.healthIntake,
                            title: styles.healthIntakeTitle,
                        }}
                    />
                </Column>
            }
            
        </Screen>
    );
};

export default withNavigation(Intake);

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 0,
        margin: 15,
        flex: 0,
        backgroundColor: colors.white,
        paddingBottom: 10,
        alignSelf:'center',  
    },

    finishButton: {
        padding: 0,
        margin: 15,
        flex: 0,
        backgroundColor: colors.white,
        paddingBottom: 10,
        alignSelf:'center', 
        width:'100%'
    },

    homeButton: {
        borderRadius: 0,
        backgroundColor: colors.white,
    },

    homeButtonTitle: {
        color: colors.primaryBlue,
    },

    healthIntake: {
        marginHorizontal: 20,
        backgroundColor: colors.primaryBlue, 
    },

    healthIntakeTitle: {
        color: colors.white,
    },

    progressBarStyle: {
        width: metrices.width,
        height:3,    
        marginVertical: 20,
        borderColor: '#CCDDF9',
        backgroundColor: '#CCDDF9', 
        borderRadius: 7.0,
        top:-18,
    },

    queryTextStyle: { 
        marginHorizontal: 20,
        fontSize: text.size.xsLarge,
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight: '400',  
        lineHeight:36
    },

    numberStyle: {  
        fontSize: text.size.small,
        fontFamily: text.fontFamily.poppinsRegular,
        color: '#868992',
        fontWeight: '400',  
        top:-18,
        width:'100%',  
        paddingRight:20,
        textAlign:'right'
    },

    queryStyle: {   
        flex:0.35,  
        borderBottomWidth: 1,
        borderColor: '#DDE0E7',  
    },

    optionStyle: { 
        marginTop: 30,
        marginHorizontal: 40,  
        flex:0.65,  
    },

    optionTextStyle: { 
        marginTop: 30,
        marginHorizontal: 20,  
        flex:0.65,   
    },

    radioGropStyle: {
         
    },

    icon: {
        width: 60,
        height: 60,   
        marginRight: 16
    },

    textStyle:{ 
        backgroundColor:  '#F6F7FA',
        width:'100%', 
        height:120,  
        paddingHorizontal : 10,
        paddingVertical : 8, 
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsLight,
        borderRadius:8,
    }, 

    allSetStyle:{
        marginTop: 50,
        marginBottom:15
    },

    centerStyle:{
        justifyContent:'center',
        textAlign:'center',
        marginHorizontal:44
    }
});
