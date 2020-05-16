const images = [
  require('./assets/image-product-1.png'),
  require('./assets/image-product-2.jpg'),
  require('./assets/image-product-3.jpg'),
]

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function generateProduct(i) {
  return {
    _id: i,
    title: getRandomItem(['كرسي وردي', 'كرسي اييض', 'مصباح اسود']),
    subtitle: 'أثاث المنزل',
    description:
      'تعتبر كراسي Vitra البلاستيكية الجانبية بلا شك كلاسيكية مطلقة عندما يتعلق الأمر بمنطقة المعيشة. منذ ذلك الحين أصبح المزيج غير المعتاد لغطاء مقعد بلاستيكي وإطار خشبي مصدر إلهام للعديد من المصممين.',
    price: getRandomItem(['150$', '100$', '75$', '95$', '99.9$']),
    totalPrice: getRandomItem([150, 100, 75, 95, 99.9]),
    amount: 1,
    image: getRandomItem(images),
    size: 'H:80cm W:50cm D:40cm',
    colors: [
      { value: '#3366FF', text: 'أزرق' },
      { value: '#FF708D', text: 'وردي' },
      { value: '#FFC94D', text: 'برتقالى' },
    ],
    comments: [],
  }
}

const products = [...Array(20).keys()].map((i) => generateProduct(i))

export default products
