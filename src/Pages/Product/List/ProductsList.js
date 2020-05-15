import React from 'react'
import { Dimensions, ImageBackground, ListRenderItemInfo, View } from 'react-native'
import { Button, Card, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components'
import products from '../../../data'
import ProductItem from './ProductItem'

function ProductsList(props) {
  const styles = useStyleSheet(themedStyles)

  return (
    <List
      contentContainerStyle={styles.productList}
      data={products}
      numColumns={2}
      renderItem={(item) => <ProductItem {...item} />}
    />
  )
}

export default ProductsList

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  productList: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
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
  },
  iconButton: {
    paddingHorizontal: 0,
  },
})
