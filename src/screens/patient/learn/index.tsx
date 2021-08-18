import React, { useRef } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { WebView } from 'react-native-webview';
import { Container, Header } from '~/components';
import { modifiers } from './styles';

const Learn = () => {
    const language = useSelector(state => state.language, shallowEqual);
    const webViewRef = useRef(null);

    const handleBackPress = () => {
        webViewRef.current.goBack();
    };

    return (
        <Container
            unformatted
            barStyle="dark-content"
            styles={modifiers.container}
        >
            <Header title={language.learn.title} onBack={handleBackPress} />
            <WebView
                ref={webViewRef}
                source={{ uri: 'https://www.kiira.io/blog' }}
            />
        </Container>
    );
};

export default Learn;
