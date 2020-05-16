import React from 'react'
import { round } from 'lodash'
import { Button, Layout, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components'
import initialProducts from '../../data'
import CartItem from './CartItem'

function Cart(props) {
  const styles = useStyleSheet(themedStyle)
  const [products, setProducts] = React.useState(initialProducts)

  const onItemRemove = (_id) => {
    const newProducts = products.filter((i) => i._id !== _id)
    setProducts(newProducts)
  }

  const onItemChange = (product, _id) => {
    const newProducts = products.map((i) => (i._id === _id ? { ...i, amount: product.amount } : i))
    setProducts(newProducts)
  }

  const totalCost = () => {
    const rawTotalCost = products.reduce((acc, i) => acc + i.totalPrice * i.amount, 0.0)
    return round(rawTotalCost, 2)
  }

  return (
    <Layout style={styles.container} level="2">
      <List
        data={products}
        renderItem={(item) => (
          <CartItem
            {...item}
            style={styles.item}
            onProductChange={onItemChange}
            onRemove={onItemRemove}
          />
        )}
        ListFooterComponent={() => (
          <Layout style={styles.footer}>
            <Text category="h5">Total Cost:</Text>
            <Text category="h5">{`$${totalCost()}`}</Text>
          </Layout>
        )}
      />
      <Button style={styles.checkoutButton} size="giant">
        CHECKOUT
      </Button>
    </Layout>
  )
}

const themedStyle = StyleService.create({
  container: {
    flex: 1,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'background-basic-color-3',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0.5,
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  checkoutButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
})

export default Cart
