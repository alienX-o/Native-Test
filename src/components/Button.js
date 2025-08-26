import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

// Import popular icon sets
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// Map string -> icon family
const ICON_FAMILIES = {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Feather,
};

const Button = ({
  title,
  onPress,
  backgroundColor = '#007AFF',
  textColor = '#fff',
  borderRadius = 8,
  iconLeft,
  iconRight,
  iconColor = '#fff',
  iconSize = 20,
  iconFamily = 'Ionicons', // 👈 new prop
  disabled = false,
  loading = false,
  fullWidth = true,
  style,
  textStyle,
}) => {
  const IconComponent = ICON_FAMILIES[iconFamily] || Ionicons; // fallback

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: disabled ? '#ccc' : backgroundColor, borderRadius},
        fullWidth && {width: '100%'},
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <View style={styles.content}>
          {iconLeft && (
            <IconComponent
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={styles.icon}
            />
          )}
          <Text style={[styles.text, {color: textColor}, textStyle]}>
            {title}
          </Text>
          {iconRight && (
            <IconComponent
              name={iconRight}
              size={iconSize}
              color={iconColor}
              style={styles.icon}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default Button;
