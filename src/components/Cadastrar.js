import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase";


  

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const auth = getAuth(app);

  const salvar = () => {
   
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        SignedIn()
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "  " + errorMessage)
        // ..
      });
  };

  const SignedIn = () => {
    navigation.navigate('Contato');
  };

  const navigation = useNavigation();

  const login = () => {
    navigation.navigate("Login");
  };

  return (
    <View>
      <View style={styles.cabecalho}>
        <TouchableOpacity style={styles.icon}>
          <Icon
            name="arrow-left"
            type="font-awesome"
            size={30}
            color={"white"}
            onPress={login}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Usuário</Text>
      </View>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <Text style={styles.title}>CPF</Text>
          <TextInput
            style={styles.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
          />
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={() => salvar()}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: "#006db2",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    flexDirection: "row",
  },

  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },

  icon: {
    marginRight: 10,
    marginTop: 20,
    right: 120,
  },

  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 50,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#006db2",
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
});

export default Cadastro;
