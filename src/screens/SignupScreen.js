import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <NavigationEvents
      onWillBlur={clearErrorMessage}
    />
    <AuthForm
      headerText = "Sign Up for Tracker"
      errorMessage = {state.errorMessage}
      submitText = "Sign Up"
      onSubmit = {signup}
    />
    <NavLink
      navText="Already have an Account?  Sign in instead."
      routeName="Signin"
    />
  </View>
)};

SignupScreen.navigationOptions = {
    headerShown:false
};


const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    marginBottom:180
  }
});

export default SignupScreen;
