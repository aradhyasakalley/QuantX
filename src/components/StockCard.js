import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const StockCard = ({stock}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{stock.name}</Text>
        <Text style={styles.symbol}>{stock.symbol}</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>₹</Text>
          <Text style={styles.detailValue}>{stock.price}</Text>
        </View>
        <View style={styles.detail}>
          <Text
            style={[
              styles.detailValue,
              {color: stock.change > 0 ? 'green' : 'red'},
            ]}>
            {stock.change} ({stock.changePercent}%)
          </Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailValue}>{stock.marketCap}</Text>
          <View>
            <TouchableOpacity>
              {/* Plus Icon */}
              <Icon
                name="plus"
                size={20}
                color={Colors.amber100}
                style={{marginRight: 5}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Add more details as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderRadius: 15,
    padding: 15,
    marginVertical: 5,
    margin : 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  symbol: {
    fontSize: 16,
    color: '#666',
  },
  details: {},
  detail: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent : 'space-between'
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  detailValue: {
    fontSize: 16,
  },
});

export default StockCard;
