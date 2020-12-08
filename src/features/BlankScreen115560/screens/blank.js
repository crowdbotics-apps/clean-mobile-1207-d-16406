import { connect } from "react-redux"
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
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = { CheckBox_4: this.props.petsCheckBox4.is_stray }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <CheckBox
        title={this.props.petsCheckBox4.stray_info}
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({ View_1: {}, Text_3: {}, CheckBox_4: {} })

const mapStateToProps = state => {
  return {
    petsCheckBox4: state.apiReducer.pets.filter(
      petsCheckBox4 => petsCheckBox4.is_stray == true
    )
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
