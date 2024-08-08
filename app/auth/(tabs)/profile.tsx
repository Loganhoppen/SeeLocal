import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import EventPlans from '../Eventplans'; // Adjust the path as necessary

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Posts' | 'Tagged' | 'EventPlans'>('Posts');
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleEditPress = () => {
    setEditModalVisible(true);
  };

  const handleSettingsPress = () => {
    setSettingsModalVisible(true);
  };

  const handleLogout = () => {
    setSettingsModalVisible(false);
    navigation.navigate('Login'); // Ensure this matches your login route name
  };

  const settingsOptions = [
    { id: '1', title: 'Settings and privacy', icon: 'cog' },
    { id: '2', title: 'Payment settings', icon: 'credit-card' },
    { id: '3', title: 'Account settings', icon: 'user' },
    { id: '4', title: 'Feedback and support', icon: 'info-circle' },
    { id: '5', title: 'Log out', icon: 'sign-out', action: handleLogout },
    { id: '6', title: 'Saved', icon: 'bookmark' },
    { id: '7', title: 'QR code', icon: 'qrcode' },
    { id: '8', title: 'Accessibility', icon: 'wheelchair' },
    { id: '9', title: 'Translation settings', icon: 'globe' },
    { id: '10', title: 'Notification settings', icon: 'bell' },
    { id: '11', title: 'Confirmed bookings', icon: 'check-circle' },
  ];

  const renderSettingOption = ({ item }: { item: { id: string; title: string; icon: string; action?: () => void } }) => (
    <TouchableOpacity style={styles.option} onPress={item.action}>
      <Icon name={item.icon} size={20} color="#000" style={styles.optionIcon} />
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePictureContainer}>
          <Image source={{ uri: 'https://example.com/profile-picture.jpg' }} style={styles.profilePicture} />
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <Icon name="edit" size={15} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.name}>Logan</Text>
          <Text style={styles.username}>@logang</Text>
          <Text style={styles.bio}>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
          <View style={styles.followContainer}>
            <Text style={styles.followText}>1000000 Followers</Text>
            <Text style={styles.followText}>0 Following</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>
          <Icon name="bars" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setActiveTab('Posts')}>
          <Text style={[styles.tab, activeTab === 'Posts' && styles.activeTab]}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Tagged')}>
          <Text style={[styles.tab, activeTab === 'Tagged' && styles.activeTab]}>Tagged</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('EventPlans')}>
          <Text style={[styles.tab, activeTab === 'EventPlans' && styles.activeTab]}>Event plans</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'EventPlans' ? (
        <EventPlans />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No content available</Text>
        </View>
      )}
      {/* Edit Profile Modal */}
      <Modal
        visible={editModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalOption}>
              <Icon name="share-alt" size={20} color="#000" style={styles.modalOptionIcon} />
              <Text style={styles.modalOptionText}>Share profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Icon name="edit" size={20} color="#000" style={styles.modalOptionIcon} />
              <Text style={styles.modalOptionText}>Edit profile bio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Icon name="camera" size={20} color="#000" style={styles.modalOptionIcon} />
              <Text style={styles.modalOptionText}>Edit profile picture</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEditModalVisible(false)}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Settings Modal */}
      <Modal
        visible={settingsModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSettingsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={settingsOptions}
              renderItem={renderSettingOption}
              keyExtractor={(item) => item.id}
            />
            <TouchableOpacity onPress={() => setSettingsModalVisible(false)}>
              <Text style={styles.modalCancel}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  profilePictureContainer: {
    position: 'relative',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  editButtonText: {
    fontSize: 12,
    color: '#000',
  },
  headerText: {
    flex: 1,
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: 'gray',
  },
  bio: {
    marginVertical: 10,
    fontSize: 14,
  },
  followContainer: {
    flexDirection: 'row',
  },
  followText: {
    fontSize: 14,
    color: 'gray',
    marginRight: 20,
  },
  settingsButton: {
    padding: 10,
  },
  settingsButtonText: {
    fontSize: 24,
    color: '#000',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    fontSize: 16,
    padding: 10,
    color: 'gray',
  },
  activeTab: {
    fontWeight: 'bold',
    color: 'black',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  modalOption: {
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  modalOptionIcon: {
    marginRight: 10,
  },
  modalOptionText: {
    fontSize: 18,
    color: '#000',
  },
  modalCancel: {
    fontSize: 18,
    color: '#000',
    marginTop: 10,
  },
  option: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
    alignItems: 'center',
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#000',
  },
});

export default Profile;
