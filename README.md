![img](https://user-images.githubusercontent.com/75754448/109319126-d1593a00-784e-11eb-88af-1488f6700e48.png)

### Hello👋

### The First step was adding in package.js dependecies

   ```
  "dependencies": {
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/native": "^5.9.3",
    "@react-navigation/stack": "^5.14.3",
    "react": "16.13.1",
    "react-native": "0.63.4",
    "react-native-gesture-handler": "^1.10.2",
    "react-native-reanimated": "^1.13.2",
    "react-native-safe-area-context": "^3.1.9",
    "react-native-screens": "^2.18.0"
  },
```

also you can use the site [ReactNavigation](https://reactnavigation.org/docs/getting-started)

### The Next Step I created two folders(FirstScreen, SecondScreen) with files(styles.js, index.js)

### Views
![155129490_888248665266210_7356825393391100622_n](https://user-images.githubusercontent.com/75754448/109328944-4ed67780-785a-11eb-9cd9-3054a0fe187a.jpg)

### display the entered text in the next view

FirstScreen - index.js

   ```
       <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Podaj dane...'}
          style={styles.inputStyle}
        />
```

SecondScreen - index.js

   ```
    const SecondPage = ({route, navigation}) => {
  return (
  [...]

        <Text style={styles.textResult}>
        Dane pobrane z pierwszego ekranu poniżej {route.params.paramKey}
        </Text>
      </View>

```

### clicking on the button "Przejdź dalej" will take you to the second layout

FirstScreen - index.js

   ```
 const FirstPage = ({navigation}) => {
  [...]
        <TouchableOpacity 
          onPress={() =>
            navigation.navigate('SecondPage', {
              paramKey: userName})}
              style={styles.button}>
    <Text style={styles.buttonText}>Przejdź dalej</Text>
</TouchableOpacity>
```
### clicking the "Wróć" button will take you to first layout

SecondScreen - index.js

   ```
const SecondPage = ({route, navigation}) => {
 [...]
      <TouchableOpacity   
      onPress={() =>
            navigation.navigate('FirstPage')}
              style={styles.button}>
    <Text style={styles.buttonText}>Wróć</Text>
</TouchableOpacity>
    </SafeAreaView>

```



### Views Samsung A51

![155471223_2946124685671252_5221397355821134753_n](https://user-images.githubusercontent.com/75754448/109414283-70e30d80-79b2-11eb-83c2-6ff38139a62d.jpg)

### Views Samsung A40

![155434239_186254739551084_4214911581479392227_n](https://user-images.githubusercontent.com/75754448/109414459-5493a080-79b3-11eb-9603-6b2c0053b36f.jpg)


### Gif


![ezgif com-gif-maker](https://user-images.githubusercontent.com/75754448/109329977-7da11d80-785b-11eb-8975-1bc9bd71d970.gif)

