// @flow

import * as React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import Dimensions from '../Dimensions';
import Colors from '../Colors';
import StyleSheet from '../stylesheet';

type Props = {|
  +childrenTop: React.Node,
  +childrenBottom: React.Node,
  +backgroundColor: string,
|};

function SplitScreen(props: Props) {
  const styleSheet = createStyleSheet(props.backgroundColor);

  return (
    <KeyboardAvoidingView
      style={styleSheet.wrapper}
      behavior="position"
      contentContainerStyle={styleSheet.wrapper} // the style of the content container(View) when behavior is 'position'
    >
      <View style={styleSheet.topArea}>
        <SafeAreaView style={styleSheet.safeAreaView}>
          {props.childrenTop}
        </SafeAreaView>
      </View>
      <SafeAreaView style={styleSheet.safeAreaView}>
        {props.childrenBottom}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

SplitScreen.defaultProps = {
  backgroundColor: Colors.brandPrimary,
};

export default SplitScreen;

function createStyleSheet(backgroundColor: string) {
  const {width, height} = Dimensions.get();
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    safeAreaView: {
      paddingHorizontal: 10,
    },
    topArea: {
      height: height * 0.5, // 50% of the screen
      width,
      backgroundColor,
      shadowColor: Colors.black,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 1,
    },
  });
}
