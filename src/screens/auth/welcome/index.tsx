import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { RootState } from '~/redux/reducers';
import Constant, { colors, icons,text } from '~/utils/constants';
import styles,{modifiers} from './styles';
import CustomButton from '~/components/customButton';
import { Avatar, CustomText, Icon } from '~/components';
import { TextInput } from 'react-native-gesture-handler';
import CustomSelectModal from '~/components/customselectModal';

const Welcome = ({ navigation }) => {
    const { staticImages, screenNames } = Constant.App;
    const user = useSelector((state: RootState) => state.user.data);
    const [showStateModal,setShowStateModal] = useState(false)
    const [showGenderModal,setShowGenderModal] = useState(false)
    const [showPronounModal,setShowPronounModal] = useState(false)
    const [selectedState,setSelectedState] = useState(null)
    const [selectedGender,setSelectedGender] = useState(null)
    const [selectedPronoun,setSelectedPronoun] = useState(null)
  
    const nameInputFieldNames =  [{
        placeholder: 'First Name'
    },
    {
        placeholder: 'Nick Name'
    }
]
 
const columnInputFields = [{
    placeholder:'Last Name'
},
{
    placeholder:'Birthday MM/DD/YYYY'
}
]

        

    return (
        <View style={{backgroundColor:'white'}}>
    
            
                <View style={styles.container}>
            <Icon
                            options={
                                { transform: [{ rotate: '180deg' }],margin:30}
                            }
                            source={icons.chevron}
                        />
            <Text style={styles.title}>
                   Complete your profile
                </Text>
                <Text style={styles.informationText}>
                    We will need this information to match you with clinicians and get your proper care
                </Text>
                <View style={styles.imageBackground}>
                <Avatar
                source={''}
                size="large"
                styles={modifiers.avatar}
            />
            </View>
                </View>
                <View >
              
<View style={{flexDirection:'row',marginTop:20}}>
    {nameInputFieldNames.map(item=>{
     return <TextInput
       style={styles.textInput}
     placeholderTextColor={colors.greyDark}
       placeholder= {item.placeholder}
       onChangeText={()=>console.log('---')}
    
   /> 
    })}
            </View>
            <View>
            {columnInputFields.map(item=>{
     return <TextInput
     style={styles.textInput1}
     placeholderTextColor={colors.greyDark}
       placeholder= {item.placeholder}
       onChangeText={()=>console.log('---')}
    
   /> 
})}    
 </View>
 {showStateModal && <CustomSelectModal
                            data={ Constant.App.Modal.states}
                            onSelection={item => {
                                console.log(
                                    '---onSelection CustomSelectModal---',
                                    item,
                                );
                                setSelectedState(item)
                                setShowStateModal(false)
                            }}
                            onClose={() => {
                                console.log('---onClose CustomSelectModal---');
                                setShowStateModal(false)
                            }}
                        />}
                        {showGenderModal && <CustomSelectModal
                            data={ Constant.App.Modal.gender}
                            onSelection={item => {
                                console.log(
                                    '---onSelection CustomSelectModal---',
                                    item,
                                );
                               setSelectedGender(item)
                               setShowGenderModal(false)
                            }}
                            onClose={() => {
                                console.log('---onClose CustomSelectModal---');
                                setShowGenderModal(false)
                            }}
                        />}
                        {showPronounModal && <CustomSelectModal
                            data={ Constant.App.Modal.Pronouns}
                            onSelection={item => {
                                console.log(
                                    '---onSelection CustomSelectModal---',
                                    item,
                                );
                               setSelectedPronoun(item)
                               setShowPronounModal(false)
                            }}
                            onClose={() => {
                                console.log('---onClose CustomSelectModal---');
                                setShowPronounModal(false)
                            }}
                        />}
 <View style={styles.stateDropDownContainerStyle}>
     
         <TouchableOpacity
         style={{ flexDirection: 'row' }}
         onPress={() => setShowStateModal(true)}
     >
         <CustomText style={selectedState?   styles.selectedTextStyle :styles.stateDropDownTextStyle}>
        {selectedState ? selectedState.value : 'Select State of Residency'} 
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
         style={{ flexDirection: 'row'}}
         onPress={() => setShowGenderModal(true)}
     >
         <CustomText style={selectedGender?   styles.selectedTextStyle :styles.stateDropDownTextStyle}>
        {selectedGender ? selectedGender.value:'Gender assigned at birth'}
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
         onPress={() => setShowPronounModal(true)}
     >
         <CustomText style={selectedPronoun?   styles.selectedTextStyle :styles.stateDropDownTextStyle}>
         {selectedPronoun? selectedPronoun.value:'Preferred Pronoun'}
         </CustomText>
         <Image
         resizeMode="contain"
             source={staticImages.downArrow}
             style={styles.dropDownIconStyle}
         />
     </TouchableOpacity>              
                </View>
          
                <CustomText style={{ color: colors.greyDark,
        fontSize: text.size.regular,
        fontFamily: text.fontFamily.poppinsRegular,
        textAlign: 'center',
        alignSelf: 'center',marginTop:5}}>
         1 of 2
         </CustomText>
                 <CustomButton
                    disabled={false}
                    buttonStyle={styles.buttonContainer}
                    textStyle={styles.buttonText}
                    onPress={() => {
                        navigation.navigate(screenNames.ChatBot);
                    }}
                    text="Continue"
                />
            </View>
           
               
        </View>
    );
};

export default withNavigation(Welcome);
