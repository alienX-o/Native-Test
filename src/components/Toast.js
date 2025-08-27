import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

const Toast = ({visible, message, type = 'info', duration = 30000, onHide}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(1)).current; // 1 = full width

  useEffect(() => {
    if (visible) {
      // Reset progress bar
      progressAnim.setValue(1);

      // Fade In
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // Animate progress bar shrink
      Animated.timing(progressAnim, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false,
      }).start();

      // Auto-hide after duration
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          if (onHide) onHide();
        });
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        {opacity: fadeAnim},
        type === 'success' && styles.success,
        type === 'error' && styles.error,
        type === 'warning' && styles.warning,
      ]}>
      <Text style={styles.toastText}>{message}</Text>

      {/* Progress bar */}
      <Animated.View
        style={[
          styles.progressLine,
          {
            transform: [
              {
                scaleX: progressAnim, // shrink from full to empty
              },
            ],
          },
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    width: '80%',
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  toastText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 6,
  },
  success: {
    backgroundColor: '#4caf50',
  },
  error: {
    backgroundColor: '#f44336',
  },
  warning: {
    backgroundColor: '#ff9800',
  },
  progressLine: {
    height: 3,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 2,
    // transform: [{scaleX: 1}], // default full width
  },
});

export default Toast;
