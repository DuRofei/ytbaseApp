/**
 * Created by kangxiaojian on 2017/4/26.
 */
import React,{Component} from 'react';
import {
    Navigator,
    View,
    StyleSheet,
    Platform,
    DeviceEventEmitter,
    TouchableOpacity,
    AsyncStorage,
    BackAndroid,
    Linking,
    NativeModules,
    InteractionManager,
    Text,
    FlatList
} from 'react-native';
import {connectComponent,connectStore} from './base/utils';
import {PageList} from './base/components';

class HipacApp extends Component {
    constructor(props){
        super(props);
        this.pageListConfig = {
            data: [
                {text: '资质信息',onPress:()=>{},rightTemp:(<Text style={{color:'#666'}}>11111</Text>)},
                {text: '关于海拍客', onPress: ()=>{}},
                {text: '退出当前账号', onPress: ()=>{},}
            ]
        };
    }

   componentWillMount() {
   }
    render(){

        return (
            <View style={styles.container}>
                <PageList {...this.pageListConfig}/>
            </View>
        );
    }
}
export  default connectComponent(HipacApp)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop:20
    },
});