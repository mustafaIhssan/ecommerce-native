import React from 'react'
import { Button, Card, Input, StyleService, Text, useStyleSheet } from '@ui-kitten/components'
import { Dimensions, ImageBackground, View } from 'react-native'
import CustomIcon from '../../../Components/CustomIcon'

function ProductItem({ item }) {
  console.log(item)
  const styles = useStyleSheet(themedStyles)

  return (
    <Card
      style={styles.productItem}
      header={() => <ImageBackground style={styles.itemHeader} source={item.image} />}
      footer={() => (
        <View style={styles.itemFooter}>
          <Text category="s1">{item.price}</Text>
          <Button
            style={styles.iconButton}
            size="small"
            accessoryRight={() => <CustomIcon name="shopping-cart" color={'#FFF'} size={18} />}
            // onPress={() => onItemCartPress(info.index)}
          />
        </View>
      )}
      // onPress={() => onItemPress(info.index)}
    >
      <Text category="s1">{item.title}</Text>
      <Text appearance="hint" category="c1">
        {item.subtitle}
      </Text>
    </Card>
  )
}

const themedStyles = StyleService.create({
  productItem: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
    backgroundColor: 'background-basic-color-1',
  },
  itemHeader: {
    height: 140,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 21,
    marginVertical: 10,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
})

export default ProductItem
