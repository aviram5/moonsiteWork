import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useSelector} from 'react-redux';
import List from 'src/components/List/List';
import ArticleItem from 'src/components/List/RenderItems/ArticleItem';

const Favorites = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isSignedIn, setIsSignIn] = useState(false);
  const userState = useSelector(state => state.user);

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  useEffect(() => {
    (async () => {
      const isSigned = await GoogleSignin.isSignedIn();
      if (isSigned) {
        const currentUser = await GoogleSignin.getCurrentUser();
        setUserInfo(currentUser);
      }
      setIsSignIn(isSigned);
    })();
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      console.log('USER: ', user);
      setUserInfo(user);
    } catch (error) {
      console.log('-signIn- Error: ');
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        console.log('other error');
      }
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Favorites</Text>
      {isSignedIn ? (
        <View>
          <Text>{userInfo.user.name} Welcome to your favorites articles</Text>
          <View style={{flex: 1}}>
            <List
              RenderItem={ArticleItem}
              data={userState.favorites}
              numColumns={2}
            />
          </View>
        </View>
      ) : (
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
          // disabled={this.state.isSigninInProgress}
        />
      )}
    </View>
  );
};

export default Favorites;
