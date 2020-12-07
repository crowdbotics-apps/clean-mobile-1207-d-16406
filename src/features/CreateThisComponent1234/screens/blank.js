import React, { Component } from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => <Text>{this.props.pets.name}</Text>
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  Text_1: {},
  Text_1: {},
  Text_1: {},
  Text_1: {},
  Text_1: {}
})

const mapStateToProps = state => {}
const mapDispatchToProps = dispatch => {}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)