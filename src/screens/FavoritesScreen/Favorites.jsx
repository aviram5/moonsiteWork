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
  const {favorites} = useSelector(state => state.user);

  useEffect(() => {
    console.log(favorites);
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

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setIsSignIn(false);
      setUserInfo(null); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

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
      {isSignedIn ? (
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '800',
              // alignSelf: 'center',
              textAlign: 'center',
              marginTop: 10,
              marginBottom: 30,
            }}>
            {userInfo.user.name} Welcome to your favorite articles
          </Text>
          <View style={{flex: 1}}>
            {favorites.length > 0 ? (
              <List RenderItem={ArticleItem} data={favorites} numColumns={2} />
            ) : (
              <View style={{marginTop: '50%'}}>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: '800',
                    // alignSelf: 'center',
                    textAlign: 'center',
                  }}>
                  No Article Added To Favorites yet
                </Text>
              </View>
            )}
            <Button title="signOut" onPress={signOut} />
          </View>
        </View>
      ) : (
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 20,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            Please signin to see your favorite articles
          </Text>
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
            // disabled={this.state.isSigninInProgress}
          />
        </View>
      )}
    </View>
  );
};

export default Favorites;
