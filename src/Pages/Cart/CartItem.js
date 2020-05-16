import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button, Icon, ListItem, ListItemProps, Text } from '@ui-kitten/components'
import CustomIcon from '../../Components/CustomIcon'

function CartItem(props) {
  const { style, item: product, index, onProductChange, onRemove, ...listItemProps } = props

  function onPlusButtonPress() {
    onProductChange({ ...product, amount: product.amount + 1 }, product._id)
  }

  function onMinusButtonPress() {
    onProductChange({ ...product, amount: product.amount - 1 }, product._id)
  }

  function onRemoveButtonPress() {
    onRemove(product._id)
  }

  return (
    <ListItem {...listItemProps} style={[styles.container, style]}>
      <Image style={styles.image} source={product.image} />
      <View style={styles.detailsContainer}>
        <Text category="s1">{product.title}</Text>
        <Text appearance="hint" category="p2">
          {product.subtitle}
        </Text>
        <Text category="s2">{product.totalPrice}$</Text>
        <View style={styles.amountContainer}>
          <Button
            style={[styles.iconButton, styles.amountButton]}
            size="tiny"
            accessoryRight={(s) => <Icon {...s} name="minus" />}
            onPress={onMinusButtonPress}
            disabled={product.amount === 1}
          />
          <Text style={styles.amount} category="s2">
            {`${product.amount}`}
          </Text>
          <Button
            style={[styles.iconButton, styles.amountButton]}
            size="tiny"
            accessoryRight={(s) => <Icon {...s} name="plus" />}
            onPress={onPlusButtonPress}
          />
        </View>
      </View>
      <Button
        style={[styles.iconButton, styles.removeButton]}
        appearance="ghost"
        status="basic"
        accessoryRight={() => <CustomIcon name="close" />}
        onPress={onRemoveButtonPress}
      />
    </ListItem>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  image: {
    width: 120,
    height: 144,
  },
  detailsContainer: {
    flex: 1,
    height: '100%',
    padding: 16,
  },
  amountContainer: {
    position: 'absolute',
    flexDirection: 'row',
    left: 16,
    bottom: 16,
  },
  amountButton: {
    borderRadius: 16,
  },
  amount: {
    textAlign: 'center',
    width: 40,
  },
  removeButton: {
    position: 'absolute',
    right: 0,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
})

export default CartItem
