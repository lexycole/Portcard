import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dotStyle: {
    backgroundColor: '#D9D9D9',
    width: 12,
    height: 6,
    borderRadius: 8,
    marginLeft: 4,
    marginRight: 4
  },
  activeDotStyle: {
    backgroundColor: '#CDFB51',
    width: 24,
    height: 6,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#242326',
  },
  wrapper: {
    flex: 1
  },
  slide1: {
    flex: 1,
    height: 0.25,
  },
  slide2: {
    flex: 1,
    height: 0.25,
  },
  slide3: {
    flex: 1,
  },
  slide4: {
    flex: 1,
    height: 0.25,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: '80%',
    height: '60%',
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    paddingHorizontal: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    padding: 10,
    marginTop: 0,
    marginBottom: 30,
    backgroundColor: '#CDFB51',
    width: '90%',
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center',
  },
  greenText: {
    color: '#CDFB51',
  },
})
export default styles;