import React from 'react'
import { ImageBackground, Platform, View } from 'react-native'
import {
  Button,
  Input,
  Layout,
  Radio,
  RadioGroup,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components'

import { KeyboardAvoidingView } from '../../../Components/KeyboardAvoidingView'

const keyboardOffset = (height) =>
  Platform.select({
    android: 0,
    ios: height,
  })
const product = {
  title: 'كرسي وردي',
  subtitle: 'أثاث المنزل',
  description:
    'تعتبر كراسي Vitra البلاستيكية الجانبية بلا شك كلاسيكية مطلقة عندما يتعلق الأمر بمنطقة المعيشة. منذ ذلك الحين أصبح المزيج غير المعتاد لغطاء مقعد بلاستيكي وإطار خشبي مصدر إلهام للعديد من المصممين.',
  price: '150$',
  image: require('./assets/image-product.png'),
  size: 'H:80cm W:50cm D:40cm',
  colors: [
    { value: '#3366FF', text: 'أزرق' },
    { value: '#FF708D', text: 'وردي' },
    { value: '#FFC94D', text: 'برتقالى' },
  ],
  comments: [],
}

function ProductDetails(props) {
  const styles = useStyleSheet(themedStyles)
  const [selectedColorIndex, setSelectedColorIndex] = React.useState(null)

  const renderColorItem = (color, index) => (
    <Radio key={index} style={styles.colorRadio}>
      <Text style={{ color: color.value }}> {color.text.toUpperCase()}</Text>
    </Radio>
  )

  return (
    <KeyboardAvoidingView style={styles.container} offset={keyboardOffset}>
      <Layout style={styles.header}>
        <ImageBackground style={styles.image} source={product.image} />
        <Layout style={styles.detailsContainer} level="1">
          <Text category="h6">{product.title}</Text>
          <Text style={styles.subtitle} appearance="hint" category="p2">
            {product.subtitle}
          </Text>
          <Text style={styles.price} category="h4">
            {product.price}
          </Text>
          <Text style={styles.description} appearance="hint">
            {product.description}
          </Text>
          <Text style={styles.sectionLabel} category="h6">
            الحجم :
          </Text>
          <Text style={styles.size} appearance="hint">
            {product.size}
          </Text>
          <Text style={styles.sectionLabel} category="h6">
            اللون :
          </Text>
          <RadioGroup
            style={styles.colorGroup}
            selectedIndex={selectedColorIndex}
            onChange={setSelectedColorIndex}>
            {product.colors.map(renderColorItem)}
          </RadioGroup>
          <View style={styles.actionContainer}>
            <Button
              style={styles.actionButton}
              size="giant"
              status="control"
              //  onPress={onAddButtonPress}
            >
              إضافة الى السلة
            </Button>
            <Button
              style={styles.actionButton}
              size="giant"
              //onPress={onBuyButtonPress}
            >
              شراء
            </Button>
          </View>
        </Layout>
      </Layout>
    </KeyboardAvoidingView>
  )
}

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
    direction: 'rtl',
  },
  commentList: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    marginBottom: 8,
  },
  image: {
    height: 340,
    width: '100%',
  },
  detailsContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  subtitle: {
    marginTop: 4,
  },
  price: {
    position: 'absolute',
    top: 24,
    left: 16,
  },
  description: {
    marginVertical: 16,
  },
  size: {
    marginBottom: 16,
  },
  colorGroup: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  colorRadio: {
    marginHorizontal: 8,
  },
  actionContainer: {
    flexDirection: 'row',
    marginHorizontal: -8,
    marginTop: 24,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  sectionLabel: {
    marginVertical: 8,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: 'text-basic-color',
  },
  commentInput: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
})

export default ProductDetails
