import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    Dimensions,
    ToastAndroid,
    PixelRatio,
} from 'react-native'
const { width, height } = Dimensions.get('window');
import {mockData} from '../../../base/utils';
const global = mockData.global;
let mwidth = 140;
let mheight = 200;
const bgColor = global.titleBackgroundColor;
const top = 50;
let dataArray;
export default class MenuModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.show,
        }
        mwidth = this.props.width;
        mheight = this.props.height;
        dataArray = this.props.dataArray;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isVisible: nextProps.show });
    }

    closeModal() {
        this.setState({
            isVisible: false
        });
        this.props.closeModal(false);
    }

    render() {
        var menuItems = [];
        var icons = this.props.menuIcons;
        var texts = this.props.menuTexts;
        for (var i = 0; i < icons.length; i++) {
          menuItems.push(
            <TouchableOpacity key={i} activeOpacity={0.3} onPress={this.handlePopMenuItemClick} style={styles.itemView}>
                <Image style={styles.imgStyle} source={icons[i]} />
                <Text style={styles.textStyle}>{texts[i]}</Text>
            </TouchableOpacity>
          );
        }
        return (
            <View style={styles.container}>
                <Modal
                    transparent={true}
                    visible={this.state.isVisible}
                    animationType={'fade'}
                    onRequestClose={() => this.closeModal()}>
                    <TouchableOpacity style={styles.container} onPress={() => this.closeModal()}>
                        <View style={styles.modal}>
                            {menuItems}
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }

    handlePopMenuItemClick = () => {
      ToastAndroid.show("click item", ToastAndroid.SHORT);
      this.closeModal();
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    modal: {
        backgroundColor: bgColor,
        width: mwidth,
        height: mheight,
        position: 'absolute',
        left: width - mwidth - 10,
        top: top,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemView: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        width: mwidth,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        paddingBottom: 8,
    },
    textStyle: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 5,
    },
    imgStyle: {
        width: 30,
        height: 30,
    }
});
