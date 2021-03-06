import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <NavigationEvents
      onWillBlur={clearErrorMessage}
    />
    <AuthForm
      headerText = "Sign In to Tracker"
      errorMessage = {state.errorMessage}
      submitText = "Sign In"
      onSubmit = {signin}
    />
    <NavLink
      navText="Don't have an account? Sign Up instead"
      routeName="Signup"
    />
  </View>
)};

SigninScreen.navigationOptions = {
    headerShown:false
};


const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    marginBottom:180
  }
});

export default SigninScreen;
