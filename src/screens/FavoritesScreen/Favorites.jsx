import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useSelector} from 'react-redux';
import List from 'src/components/List/List';
import ArticleItem from 'src/components/List/RenderItems/ArticleItem';
import commonTextStyle from 'src/styles/commonText.style';
import commonStyle from 'src/styles/commonStyle.style';

const Favorites = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isSignedIn, setIsSignIn] = useState(false);
  const {favorites} = useSelector(state => state.user);

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  useEffect(() => {
    (async () => {
      const isSigned = await GoogleSignin.isSignedIn();
      if (isSigned && !userInfo) {
        const currentUser = await GoogleSignin.getCurrentUser();
        setUserInfo(currentUser);
      }
      setIsSignIn(isSigned);
    })();
  });

  const handleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUserInfo(user);
    } catch (error) {
      console.log('-signIn- Error: ');
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
      }
    }
  };

  return (
    <View style={commonStyle.centerContainer}>
      {isSignedIn ? (
        <FavoritesDisplay userInfo={userInfo} favorites={favorites} />
      ) : (
        <SignInPromt onSignIn={handleSignIn} />
      )}
    </View>
  );
};

function FavoritesDisplay({userInfo, favorites}) {
  return (
    <View>
      <Text
        style={[
          commonTextStyle.centeredText(commonTextStyle.textL),
          {
            marginTop: 10,
            marginBottom: 30,
          },
        ]}>
        {userInfo.user.name} Welcome to your favorite articles
      </Text>
      <View style={{flex: 1}}>
        {favorites.length > 0 ? (
          <List RenderItem={ArticleItem} data={favorites} numColumns={2} />
        ) : (
          <View style={{marginTop: '50%'}}>
            <Text
              style={[
                commonTextStyle.centeredText(commonTextStyle.textM),
                {
                  marginTop: 10,
                },
              ]}>
              No Article Added To Favorites yet
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

function SignInPromt({onSignIn}) {
  return (
    <View style={{alignItems: 'center'}}>
      <Text
        style={[
          commonTextStyle.centeredText(commonTextStyle.textM),
          {
            marginBottom: 10,
          },
        ]}>
        Please signin to see your favorite articles
      </Text>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onSignIn}
      />
    </View>
  );
}

export default Favorites;
