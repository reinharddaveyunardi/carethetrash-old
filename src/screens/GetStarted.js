import {
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import tw from "twrnc";

export default function GetStarted(props) {
  return (
    <SafeAreaView>
      <View style={tw`justify-center items-center h-full`}>
        <View style={tw`justify-start items-center`}>
          <Image source={require("../assets/logo.png")} />
          <View>
            <Text style={tw`font-bold text-[18px] mt-6`}>Care The Trash</Text>
          </View>
          <Text style={tw`text-center w-[250px] mt-15`}>
            Ayo kita mulai menjaga lingkungan kita agar menjadi lebih segar dan
            bersih
          </Text>
        </View>

        <View style={tw`w-[250px] top-40`}>
          <Button
            onPress={()=> props.navigation.navigate("Login")}
            color="#4B813C"
            style={tw`text-green-700`}
            title="Mulai!"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
