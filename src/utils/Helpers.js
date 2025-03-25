import { CommonActions } from '@react-navigation/native';

const resetAndNavigate = (navigation, screenName, params = {}) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: screenName, params }],
    })
  );
};

export default resetAndNavigate;
