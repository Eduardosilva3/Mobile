import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationLogin = ({ message, color }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Exibir a notificação por 3 segundos

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    padding: 10,
    borderRadius: 5,
  },
  message: {
    color: 'white',
    fontSize: 16,
  },
});

export default NotificationLogin;
