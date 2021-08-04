import { StyleSheet } from 'react-native';

const loginDesign = StyleSheet.create(
    {
        mainView: {
          flex:1,
          backgroundColor: 'ghostwhite',
          alignItems: 'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#fff',
          justifyContent: 'center',
          
        },

        textView: {
            fontWeight: 'bold',
            fontSize: 30,
            paddingTop: 15,
        },

        txtInputView: {
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
            height: 35,
            color: 'black',
            minWidth:200,
            margin: 2
        },

        buttonView: {
            margin: 2,
            color: 'teal',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#fff',

        }
    }
)

export default loginDesign;
