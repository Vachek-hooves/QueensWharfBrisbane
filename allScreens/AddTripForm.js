import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Calendar from 'react-native-calendar';

const AddTripForm = ({route, navigation}) => {
  const {tripType} = route.params;
  const [image, setImage] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    budget: '',
    date: '',
    time: '',
  });
  const [reminder, setReminder] = useState(false);

  const handleImagePick = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (!result.didCancel && result.assets?.[0]) {
      setImage(result.assets[0].uri);
    }
  };

  // Time picker modal component
  const TimePickerModal = () => (
    <Modal
      visible={showTimePicker}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setShowTimePicker(false)}>
      <View style={styles.timePickerOverlay}>
        <View style={styles.timePickerContainer}>
          <Text style={styles.timePickerTitle}>Select Time</Text>
          <ScrollView style={styles.timeColumn}>
            {Array.from({length: 24}, (_, i) => {
              const hour = i.toString().padStart(2, '0');
              return (
                <TouchableOpacity
                  key={hour}
                  style={styles.timeOption}
                  onPress={() => {
                    setFormData({...formData, time: `${hour}:00`});
                    setShowTimePicker(false);
                  }}>
                  <Text style={styles.timeText}>{hour}:00</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setShowTimePicker(false)}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

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

      <View style={styles.content}>
        {/* Image Picker */}
        <TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePick}>
          {image ? (
            <Image source={{uri: image}} style={styles.selectedImage} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Image
                source={require('../assets/icons/camera.png')}
                style={styles.cameraIcon}
              />
            </View>
          )}
        </TouchableOpacity>

        {/* Form Fields */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Name of the trip"
            placeholderTextColor="#666666"
            value={formData.name}
            onChangeText={text => setFormData({...formData, name: text})}
          />

          <TextInput
            style={styles.input}
            placeholder="Place"
            placeholderTextColor="#666666"
            value={formData.place}
            onChangeText={text => setFormData({...formData, place: text})}
          />

          <TextInput
            style={styles.input}
            placeholder="Budget"
            placeholderTextColor="#666666"
            keyboardType="numeric"
            value={formData.budget}
            onChangeText={text => setFormData({...formData, budget: text})}
          />

          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowCalendar(true)}>
            <View style={styles.inputWithIcon}>
              {/* <Image
                source={require('../assets/icons/calendar.png')}
                style={styles.inputIcon}
              /> */}
              <Text style={[styles.inputText, !formData.date && styles.placeholder]}>
                {formData.date || 'Date'}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowTimePicker(true)}>
            <View style={styles.inputWithIcon}>
              {/* <Image
                source={require('../assets/icons/clock.png')}
                style={styles.inputIcon}
              /> */}
              <Text style={[styles.inputText, !formData.time && styles.placeholder]}>
                {formData.time || 'Time'}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.reminderContainer}>
            <Text style={styles.reminderText}>Reminder</Text>
            <TouchableOpacity
              style={[styles.switch, reminder && styles.switchActive]}
              onPress={() => setReminder(!reminder)}>
              <View style={[styles.switchKnob, reminder && styles.switchKnobActive]} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Calendar Modal */}
      <Modal
        visible={showCalendar}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCalendar(false)}>
        <View style={styles.calendarModal}>
          <Calendar
            onDateSelect={date => {
              setFormData({...formData, date: date.format('YYYY-MM-DD')});
              setShowCalendar(false);
            }}
            style={styles.calendar}
          />
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setShowCalendar(false)}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Time Picker Modal */}
      <TimePickerModal />

      {/* Done Button */}
      <TouchableOpacity
        style={[
          styles.doneButton,
          formData.name && formData.place && formData.date
            ? styles.doneButtonActive
            : styles.doneButtonDisabled,
        ]}
        disabled={!formData.name || !formData.place || !formData.date}
        onPress={() => {
          // Handle form submission
          navigation.navigate('Trips');
        }}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    marginBottom: 20,
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
    flex: 1,
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imagePickerButton: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#00181C',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#666666',
  },
  selectedImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraIcon: {
    width: 40,
    height: 40,
    tintColor: '#666666',
  },
  form: {
    backgroundColor: '#00181C',
    borderRadius: 20,
    padding: 20,
  },
  input: {
    backgroundColor: '#00353C',
    borderRadius: 25,
    padding: 15,
    marginBottom: 10,
    color: '#FFFFFF',
    fontSize: 16,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#00AAB8',
  },
  inputText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  placeholder: {
    color: '#666666',
  },
  reminderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00353C',
    borderRadius: 25,
    padding: 15,
    marginTop: 10,
  },
  reminderText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  switch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#666666',
    padding: 2,
  },
  switchActive: {
    backgroundColor: '#00AAB8',
  },
  switchKnob: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
  },
  switchKnobActive: {
    transform: [{translateX: 20}],
  },
  calendarModal: {
    flex: 1,
    backgroundColor: '#00181C',
    marginTop: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  calendar: {
    backgroundColor: '#00353C',
    borderRadius: 20,
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
  timeColumn: {
    maxHeight: 200,
  },
  timeOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#00353C',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  doneButton: {
    marginHorizontal: 20,
    marginBottom: 40,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  doneButtonActive: {
    backgroundColor: '#00AAB8',
  },
  doneButtonDisabled: {
    backgroundColor: '#666666',
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTripForm;