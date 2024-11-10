import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    Button,
    StyleSheet,
    Pressable,
    Touchable,
    TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "twrnc";
import { NavigationContainer } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { TextInput } from "react-native-gesture-handler";

export default function Payment(){
    return(
        // <View style={tw`w-auto h-auto`}>
        //     <View style={tw`justify-center items-center mt-15`}>
        //         <Text style={tw`text-2xl font-bold`}>Pesan Pengantar Sampah</Text>
        //         <View style={tw`m-2 w-70 h-40 justify-center p-5 rounded-2xl mt-15 bg-white shadow-xl`}>
        //             <View style={tw`w-auto items-center`}>
        //                 <Text style={tw`text-lg font-bold`}>Pesan Pengantar Sampah</Text>
        //             </View>
        //             <View>
        //                 <Text>Kategori  : Sampah Organik</Text>
        //                 <Text>Berat        : 1 Kg </Text>
        //                 <Text>Alamat     : jalan 1 no 1</Text>
        //             </View>
        //         </View>
        //         <View style={tw`h-[0.2] mt-10 w-60 opacity-20 bg-black `}/>
        //         <View style={tw`m-2 w-70 mt-10 h-40 p-5 rounded-xl bg-white shadow-2xl justify-center`}>
        //             <View>
        //                 <Text>Harga Total       : Rp35.000</Text>
        //                 <Text>Pajak aplikasi   : Rp3.500</Text>
        //                 <Text>Poin                    : 100 Poin</Text>
        //                 <Text>Exp                      : +23 exp</Text>
        //             </View>
        //         </View>
        //         <View style={tw`w-[70] mt-30`}>
        //             <Button title="Bayar" color="green"/>
        //         </View>
        //     </View>
        // </View>
        <View style={tw`h-screen w-full`}>
            <View style={tw`bg-white shadow-lg p-5 h-170 rounded-lg w-auto mt-5 m-10`}>
                <View style={tw`justify-start w-auto`}>
                    <Text style={tw`text-center mt-5 text-2xl font-bold`}>Order</Text>
                    <View>
                        <View style={tw`mb-5`}>
                            <Text>Berat sampah:</Text>
                            <View style={tw`flex-row`}>
                                <TextInput placeholder="e.g 2" style={tw`border p-[.5px] mr-2 w-23`} keyboardType="numeric"/>
                                <Text style={tw`text-md mt-2wsada2222222222222 h-auto`}>/Kg</Text>
                            </View>
                        </View>
                        <View>
                            <Text>Lokasi:</Text>
                            <View style={tw`flex`}>
                                <TextInput placeholder="e.g Jalan 1 No 1" style={tw`border p-1 w-30 `}/>
                            </View>
                        </View>
                    </View>
                    <View style={tw`mt-5`}>
                        <Button name="Bayar" title="Bayar" color="green"/>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    InputStyle: {
        display: 'flex',
        borderWidth: 1,
        padding: 2,
        width: 90
    }
})