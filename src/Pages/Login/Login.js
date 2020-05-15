import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport'
import { Button, Input, Text } from '@ui-kitten/components'

import { KeyboardAvoidingView } from '../../Components/KeyboardAvoidingView'
import { ImageOverlay } from '../../Components/ImageOverlay'
import imageBackground from './assets/image-background.jpg'
import CustomIcon from '../../Components/CustomIcon'

function Login(props) {
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  const [passwordVisible, setPasswordVisible] = React.useState(false)

  return (
    <KeyboardAvoidingView>
      <ImageOverlay style={styles.container} source={imageBackground}>
        <View style={styles.headerContainer}>
          <Text category="h1" status="control">
            مرحبا
          </Text>

          <Text style={styles.signInLabel} category="s1" status="control">
            قم بتسجيل الدخول
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            status="control"
            placeholder={'الإيميل'}
            accessoryRight={() => <CustomIcon name="person" />}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.passwordInput}
            status="control"
            placeholder={'كلمة المرور'}
            accessoryRight={() => (
              <TouchableWithoutFeedback onPress={() => setPasswordVisible(!passwordVisible)}>
                <CustomIcon name={passwordVisible ? 'eye' : 'eye-off'} />
              </TouchableWithoutFeedback>
            )}
            value={password}
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
          />
          <View style={styles.forgotPasswordContainer}>
            <Button
              style={styles.forgotPasswordButton}
              appearance="ghost"
              status="control"
              // onPress={onForgotPasswordButtonPress}
            >
              نسيت كلمة المرور !
            </Button>
          </View>
        </View>
        <Button
          style={styles.signInButton}
          size="giant"
          //onPress={onSignInButtonPress}
        >
          تسجيل الدخول
        </Button>
        <View style={styles.socialAuthContainer}>
          <Text style={styles.socialAuthHintText} status="control">
            أو قم بالتسجيل بإستعمال مواقع التواصل الإجتماعي
          </Text>
          <View style={styles.socialAuthButtonsContainer}>
            <Button
              appearance="ghost"
              status="control"
              size="giant"
              accessoryRight={() => <CustomIcon name="google" />}
            />
            <Button
              appearance="ghost"
              status="control"
              size="giant"
              accessoryRight={() => <CustomIcon name="facebook" />}
            />
            <Button
              appearance="ghost"
              status="control"
              size="giant"
              accessoryRight={() => <CustomIcon name="twitter" />}
            />
          </View>
          <Button
            style={styles.signUpButton}
            appearance="ghost"
            status="control"
            // onPress={onSignUpButtonPress}
          >
            ليس لديك حساب ؟ سجل الان
          </Button>
        </View>
      </ImageOverlay>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 12,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 28,
    height: 28,
  },
})

export default Login
