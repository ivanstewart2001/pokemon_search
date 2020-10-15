import React from 'react';
import {ScrollView, Text, Image, View, Dimensions, ImageBackground} from 'react-native';
import {ListItem, List} from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class SearchBody extends React.Component{
    render(){
        var pokemon = this.props.data;
        if(!pokemon){
            return <View />
        }
        return (
            <ImageBackground style={{width: 10}} style={styles.backgroundImage} source={{uri: "https://cdn.wallpapersafari.com/42/9/YDViGx.jpg"}}>
                <ScrollView style={{flex:1}}>
                    <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                    <View style={styles.viewStyle}>
                        <Image 
                            source={{uri: pokemon.sprites.front_default}}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.info}>
                        <ListItem itemDivider>
                            <Text style={{fontWeight: 'bold'}}>Size</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Weight - {pokemon.weight}kg</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Height - {pokemon.height/10}m</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{fontWeight: 'bold'}}>Abilities</Text>
                        </ListItem>
                        <List
                            dataArray={pokemon.abilities}
                            renderRow={(item)=>
                                <ListItem itemDivider>
                                    <Text>{item.ability.name}</Text>
                                </ListItem>
                            }
                        >
                        </List>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = {
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: height,
        width: width
    },
    header: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    img: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        flex:1,
        backgroundColor: 'white',
        opacity: 0.8
    }
}

export default SearchBody;