import { Text, StyleSheet, View } from 'react-native'

type dayListItemProps = {
    day: number
}

const DayListItem = (props: dayListItemProps) => {
  return (
    <View style={styles.box}>
        <Text style={styles.text}>
            {props.day}
        </Text>
    </View>
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
        aspectRatio: 1
    },

    text:{
        color: '#9b4521',
        fontSize: 40,
    },
})

export default DayListItem
