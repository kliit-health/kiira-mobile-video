import React from 'react';
import { shape, object, string, func } from 'prop-types';
import { View, TextInput } from 'react-native';
import { colors } from '../../utils/constants';
import Search from '../../svgs/search.svg';
import defaultStyles from './styles';

const SearchBar = ({
    styles: customStyles,
    placeholder,
    onChange,
    ...rest
}) => {
    const styles = {
        root: [defaultStyles.root, customStyles.root],
        textInput: [defaultStyles.textInput, customStyles.textInput],
        iconContainer: [
            defaultStyles.iconContainer,
            customStyles.iconContainer,
        ],
    };

    return (
        <View style={styles.root}>
            <TextInput
                style={styles.textInput}
                placeholderTextColor={colors.blueGrey}
                placeholder={placeholder}
                onChangeText={onChange}
                {...rest}
            />
            <View style={styles.iconContainer}>
                <Search color={colors.blueGrey} />
            </View>
        </View>
    );
};

SearchBar.propTypes = {
    styles: shape({
        root: object,
    }),
    onChange: func,
    placeholder: string,
};

SearchBar.defaultProps = {
    styles: {},
    onChange: () => {},
    placeholder: undefined,
};

SearchBar.displayName = 'SearchBar';

export default SearchBar;
