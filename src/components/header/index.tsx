import React from 'react';
import { shape, object, func, string, node, bool } from 'prop-types';
import IconButton from '../iconButton';
import TextButton from '../textButton';
import { View, Text } from 'react-native';
import { icons } from '../../utils/constants';
import { mergeStyles } from '../../utils/functions';
import defaultStyles, { modifiers } from './styles';

const Header = ({
    title,
    onBack,
    onEditPress,
    onFilterPress,
    onHomePress,
    onEditBilling,
    OnSettingPress,
    editState,
    styles: customStyles,
    children,
    disableEdit,
    onClose,
    themed,
}) => {
    const styles = {
        root: mergeStyles([
            defaultStyles.root,
            [modifiers.themed.root, themed],
            customStyles.root,
        ]),
        backButton: mergeStyles([
            modifiers.backButton,
            [modifiers.themed.backButton, themed],
            customStyles.backButton,
        ]),
        title: mergeStyles([
            defaultStyles.title,
            [modifiers.themed.title, themed],
            customStyles.title,
        ]),
        editButton: {
            root: defaultStyles.editButton,
        },
        filterButton: defaultStyles.filterButton,
        homeButton: defaultStyles.homeButton,
        billingButton: defaultStyles.billingButton,
        settingButton:  defaultStyles.settingButton,
        
    };

    return (
        <View style={styles.root}>
            {onBack && (
                <IconButton
                    test="Back Button"
                    styles={styles.backButton}
                    source={icons.chevron}
                    onPress={onBack}
                    boxed={themed}
                />
            )}
            {onClose && <IconButton source={icons.cross} onPress={onClose} />}
            <Text pointerEvents="none" style={styles.title}>
                {title}
            </Text>
            {children}
            {onEditPress && (
                <TextButton
                    disabled={disableEdit}
                    styles={styles.editButton}
                    link
                    onPress={onEditPress}
                >
                    {disableEdit ? 'Edit' : editState ? 'Done' : 'Edit'}
                </TextButton>
            )}
            {onFilterPress && (
                <IconButton
                    test="Chat Filter Button"
                    styles={{ image: styles.filterButton }}
                    source={icons.filterIcon}
                    onPress={onFilterPress}
                    boxed={themed}
                />
            )}
            {onHomePress && (
                <IconButton
                    test="Chat Home Button"
                    styles={{ image: styles.homeButton }}
                    source={icons.home}
                    onPress={onHomePress}
                    boxed={themed}
                />
            )}
            {onEditBilling && (
                <IconButton
                    test="Chat Billing Button"
                    styles={{ image: styles.billingButton }}
                    source={icons.editBilling}
                    onPress={onEditBilling}
                    boxed={themed}
                />
            )}
             {OnSettingPress && (
                <IconButton
                    test="Chat Setting Button"
                    styles={{ image: styles.settingButton }}
                    source={icons.settings}
                    onPress={OnSettingPress}
                    boxed={themed}
                />
            )}
            
        </View>
    );
};

Header.propTypes = {
    title: string,
    onBack: func,
    onEdit: func,
    onClose: func,
    disableEdit: bool,
    children: node,
    editState: bool,
    themed: bool,
    styles: shape({
        root: object,
        back: shape({
            root: object,
            image: object,
        }),
    }),
};

Header.defaultProps = {
    title: undefined,
    onBack: undefined,
    onEdit: undefined,
    onClose: undefined,
    children: undefined,
    disableEdit: false,
    editState: true,
    styles: {},
    themed: false,
};

Header.displayName = 'Header';

export default Header;
