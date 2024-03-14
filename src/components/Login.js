import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Input } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import NotificationLogin from "./NotificationLogin";

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [notification, setNotification] = React.useState(null);

  const navigation = useNavigation();

  const login = () =>{
    setNotification(null)
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setNotification({ message: 'Login bem sucedido', color: 'green' });


        setTimeout(() => navigation.navigate("Contato"), 3000); 
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setNotification({ message: 'Erro ao fazer login', color: 'red' });

      
      });

     
  }

  

 

  const cadastrar = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={{
          uri: "https://cdn-icons-png.flaticon.com/128/711/711769.png",
        }}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Login" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha}/>
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.signupButton]}
        onPress={cadastrar}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      {notification && <NotificationLogin message={notification.message} color={notification.color} />}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupButton: {
    backgroundColor: "#28a745",
  },
});

export default LoginScreen;
