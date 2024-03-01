import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Avatar, Icon, } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';






const Contato = () => {

    const navigation = useNavigation();


    const novoContato = () => {
        navigation.navigate('CadastroContato');
    }

    const editarContato = (contato) => {
        
        navigation.navigate('EditarContato', contato);

    }

    const list = [
        {
            name: 'Eduardo Silva',
            avatar_url: 'https://cdn-icons-png.flaticon.com/128/711/711769.png',
            phone: '81-99999999'
        },
        {
            name: 'Marcus Vinicius',
            avatar_url: 'https://cdn-icons-png.flaticon.com/128/711/711769.png',
            phone: '81-88888888'
        },
        {
            name: 'Carlos Gabriel',
            avatar_url: 'https://cdn-icons-png.flaticon.com/128/711/711769.png',
            phone: '81-88888888'
        },

    ]


    return (

        <View>
            <View style={styles.cabecalho}>
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
                                </ListItem.Content>
                            </ListItem>
                        </TouchableOpacity>
                    ))
                }
            </View>
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

