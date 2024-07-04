import React,{ useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { ListItem, Avatar, Icon, } from 'react-native-elements';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ApiContato from '../Api/ApiContato';
import app from "../../firebase";
import { getAuth } from "firebase/auth";
import NotificationLogin from "./NotificationLogin";







const Contato = () => {
    const navigation = useNavigation();
    const [list, setList] = useState([]);
    const [notification, setNotification] = React.useState(null);


    const novoContato = () => {
        navigation.navigate('CadastroContato', {fetchData});
    }

    const editarContato = (contato) => {
        
        navigation.navigate('EditarContato', contato);

    }


    const fetchData = () => {
        ApiContato.getContato()
            .then(response => {
                console.log(response.status);
                setList(response.data);
            })
            .catch(error => {
                console.warn(error);
            });
    };


    const handleLogout = () => {

        const auth = getAuth(app);

        auth.signOut()
          .then(() => {
            setNotification({ message: 'Logout realizado com sucesso!', color: 'green' });
            setTimeout(() => navigation.navigate("Login"), 3000); 

          })
          .catch(error => {
            console.error('Erro ao fazer logout:', error);
          });
      }

    useEffect(() => {
        fetchData();
    }, []);


    return (

        <View>
            <View style={styles.cabecalho}>
                <TouchableOpacity style={styles.icon}>
                    <Icon name="logout" type='material' size={30} color={'white'}
                        onPress={handleLogout}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>Lista de Contatos</Text>
                <TouchableOpacity style={styles.icon}>
                    <Icon name="plus" type='font-awesome' size={30} color={'white'}
                        onPress={novoContato}
                    />
                </TouchableOpacity>
                
            </View>
            <View>
                {
                    list.map((l, i) => (
                        <TouchableOpacity key={i} onPress={() => editarContato(l)}>
                            <ListItem bottomDivider>
                                <Avatar source={{ uri: l.avatar_url }} />
                                <ListItem.Content>
                                    <ListItem.Title>{l.name}</ListItem.Title>
                                    <ListItem.Subtitle>{l.phone}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        </TouchableOpacity>
                    ))
                }
            </View>
            {notification && <NotificationLogin message={notification.message} color={notification.color} />}
        </View>


    );
}


const styles = StyleSheet.create({
    icon: {

        marginRight: 10,
        marginTop: 20

    },
    cabecalho: {
        backgroundColor: '#006db2',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    }
});

export default Contato;

