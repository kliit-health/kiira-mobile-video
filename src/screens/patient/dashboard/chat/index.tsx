import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { Screen, Header, NavItem, Column, Text, Tabs } from '~/components';
import {
    handleBack,
    handleNavigation,
} from '~/utils/functions/handleNavigation';
import { default as globalStyles } from '~/components/styles';
import { Show } from './components';
import { chatTabs, navItems } from './model';

const {
    blue_bg,
    gray_dark,
    pad_b,
    sm_pad_v,
    pad_h,
    medium,
    white_bg,
    xxLarge,
} = globalStyles;

const Chat = () => {
    const { resolved, unresolved } = useSelector(
        (state: RootState) => state.questions,
    );
    const experts = useSelector((state: RootState) => state.experts);
    const lang = useSelector((state: RootState) => state.language);

    const [pastQuestions, setPastQuestions] = useState(false);

    const handleTabSelect = () => {
        setPastQuestions(!pastQuestions);
    };

    return (
        <Screen test="Chat Screen">
            <Header title="Chats" onBack={handleBack} />
            <Text options={[xxLarge, pad_h, sm_pad_v]}>
                Please select a category
            </Text>
            <Text options={[gray_dark, medium, pad_h, pad_b]}>
                Responses are typically recieved within 24 hours
            </Text>
            <Column options={[white_bg]}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={navItems}
                    renderItem={({ item }) => (
                        <NavItem
                            key={item.title}
                            {...item}
                            onPress={handleNavigation}
                        />
                    )}
                />
            </Column>
            <Tabs
                options={[blue_bg]}
                list={chatTabs}
                active={pastQuestions}
                setActive={handleTabSelect}
            />
            <Show
                pastSelected={pastQuestions}
                resolved={resolved}
                unresolved={unresolved}
            />
        </Screen>
    );
};

export default Chat;

// renderPreviousQuestionView() {
//         const { navigation, previousQuestionData, experts, lang } = this.props;
//         return (
//             <View style={styles.myPrevQuestionParentContainerStyle}>
//                 <CustomText style={styles.myPrevQuestionTitleTextStyle}>
//                     {lang.askUser.myPreviousQuestions}
//                 </CustomText>
//                 <FlatList
//                     showsVerticalScrollIndicator={false}
//                     keyboardDismissMode={
//                         Platform.OS === 'ios' ? 'none' : 'on-drag'
//                     }
//                     keyboardShouldPersistTaps={
//                         Platform.OS === 'ios' ? 'never' : 'always'
//                     }
//                     data={previousQuestionData}
//                     renderItem={({ item }) => {
//                         return (
//                             <TouchableOpacity
//                                 onPress={() => {
//                                     const expertDetails = experts.find(
//                                         expert =>
//                                             expert.uid === item.expertInfo.uid,
//                                     );

//                                     navigation.navigate(
//                                         Constant.App.screenNames.Chat,
//                                         {
//                                             questionData: item,
//                                             expertDetails,
//                                         },
//                                     );
//                                 }}
//                             >
//                                 <View
//                                     style={styles.myPrevQuestionContainerStyle}
//                                 >
//                                     <CustomText
//                                         style={styles.myPrevQuestionTextStyle}
//                                     >
//                                         {item.question}
//                                     </CustomText>
//                                     <View
//                                         style={styles.expertInfoContainerStyle}
//                                     >
//                                         <TouchableOpacity
//                                             onPress={() => {
//                                                 navigation.navigate(
//                                                     Constant.App.screenNames
//                                                         .ExpertProfile,
//                                                     {
//                                                         isFrom: Constant.App
//                                                             .screenNames
//                                                             .AskUser,
//                                                         uid: item.expertInfo
//                                                             .uid,
//                                                     },
//                                                 );
//                                             }}
//                                         >
//                                             <FastImage
//                                                 containerStyle={{
//                                                     alignSelf: 'center',
//                                                 }}
//                                                 style={{
//                                                     width: 50,
//                                                     height: 50,
//                                                 }}
//                                                 source={{
//                                                     uri: item.expertInfo
//                                                         .profileInfo
//                                                         .profileImageUrl
//                                                         ? item.expertInfo
//                                                               .profileInfo
//                                                               .profileImageUrl
//                                                         : '',
//                                                 }}
//                                                 activeOpacity={0.7}
//                                             />
//                                         </TouchableOpacity>
//                                         <CustomText
//                                             style={styles.expertInfoTextStyle}
//                                         >
//                                             {`${lang.askUser.answerBy} ${
//                                                 item.expertInfo.profileInfo
//                                                     .firstName
//                                             }, ${
//                                                 item.expertInfo.profileInfo
//                                                     .profession.shortName
//                                             }\n${moment
//                                                 .unix(item.resolvedDate)
//                                                 .format(
//                                                     Constant.App.dateFormat,
//                                                 )}`}
//                                         </CustomText>
//                                     </View>
//                                 </View>
//                             </TouchableOpacity>
//                         );
//                     }}
//                     keyExtractor={(item, index) => index.toString()}
//                 />
//             </View>
//         );
//     }
