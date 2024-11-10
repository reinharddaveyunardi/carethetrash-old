import {
  Button,
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import tw from "twrnc";

export default function Login(props) {
  return (
    <SafeAreaView>
      <View style={tw`m-10`}>
        <View style={tw`justify-center items-start `}>
          <Button
            title=" < "
            color="#4B813C"
            onPress={() => props.navigation.goBack()}
          />
        </View>
        <View style={tw`justify-center items-center h-[200px]`}>
          <Image
            source={require("../assets/logo.png")}
            style={tw`w-[80px] h-[80px]`}
          />
          <Text style={tw`font-bold text-[12px] mt-2`}>Care The Trash</Text>
        </View>
        <View style={tw`justify-between items-center h-[250px]`}>
            <Text style={tw`font-bold text-[20px]`}>Masuk</Text>
            <View>
                <Text>Email</Text>
                    <TextInput style={styles.input} maxLength={40} placeholder="name@gmail.com"/>
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput style={styles.input} maxLength={40} placeholder="*********"/>
                </View>
                <View style={tw`left-17`}>
                    <Text onPress={()=> props.navigation.navigate('Reset')}>Forgot Password?</Text>
                </View>
                <View style={tw`w-[250px]`}>
                    <Button title="Masuk" color="#4B813C" onPress={()=> props.navigation.navigate('Menu')}/>
                </View>
                <View>
                    <Text>Belum mempunyai akun? <Text onPress={()=> props.navigation.navigate('Register')}>Register!</Text></Text>
                </View>
            </View>
            <View style={tw`justify-center h-[100px] items-center flex-row`}>
                <View style={tw`h-[2px] bg-black w-[100px]`}></View>
                <Text>Atau</Text>
                <View style={tw`h-[2px] bg-black w-[100px]`}></View>
            </View>
            <View style={tw`justify-between items-center h-[100px]`}>
                <View style={tw`w-[250px]`}>
                    <Button title="Login dengan Google" color="#4B813C"/>
                </View>
                <View style={tw`w-[250px]`}>
                    <Button title="Login dengan Apple" color="#4B813C"/>
                </View>
            </View>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 250,
    padding: 2,
  },
});
