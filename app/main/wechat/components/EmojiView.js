import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  PixelRatio,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
  ViewPagerAndroid,
} from 'react-native';
import {mockData} from '../../../base/utils';
const { width } = Dimensions.get('window');
const global = mockData.global;
const smiley= mockData.smiley;

export default class EmojiView extends Component {
  render() {
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <View style={styles.pageStyle}><Page index={0} /></View>
        <View style={styles.pageStyle}><Page index={1} /></View>
        <View style={styles.pageStyle}><Page index={2} /></View>
      </ViewPagerAndroid>
    );
  }
}

class Page extends Component {
  render() {
    var page = [];
    for (var j = 0; j < 3; j++) {
      var row = [];
      for (var i = 0; i < 7; i++) {
        if (i == 6 && j == 2) {
          row.push(
            <View key={i} style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10,}}>
              <Image source={smiley[105]} style={styles.emojiDelIcon} />
            </View>
          );
        } else {
        row.push(
            <View key={i} style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10,}}>
              <Image source={smiley[i * 7 + j + this.props.index * 20]} style={styles.emojiIcon} />
            </View>
          );
        }
      }
      page.push(
        <View key={"row" + j} style={{flexDirection: 'row'}}>
          {row}
        </View>
      );
    }
    return (<View>{page}</View>);
  }
}

const styles = StyleSheet.create({
  viewPager: {
    width: width,
    height: global.emojiViewHeight,
    backgroundColor: '#F4F4F4',
  },
  pageStyle: {
    width: width,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  emojiIcon: {
    width: 30,
    height: 30,
  },
  emojiDelIcon: {
    width: 30,
    height: 24,
  }
});
