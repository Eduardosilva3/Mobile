import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import  Contato  from "../Primeira-Atividade/Contato.js"



// Standard Avatar

const AppStack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer >

      <AppStack.Navigator initialRouteName="Login">
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Cadastrar" component={Cadastro} />
        <AppStack.Screen name="Contato" component={Contato} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View>
        <Avatar
          rounded
          source={{
            uri:
              'https://cdn-icons-png.flaticon.com/128/711/711769.png',
          }}
        />

      </View>
      <View>
        <Input
          placeholder="Login"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          style={styles}
          onChangeText={value => this.setState({ comment: value })}
        />
        <Input placeholder="Password" secureTextEntry={true}
          leftIcon={{ type: 'font-awesome', name: 'key' }} />
      </View>
      <View>
        <Button
          buttonStyle={
            styleButton.buttonStyle
          }
          titleStyle={
            styleButton.styleTitle
          }
          title="Entrar"
          type="outline"
          onPress={() => navigation.navigate('Contato')}
        />
        <Button
          buttonStyle={
            styleButton.buttonStyle
          }
          titleStyle={
            styleButton.styleTitle
          }
          title="Cadastrar"
          type="outline"
          onPress={() => navigation.navigate('Cadastrar')}
        />
      </View>
    </View>
  );
};

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const styleButton = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#00614c',
    padding: '0.7rem',
    margin: '1rem',
    width: "12rem"
  },
  styleTitle: {
    color: 'white',
    fontWeight: 'bold'
  }
})



const Cadastro = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View>
        <Avatar
          rounded
          source={{
            uri:
              'https://cdn-icons-png.flaticon.com/128/711/711769.png',
          }}
        />

      </View>
      <View>
        <Input
          placeholder="Nome"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          style={styles}
          onChangeText={value => this.setState({ comment: value })}
        />
        <Input
          placeholder="CPF"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          style={styles}
          onChangeText={value => this.setState({ comment: value })}
        />
        <Input
          placeholder="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          style={styles}
          onChangeText={value => this.setState({ comment: value })}
        />
        <Input placeholder="Password" secureTextEntry={true}
          leftIcon={{ type: 'font-awesome', name: 'key' }} />
      </View>
      <View>
        <Button
          buttonStyle={
            styleButton.buttonStyle
          }
          titleStyle={
            styleButton.styleTitle
          }
          title="Cadastrar"
          type="outline"
        />
      </View>
    </View>
  );
};




