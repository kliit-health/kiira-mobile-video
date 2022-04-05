import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { get } from 'lodash';
import { route, feature, colors, text } from '~/utils/constants';
import { ChevronRight } from '~/svgs';

const { fontFamily, size } = text;

export type NavItemProps = {
    title: string;
    description: string;
    destination: route;
    onPress: (destination: route, features: feature) => void;
    features?: feature;
    icon: any;
};

const NavItem = ({
    title,
    description,
    destination,
    onPress,
    features,
    icon: Icon,
}: NavItemProps) => {
    const language = useSelector(
        (state: RootState) => state.language,
        shallowEqual,
    );

    return (
        <TouchableOpacity
            testID={title}
            activeOpacity={0.8}
            style={styles.root}
            onPress={() => onPress(destination, features)}
        >
            <View style={styles.icon}>
                <Icon />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{get(language, title)}</Text>
                <Text style={styles.description}>
                    {get(language, description)}
                </Text>
            </View>
            <View style={styles.chevron}>
                <ChevronRight color={colors.gray} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    root: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderTopWidth: 0.4,
        borderColor: colors.gray,
        flexDirection: 'row',
        width: '100%',
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    icon: {
        height: 44,
        width: 44,
        borderRadius: 22,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.primaryBlue,
    },
    title: {
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '500',
        fontSize: text.size.regular,
        color: colors.black,
        lineHeight: 24,
    },
    description: {
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '400',
        fontSize: size.medium,
        color: colors.gray,
        lineHeight: 22,
    },
    chevron: {
        alignSelf: 'center',
        marginHorizontal: 'auto',
    },
});

export default NavItem;
