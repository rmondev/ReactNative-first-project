import { Text, StyleSheet, View, Pressable } from 'react-native'
import { Link } from 'expo-router';

type dayListItemProps = {
    day: number
}

const DayListItem = (props: dayListItemProps) => {
  return (

    <Link href={`/(days)/day${props.day}`} asChild>
        <Pressable style={styles.box}>
            <Text style={styles.text}>
                {props.day}
            </Text>
           
        </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({

    box:{
        backgroundColor: '#f9ede3',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#9b4521',
        borderRadius: 20,
        aspectRatio: 1,
    },

    text:{
        color: '#9b4521',
        fontSize: 50,
        fontFamily: 'AmaticBold',
    },
})

export default DayListItem
