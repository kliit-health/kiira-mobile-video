import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Header, Screen, Button, Column, Row } from '~/components';
import CustomInputText from '~/components/customInputText';
import Constant from '~/utils/constants';
import moment from 'moment';
import styles from './styles';

const BillModel = ({ billDate}) => {      
    
    const [year, setYear] = useState(moment(billDate).format('YYYY') )
    const [month, setMonth] = useState(moment(billDate).format('MMM') )
    const [day, setDay] = useState(moment(billDate).format('DD') )
    const [diff, setDiff] = useState("0")

    useEffect(() => { 
        setDiff(moment.unix(billDate / 1000).fromNow(true));
    }, []);
 

    return (
        <View style={styles.headerStyle}>
            <View style={styles.dateStyle}>
                <Text style={styles.monthStyle}>{month}</Text>
                <Text style={styles.dayStyle}>{day}</Text>
                <Text style={styles.yearStyle}>{year}</Text>
            </View>
            <View style={styles.pastStyle}>
                <View style={styles.visitStyle}>
                    <Text style={styles.moneyStyle}>$120 | </Text>
                    <Text style={styles.timeStyle}>{(diff.length > 10 ? diff.substr(0, 9) : diff) + '. Virtual Visit'}</Text>
                </View>
                
                <View>
                    <Text style={styles.pdfStyle}>{'View PDF'}</Text> 
                </View>
            </View>
        </View>
    );
};

export default BillModel;
