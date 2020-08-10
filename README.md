React Navigation Easy KeyboardAvoidingView
=====================

This is a lightweight package for scrollable content running with React Navigation.

### Installaition
- TODO

### Properties
- keyboardVerticalOffset (number)
- [extends KeyboardAvoidingView props](https://reactnative.dev/docs/keyboardavoidingview)

### Usage 

#### Component
```js
import { KeyboardAvoidingView } from '...'

export MyScreen = () => {
  return (
  <KeyboardAvoidingView keyboardVerticalOffset={10}>
    ...
    <View />
    ...
  </KeyboardAvoidingView>
  )
}
```

#### HOC
```js
import { withKeyboardAvoidingView } from '...'

const MyScreen = () => {
  return (
    <View />
  )
}

export default withKeyboardAvoidingView(MyScreen, { keyboardVerticalOffset: 10 })
```
