import React from 'react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import * as eva from '@eva-design/eva'
import Login from './src/Pages/Login/Login'
import ProductDetails from './src/Pages/Product/Details/ProductDetails'

export default () => (
  <>
    <IconRegistry icons={[EvaIconsPack]} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <ProductDetails />
    </ApplicationProvider>
  </>
)
