import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SwipeableFlatList from 'react-native-swipeable-list';

import routes from '../../config/routes';
import { Colors, Typography } from '../../styles';
import { getCurrency } from '../../utils/currency';
import { getMoneyBox, deleteMoneyBox } from '../../dbHelpers/moneyboxHelper';

import QuickActions from '../../utils/quickActions';
import MoneyBoxCard from '../../components/Cards/MoneyBoxCard';

const MoneyBox = ({ navigation }) => {
    const focused = useIsFocused();

    const [moneybox, setMoneyBox] = useState([]);
    const [currency, setCurrency] = useState({});

    useEffect(() => {
        getMoneyBox(setMoneyBox);
        getCurrency(setCurrency);
    }, [focused]);

    // Delete Item
    const __delete = (id) => {
        deleteMoneyBox(id);
        getMoneyBox(setMoneyBox);
    }

    // Update Item
    const __update = (item) => {
        navigation.navigate(routes.AddMoneyBox, { item: item })
    }

    // Hardcoded investment strategies
    const investmentStrategies = [
        {
            name: 'Strategy 1',
            years: 5,
            volatility: 'High',
            description: 'This strategy aims for high returns by investing aggressively in high-risk assets.'
        },
        {
            name: 'Strategy 2',
            years: 10,
            volatility: 'Medium',
            description: 'A balanced strategy focusing on moderate returns with a mix of risk and stable assets.'
        },
        {
            name: 'Strategy 3',
            years: 7,
            volatility: 'Low',
            description: 'This conservative strategy prioritizes capital preservation with minimal risk.'
        },
        {
            name: 'Strategy 4',
            years: 3,
            volatility: 'High',
            description: 'An aggressive strategy seeking high returns in a short timeframe through high-risk investments.'
        },
        {
            name: 'Strategy 5',
            years: 8,
            volatility: 'Medium',
            description: 'A strategy balancing risk and return over a longer investment horizon.'
        },
    ];

    const getVolatilityColor = (volatility) => {
        switch (volatility) {
            case 'High':
                return '#ff4d4d'; // Red
            case 'Medium':
                return '#fffdd0'; // Yellow
            case 'Low':
                return '#99d5a1'; // Green
            default:
                return '#fff'; // White
        }
    }

    const getVolatilityLabel = (volatility) => {
        switch (volatility) {
            case 'High':
                return 'HIGH VOLATILITY';
            case 'Medium':
                return 'MED VOLATILITY';
            case 'Low':
                return 'LOW VOLATILITY';
            default:
                return '';
        }
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={[Typography.H1, { color: Colors.WHITE, marginBottom: 10 }]}>MoneyBox</Text>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.iconContainer}
                    onPress={() => navigation.navigate(routes.AddMoneyBox)}>
                    <Icon name="plus" color={Colors.WHITE} size={15} />
                </TouchableOpacity>
            </View>

            {/* Body */}
            <ScrollView style={styles.bodyContainer}>
                {investmentStrategies.map((strategy, index) => (
                    <View key={index} style={styles.cardContainer}>
                        <Text style={styles.strategyName}>{strategy.name}</Text>
                        <View style={styles.detailsContainer}>
                            <View style={[styles.detailItem, { backgroundColor: getVolatilityColor(strategy.volatility) }]}>
                                <Text style={styles.detailText}>{getVolatilityLabel(strategy.volatility)}</Text>
                            </View>
                            <View style={[styles.detailItem, { backgroundColor: '#fffdd0', borderRadius: 10 }]}>
                                <Text style={styles.detailText}>Years: {strategy.years}</Text>
                            </View>
                        </View>
                        <Text style={styles.strategyDescription}>{strategy.description}</Text>
                        <TouchableOpacity
                         onPress={() => navigation.navigate(routes.ViewStrategy)}
                         style={styles.viewButton}>
                            <Text style={styles.viewButtonText}>View</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK
    },
    // Header
    headerContainer: {
        padding: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHT_BLACK
    },
    // Body
    bodyContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    cardContainer: {
        backgroundColor: '#243b55',
        borderRadius: 20,
        padding: 20,
        marginBottom: 15
    },
    strategyName: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    detailsContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    detailItem: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginRight: 10,
    },
    detailText: {
        color: 'black',
        fontSize: 14,
    },
    strategyDescription: {
        color: Colors.WHITE,
        fontSize: 14,
        marginBottom: 10
    },
    viewButton: {
        backgroundColor: '#0b5394',
        height: 30,
        width: '20%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewButtonText: {
        color: Colors.WHITE,
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default MoneyBox;
