import React from 'react';
import {View,Text, ImageBackground} from 'react-native';
import {Button} from 'native-base';

var myBackground = require('../assets/landing.jpg');

class Landing extends React.Component{
	render(){
		return(
			<View style={{flex: 1, width: 422}}>
				<ImageBackground source={myBackground} style={{flex: 1, width: 422}}>
		          <View style={styles.viewStyle}>
		            <Text
		              style={styles.titleStyle}
		            >Welcome to PokeSearch</Text>
		            <Button
		              block={true}
		              style={styles.buttonStyle}
		              onPress={()=>this.props.switchScreen("search")}
		            >
		              <Text style={styles.buttonText}>Start Searching</Text>
		            </Button>
		          </View>
		      </ImageBackground>
			</View>
		)
	}
}

const styles = {
	viewStyle: {
	    flex: 1,
	    flexDirection: 'column',
	    justifyContent: 'center',
	    alignItems: 'center'
	  },
	  titleStyle: {
	    fontSize: 30,
	    color: 'blue',
	    alignItems: 'center'
	  },
	  buttonStyle: {
	    margin: 10
	  },
	  buttonText: {
	    color: 'white'
	  }
}

export default Landing;