import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

const Todo = ({todo}) => {
    return (
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    todo:{
flexDirection:'row',
padding:15,
borderRadius:5,
borderWidth:1,
borderColor:'#eee',
marginBottom:10
    }
})
export default Todo
