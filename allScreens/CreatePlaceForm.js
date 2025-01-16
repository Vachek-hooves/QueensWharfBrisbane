import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {useAppStore} from '../store/context';

const CreatePlaceForm = ({route, navigation}) => {
  const {category} = route.params;
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    placeName: '',
    location: '',
    description: '',
    workingHours: '',
    conveniences: [],
  });
  const [newConvenience, setNewConvenience] = useState('');

  const handleAddConvenience = () => {
    if (newConvenience.trim()) {
      setFormData({
        ...formData,
        conveniences: [...formData.conveniences, newConvenience.trim()],
      });
      setNewConvenience('');
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Trip</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.formContainer}>
          {/* Image Picker */}
          <TouchableOpacity style={styles.imagePickerButton}>
            <View style={styles.imagePlaceholder}>
              <Image
                source={require('../assets/icons/camera.png')}
                style={styles.cameraIcon}
              />
            </View>
          </TouchableOpacity>

          {/* Form Fields */}
          <TextInput
            style={styles.input}
            placeholder="Place Name"
            placeholderTextColor="#666666"
            value={formData.placeName}
            onChangeText={(text) => setFormData({...formData, placeName: text})}
          />

          <TextInput
            style={styles.input}
            placeholder="Location"
            placeholderTextColor="#666666"
            value={formData.location}
            onChangeText={(text) => setFormData({...formData, location: text})}
          />

          <TextInput
            style={styles.input}
            placeholder="Description"
            placeholderTextColor="#666666"
            value={formData.description}
            onChangeText={(text) => setFormData({...formData, description: text})}
            multiline
          />

          <TextInput
            style={styles.input}
            placeholder="Working hours"
            placeholderTextColor="#666666"
            value={formData.workingHours}
            onChangeText={(text) => setFormData({...formData, workingHours: text})}
          />

          {/* Conveniences Section */}
          <Text style={styles.sectionTitle}>Conveniences</Text>
          <View style={styles.convenienceContainer}>
            <TextInput
              style={[styles.input, styles.convenienceInput]}
              placeholder="Title"
              placeholderTextColor="#666666"
              value={newConvenience}
              onChangeText={setNewConvenience}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddConvenience}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <TouchableOpacity style={styles.doneButton} onPress={handleSubmit}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePlaceForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backIcon: {
    width: 30,
    height: 30,
    tintColor: '#00AAB8',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: '#00181C',
    margin: 20,
    borderRadius: 20,
    padding: 20,
  },
  imagePickerButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  cameraIcon: {
    width: 70,
    height: 70,
    tintColor: '#666666',
  },
  input: {
    backgroundColor: '#00353C',
    borderRadius: 25,
    padding: 15,
    marginBottom: 15,
    color: '#FFFFFF',
    fontSize: 16,
  },
  sectionTitle: {
    color: '#666666',
    fontSize: 16,
    marginBottom: 10,
  },
  convenienceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  convenienceInput: {
    flex: 1,
    marginRight: 10,
    marginBottom: 0,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#666666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  doneButton: {
    backgroundColor: '#666666',
    marginHorizontal: 20,
    marginBottom: 40,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
