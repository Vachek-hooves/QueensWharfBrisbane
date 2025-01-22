import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import {useAppStore} from '../store/context';
import {launchImageLibrary} from 'react-native-image-picker';
import MapView, {Marker} from 'react-native-maps';
import LayouImage from '../components/latout/LayouImage';

const CreatePlaceForm = ({route, navigation}) => {
  const {category} = route.params;
  const {addPlace} = useAppStore();
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    placeName: '',
    location: '',
    description: '',
    workingHours: '',
    conveniences: [],
  });
  const [newConvenience, setNewConvenience] = useState('');
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [workingHours, setWorkingHours] = useState({
    from: '',
    to: '',
  });
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [timePickerType, setTimePickerType] = useState('from');
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form whenever data changes
  useEffect(() => {
    const validateForm = () => {
      const isValid =
        image !== null &&
        formData.placeName.trim() !== '' &&
        formData.location !== '' &&
        formData.description.trim() !== '' &&
        workingHours.from !== '' &&
        workingHours.to !== '' &&
        formData.conveniences.length >= 0;

      setIsFormValid(isValid);
    };

    validateForm();
  }, [image, formData, workingHours]);

  const handleAddConvenience = () => {
    if (newConvenience.trim()) {
      setFormData({
        ...formData,
        conveniences: [...formData.conveniences, newConvenience.trim()],
      });
      setNewConvenience('');
    }
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;
    // console.log('form is valid');

    const newPlace = {
      id: Date.now().toString(),
      image,
      category,
      name: formData.placeName,
      location: formData.location,
      description: formData.description,
      workingHours: `${workingHours.from} - ${workingHours.to}`,
      conveniences: formData.conveniences,
    };
    // console.log(newPlace);
    navigation.navigate('NavigationMenu', {screen: 'Place'});
    await addPlace(newPlace);
  };

  const handleImagePick = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (!result.didCancel && result.assets?.[0]) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <LayouImage>
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
            <TouchableOpacity
              style={styles.imagePickerButton}
              onPress={handleImagePick}>
              <View style={styles.imagePlaceholder}>
                {image ? (
                  <Image source={{uri: image}} style={styles.selectedImage} />
                ) : (
                  <Image
                    source={require('../assets/icons/camera.png')}
                    style={styles.cameraIcon}
                  />
                )}
              </View>
            </TouchableOpacity>

            {/* Form Fields */}
            <TextInput
              style={styles.input}
              placeholder="Place Name"
              placeholderTextColor="#666666"
              value={formData.placeName}
              onChangeText={text => setFormData({...formData, placeName: text})}
            />

            <TouchableOpacity
              style={styles.input}
              onPress={() => setIsMapVisible(true)}>
              <Text
                style={[
                  styles.inputText,
                  !formData.location && styles.placeholder,
                ]}>
                {formData.location || 'Location'}
              </Text>
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder="Description"
              placeholderTextColor="#666666"
              value={formData.description}
              onChangeText={text =>
                setFormData({...formData, description: text})
              }
              multiline
            />

            <View style={styles.workingHoursContainer}>
              <Text style={styles.sectionTitle}>Working Hours</Text>
              <View style={styles.hoursRow}>
                <TouchableOpacity
                  style={[styles.input, styles.timeInput]}
                  onPress={() => {
                    setTimePickerType('from');
                    setShowTimePicker(true);
                  }}>
                  <Text
                    style={[
                      styles.inputText,
                      !workingHours.from && styles.placeholder,
                    ]}>
                    {workingHours.from || 'From'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.input, styles.timeInput]}
                  onPress={() => {
                    setTimePickerType('to');
                    setShowTimePicker(true);
                  }}>
                  <Text
                    style={[
                      styles.inputText,
                      !workingHours.to && styles.placeholder,
                    ]}>
                    {workingHours.to || 'To'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Conveniences Section */}
            <View style={styles.conveniencesSection}>
              <Text style={styles.sectionTitle}>Conveniences</Text>
              {formData.conveniences.map((convenience, index) => (
                <View key={index} style={styles.convenienceItem}>
                  <Text style={styles.convenienceText}>{convenience}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      const newConveniences = [...formData.conveniences];
                      newConveniences.splice(index, 1);
                      setFormData({...formData, conveniences: newConveniences});
                    }}>
                    <Text style={styles.removeConvenienceText}>×</Text>
                  </TouchableOpacity>
                </View>
              ))}
              <View style={styles.convenienceContainer}>
                <TextInput
                  style={[styles.input, styles.convenienceInput]}
                  placeholder="Add convenience"
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
          </View>
        </ScrollView>

        {/* Submit Button */}
        <TouchableOpacity
          style={[styles.doneButton, isFormValid && styles.doneButtonActive]}
          onPress={handleSubmit}
          disabled={!isFormValid}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>

        <Modal
          visible={isMapVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setIsMapVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: -27.47,
                  longitude: 153.02,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                onPress={e => setSelectedLocation(e.nativeEvent.coordinate)}>
                {selectedLocation && <Marker coordinate={selectedLocation} />}
              </MapView>
              <TouchableOpacity
                style={styles.confirmLocationButton}
                onPress={() => {
                  if (selectedLocation) {
                    setFormData({
                      ...formData,
                      location: `${selectedLocation.latitude}, ${selectedLocation.longitude}`,
                    });
                    setIsMapVisible(false);
                  }
                }}>
                <Text style={styles.confirmLocationText}>Confirm Location</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          visible={showTimePicker}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowTimePicker(false)}>
          <View style={styles.timePickerOverlay}>
            <View style={styles.timePickerContainer}>
              <Text style={styles.timePickerTitle}>
                Select {timePickerType === 'from' ? 'Opening' : 'Closing'} Time
              </Text>

              <View style={styles.timePickerContent}>
                <ScrollView style={styles.timeColumn}>
                  {Array.from({length: 24}, (_, i) => {
                    const hour = i.toString().padStart(2, '0');
                    return (
                      <TouchableOpacity
                        key={hour}
                        style={styles.timeOption}
                        onPress={() => {
                          const newTime = `${hour}:00`;
                          setWorkingHours(prev => ({
                            ...prev,
                            [timePickerType]: newTime,
                          }));
                          setShowTimePicker(false);
                        }}>
                        <Text style={styles.timeText}>{hour}:00</Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowTimePicker(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </LayouImage>
  );
};

export default CreatePlaceForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000',
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
  doneButtonActive: {
    backgroundColor: '#00AAB8',
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapModal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  mapContainer: {
    height: '100%',
    backgroundColor: '#00181C',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  map: {
    flex: 1,
  },
  confirmLocationButton: {
    backgroundColor: '#00AAB8',
    padding: 15,
    margin: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  confirmLocationText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  workingHoursContainer: {
    marginBottom: 15,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeInput: {
    flex: 0.48,
  },
  conveniencesSection: {
    marginBottom: 15,
  },
  convenienceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00353C',
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
  },
  convenienceText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  removeConvenienceText: {
    color: '#666666',
    fontSize: 24,
  },
  selectedImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  timePickerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timePickerContainer: {
    backgroundColor: '#00181C',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    maxHeight: '70%',
  },
  timePickerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  timePickerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    maxHeight: 200,
  },
  timeColumn: {
    maxHeight: 200,
  },
  timeOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#00353C',
    borderRadius: 25,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  placeholder: {
    color: '#666666',
  },
});
