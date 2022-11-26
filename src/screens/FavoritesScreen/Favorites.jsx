import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Favorites = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '942395901601-rc6es9j7nj42dvg9ja4ihk96a1odfem1.apps.googleuser',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUserInfo(user);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Favorites</Text>
      {/* <GoogleSigninButton
        style={{width: 192, height: 48}}
        // size={GoogleSigninButton.Size.Wide}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        // disabled={this.state.isSigninInProgress}
      /> */}
      <Button title="Press" onPress={signIn} />
    </View>
  );
};

export default Favorites;
