import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Linking,
} from 'react-native';
import {useAppStore} from '../store/context';
import {launchImageLibrary} from 'react-native-image-picker';
import LayouImage from '../components/latout/LayouImage';

const Settings = () => {
  const {userData, updateUserProfile} = useAppStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(userData);

  const handleImagePick = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (!result.didCancel && result.assets?.[0]) {
      setEditedData({...editedData, image: result.assets[0].uri});
      if (!isEditing) {
        handleSave({...editedData, image: result.assets[0].uri});
      }
    }
  };

  const handleSave = async dataToSave => {
    const success = await updateUserProfile(dataToSave);
    if (success) {
      setIsEditing(false);
    } else {
      Alert.alert('Error', 'Failed to save profile');
    }
  };

  const toggleEdit = () => {
    if (isEditing) {
      setEditedData(userData); // Reset to original data if canceling
    }
    setIsEditing(!isEditing);
  };

  const seePrivacyPolicy = () => {
    Linking.openURL(
      'https://www.termsfeed.com/live/9d179efe-2092-4304-85c6-bef862da7249',
    );
  };

  return (
    <LayouImage>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Profile</Text>

        <ScrollView style={styles.content}>
          {/* Profile Image */}
          <View style={styles.imageContainer}>
            <Image
              source={
                editedData.image
                  ? {uri: editedData.image}
                  : require('../assets/icons/placeholder2.png')
              }
              style={styles.profileImage}
            />
            <TouchableOpacity
              style={styles.editImageButton}
              onPress={handleImagePick}>
              <Image
                source={require('../assets/icons/edit.png')}
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Profile Info */}
          <View style={styles.infoContainer}>
            {isEditing ? (
              <TextInput
                style={styles.nameInput}
                value={editedData.name}
                onChangeText={text =>
                  setEditedData({...editedData, name: text})
                }
                placeholder="Enter your name"
                placeholderTextColor="#666666"
              />
            ) : (
              <Text style={styles.name}>
                {userData.name || 'Add your name'}
              </Text>
            )}
            <Text style={styles.email}>{userData.email}</Text>
          </View>

          {/* Edit/Save Button */}
          <TouchableOpacity
            style={styles.editButton}
            onPress={isEditing ? () => handleSave(editedData) : toggleEdit}>
            <Text style={styles.editButtonText}>
              {isEditing ? 'Save' : 'Edit Profile'}
            </Text>
          </TouchableOpacity>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            {/* <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Developer Website</Text>
            <Image
              source={require('../assets/icons/arrow-right.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.menuItem}
              onPress={seePrivacyPolicy}>
              <Text style={styles.menuText}>Privacy Policy</Text>
              <Image
                source={require('../assets/icons/arrow-right.png')}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Terms of Use</Text>
            <Image
              source={require('../assets/icons/arrow-right.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity> */}
          </View>
        </ScrollView>
        <View style={{height: 100}} />
      </View>
    </LayouImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    backgroundColor: '#00181C',
    margin: 20,
    borderRadius: 20,
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: '50%',
  },
  editImageButton: {
    position: 'absolute',
    right: '20%',
    top: 0,
    backgroundColor: '#00AAB8',
    padding: 10,
    borderRadius: 20,
  },
  editIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    color: '#666666',
    fontSize: 16,
  },
  editContainer: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#00353C',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    color: '#FFFFFF',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#00AAB8',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00353C',
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  arrowIcon: {
    width: 42,
    height: 42,
    // tintColor: '#FFFFFF',
  },
  nameInput: {
    backgroundColor: '#00353C',
    borderRadius: 10,
    padding: 15,
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    width: '100%',
  },
  editButton: {
    backgroundColor: '#00AAB8',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Settings;
