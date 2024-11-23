import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  main: {
    flex: 1,
    padding: 16,
  },
  welcomeCard: {
    marginBottom: 16,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
 welcomeText: {
    fontSize: 16,
    color: '#4B5563',
  },
  activitiesSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B5563',
    marginBottom: 8,
  },
  activityCard: {
    marginBottom: 16,
  },
  activityImage: {
    height: 120,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  activityDescription: {
    color: '#6B7280',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#3182CE',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  authSection: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#4B5563',
  },
  profileImage: {
    resizeMode: 'contain',
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 50,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor:'#3182CE',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  },
  toggleText: {
    marginRight: 10,
    fontSize: 16,
  },
  activityImage2: {
    height: 64,
    width:64,
    alignSelf: 'center',
  },
  activityImage3: {
    height: 512,
    width:512,
    alignSelf: 'center',
  },
titleTitle: {
alignSelf: 'center',
fontSize:32,
},
subtitleTitle: {
alignSelf: 'center',
fontSize: 20,
},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileInfo: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  container1: {
    flex: 1,
  padding:24,
    backgroundColor: '#F7FAFC',
  },
  
  profileText: {
    fontSize: 18,
    color: '#4A5568',
    borderBottomWidth: 1,
    borderBottomColor: '#A0AEC0',
    marginBottom: 10,
    padding: 8,
  },
  statsTextContainer: {
    flex: 1,
    textColor: 'black'
  },
  healthIcon: {
    height: 64,
    width: 64,
    marginLeft: 8,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: '#3182CE',
  },
  button1: {
    backgroundColor: '#3182CE',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
});
export default styles;