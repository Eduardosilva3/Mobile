import { View } from 'react-native';
import {   ListItem,Avatar,  } from 'react-native-elements';



const Contato = () => {

    const list = [
        {
          name: 'Eduardo Silva',
          avatar_url: 'https://cdn-icons-png.flaticon.com/128/711/711769.png',
          phone: '81-99999999'
        },
        {
          name: 'Henio Batalha',
          avatar_url: 'https://cdn-icons-png.flaticon.com/128/711/711769.png',
          phone: '81-88888888'
        },
       
      ]
      
      
    return (
        <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.phone}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>
    );
  }

  export default  Contato;