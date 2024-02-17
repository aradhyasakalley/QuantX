import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { Colors, Typography } from '../../styles';
import BackHeader from '../../components/Headers/BackHeader';

const Notifications = ({ navigation }) => {
  // Dummy data for notifications
  const notifications = [
    { id: '1', message: 'Bid successful for item XYZ.' },
    { id: '2', message: 'New message from user ABC.' },
    { id: '3', message: 'Your account has been credited.' },
    { id: '4', message: 'Reminder: Event XYZ starts at 2 PM.' },
    
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <BackHeader title='Notifications' />

      {/* Body */}
      <View style={styles.bodyContainer}>
        {notifications.length > 0 ? (
          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.notificationItem}>
                <Text style={styles.notificationText}>{item.message}</Text>
              </View>
            )}
          />
        ) : (
          <Text style={[Typography.TAGLINE, { textAlign: 'center', color: Colors.WHITE }]}>You haven't received any notifications!</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  // Body
  bodyContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
  },
  notificationItem: {
    backgroundColor: Colors.DARK_GRAY,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  notificationText: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_NORMAL,
  },
});

export default Notifications;
