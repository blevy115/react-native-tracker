import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <AuthForm
      headerText = "Sign Up for Tracker"
      errorMessage = {state.errorMessage}
      submitText = "Sign Up"
      onSubmit = {signin}
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
  },
  link: {
    color:'blue'
  }
});

export default SignupScreen;
