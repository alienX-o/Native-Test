import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({
  value,
  onChangeText,
  placeholder,
  label,
  error,
  helperText,
  secureTextEntry = false,
  keyboardType = 'default',
  leftIcon,
  rightIcon,
  onRightIconPress,
  style,
  inputStyle,
  ...rest
}) => {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  const handleRightIconPress = () => {
    if (secureTextEntry) {
      setHidePassword(!hidePassword);
    }
    if (onRightIconPress) {
      onRightIconPress();
    }
  };

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.inputWrapper, error && {borderColor: 'red'}]}>
        {leftIcon && (
          <Icon name={leftIcon} size={20} color="#888" style={styles.icon} />
        )}
        <TextInput
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={hidePassword}
          keyboardType={keyboardType}
          placeholderTextColor="#888"
          {...rest}
        />
        {(rightIcon || secureTextEntry) && (
          <TouchableOpacity onPress={handleRightIconPress}>
            <Icon
              name={
                secureTextEntry ? (hidePassword ? 'eye-off' : 'eye') : rightIcon
              }
              size={20}
              color="#888"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>

      {helperText && !error && <Text style={styles.helper}>{helperText}</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: 'white',
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#282828',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: 'white',
  },
  icon: {
    marginHorizontal: 5,
  },
  helper: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
  },
});

export default Input;
