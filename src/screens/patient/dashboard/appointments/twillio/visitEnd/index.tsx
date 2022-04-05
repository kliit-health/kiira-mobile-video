import React from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { Container, Header, Row, Text, Button } from '~/components';
import { handleNavigation } from '~/utils/functions';
import { images } from '~/utils/constants';
import { default as globalStyles } from '~/components/styles';

import styles from './styles';

const { center, xxLarge } = globalStyles;

const VisitEnd = () => {
    const lang = useSelector((state: RootState) => state.language);

    return (
        <Container styles={{ root: styles.container }} unformatted>
            <Header title="Virtual Visit" />
            <View style={styles.confirmationContainer}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={images.kiiraLogo}
                />
                <Text options={[center, xxLarge]}>
                    {lang.appointments.endVisit}
                </Text>
            </View>
            <Row>
                <Button
                    style={{
                        container: styles.visitReturn,
                        title: styles.visitReturnText,
                    }}
                    title="Return to Visit"
                    onPress={() => handleNavigation('Appointments')}
                />
                <Button
                    style={{ container: styles.visitEnd }}
                    title="End Visit"
                    onPress={() => handleNavigation('VideoRating')}
                />
            </Row>
        </Container>
    );
};

export default VisitEnd;
