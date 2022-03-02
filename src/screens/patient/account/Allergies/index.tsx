import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector} from 'react-redux';
import { Container, Header, Screen } from '~/components';
import { View } from 'react-native-animatable';
import { colors, text } from '~/utils/constants';
import Constant from '../../../../utils/constants';


const Allergies = ({ navigation }) => {
    const user = useSelector(state => state.user.data);
    const lang = useSelector(state => state.language);
   


    const handleBackPress = () => {
        navigation.goBack();
    };

console.log(user.intakeData)
const NoAllergiesScreen = () => {
    return  <Container>    
    <Header title={lang.allergies.title} onBack={handleBackPress} />
     <Text style={styles.noAllergiesText}>You have no allergies on record with Kiira</Text>
    
</Container>
}
const AllergiesScreen = () =>{
    const allergiesList = user.intakeData[14].name.trim().split(/[ ,]+/);
   return <Screen>    
   <Header title={lang.allergies.title} onBack={handleBackPress} />
   <Text style={styles.allergiesTitle}>All Allergies</Text>
   {allergiesList.map((title) => (
               <TouchableOpacity
               style={
                   styles.allergiesListContainer
               }

           >
               <View>
                   <View
                       style={styles.titleView}
                   >

                         
                               <Text style={styles.title}>
                                   {title}
                               </Text>
                         
                     
                   </View>
               </View>
           </TouchableOpacity>
           ))}
   
</Screen>
}

    return (
   user && user.intakeData &&  user.intakeData[14] && user.intakeData[14].name !== "" ? <AllergiesScreen /> : <NoAllergiesScreen />
    );
        
       
    
};

export default Allergies;
const styles = StyleSheet.create({
    title: { 
        fontFamily: text.fontFamily.poppinsMedium,
        fontSize: text.size.regular,
        marginHorizontal:'2%',
    }, 
    titleView:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    allergiesListContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        padding: 15,
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: colors.greyAccent,
        borderTopWidth: 1,
    },
    allergiesTitle:{
        color: Constant.App.colors.blackColor,
        fontSize: Constant.App.textSize.xxLarge,
        fontFamily: text.fontFamily.poppinsRegular,
        fontWeight: '400',
        margin:10 
    },
    noAllergiesText:{
        fontFamily: text.fontFamily.poppinsRegular,
        fontSize: text.size.large,
        color: colors.greyDark,
        margin: 30,
        textAlign:'center'
    }
});
