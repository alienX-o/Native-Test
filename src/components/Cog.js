import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cog = ({iconName}) => {
  const [menuShow, setMenuShow] = useState(false);

  const handlePress = () => {
    setMenuShow(prev => !prev);
  };

  const menuItems = ['Settings', 'Profile', 'Logout'];

  return (
    <View style={styles.container}>
      {/* Cog Button */}
      <TouchableOpacity style={styles.iconArea} onPress={handlePress}>
        <Ionicons name={iconName} size={28} style={styles.icon} />
      </TouchableOpacity>

      {/* Tooltip Menu */}
      {menuShow && (
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              style={({pressed}) => [
                styles.menuItem,
                pressed && {backgroundColor: '#f2f2f2'},
              ]}
              onPress={() => {
                // console.log(item);
                // setMenuShow(false);
              }}>
              <Text style={styles.menuText}>{item}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default Cog;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'flex-end', // menu aligned to right of cog
    margin: 20,
  },
  iconArea: {
    padding: 8,
    borderRadius: 20,
    // backgroundColor: '#444',
  },
  icon: {
    color: 'white',
  },
  menuContainer: {
    position: 'absolute',
    top: 35, // below the cog
    right: 30,
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingVertical: 5,
    minWidth: 120,
  },
  menuItem: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: 16,
    color: 'black',
  },
});
