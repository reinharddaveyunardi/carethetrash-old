import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    Pressable,
    TextInput,
    Button,
    StyleSheet,
} from "react-native";
import tw from "twrnc";
import { NavigationContainer } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";

const Data = [
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        nama: "Anonim",
        saldo: 2000000,
        point: "10.000",
        noHp: "123456789",
        alamat: "jalan 1 no 1",
        email: "anonim@gmai.com",
        level: "10",
        expLevel: "200 Exp",
    },
];

export default function History() {
    return (
        <View>
            <View style={tw`items-center my-5`}>
                <View style={tw`bg-white shadow-md p-2 rounded-lg`}>
                    <TextInput style={styles.input} placeholder="Cari" />
                </View>
                <View style={tw`flex-row justify-between w-90 my-5`}>
                    <View style={tw`bg-white shadow-md p-2 rounded-full`}>
                        <Text>Kategori</Text>
                    </View>
                    <View style={tw`bg-white shadow-md p-2 rounded-full`}>
                        <Text>Lihat Semua</Text>
                    </View>
                </View>
                <View style={tw`gap-5`}>
                    <View
                        style={tw`w-90 flex-row items-center justify-between`}
                    >
                        <View style={tw`p-2 w-22 bg-[#4B813C] rounded-full`}>
                            <Text style={tw`text-white text-center`}>
                                Organik
                            </Text>
                        </View>
                        <View style={tw`p-2 w-22 bg-[#0a70f5] rounded-full`}>
                            <Text style={tw`text-white text-center`}>
                                Anorganik
                            </Text>
                        </View>
                        <View style={tw`p-2 w-22 bg-[#c77116] rounded-full`}>
                            <Text style={tw`text-white text-center`}>
                                Khusus
                            </Text>
                        </View>
                    </View>
                    <View
                        style={tw`w-90 flex-row items-center justify-between`}
                    >
                        <View style={tw`p-2 w-22 bg-gray-500 rounded-full`}>
                            <Text style={tw`text-white text-center`}>
                                Hari ini
                            </Text>
                        </View>
                        <View style={tw`p-2 w-22 bg-gray-500 rounded-full`}>
                            <Text style={tw`text-white text-center`}>
                                Minggu ini
                            </Text>
                        </View>
                        <View style={tw`p-2 w-22 bg-gray-500 rounded-full`}>
                            <Text style={tw`text-white text-center`}>
                                Bulan ini
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={tw`bg-white shadow-md p-2 h-120 mt-5 w-90 rounded-lg justify-between`}
                >
                    <View>
                        <Text style={tw`py-1`}>Organik</Text>
                        <View>
                            <View
                                style={tw`bg-[#4B813C] shadow-md p-2 w-50 h-25 rounded-lg`}
                            >
                                <Text style={tw`text-white`}>2 Mar, 18:10</Text>
                                <View style={tw`my-3 gap-2 flex-row`}>
                                    <View>
                                        <View
                                            style={tw`w-10 h-10 rounded-xl shadow-md bg-white`}
                                        />
                                    </View>
                                    <View>
                                        <Text style={tw`text-white font-bold`}>
                                            Jalan 1 no 1,
                                        </Text>
                                        <Text style={tw`text-white font-bold`}>
                                            Jenis: Organik
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text>Anorganik</Text>
                        <View>
                            <View
                                style={tw`bg-[#0a70f5] shadow-md p-2 w-50 h-25 rounded-lg`}
                            >
                                <Text style={tw`text-white`}>2 Mar, 18:10</Text>
                                <View style={tw`my-3 gap-2 flex-row`}>
                                    <View>
                                        <View
                                            style={tw`w-10 h-10 rounded-xl shadow-md bg-white`}
                                        />
                                    </View>
                                    <View>
                                        <Text style={tw`text-white font-bold`}>
                                            Jalan 1 no 1,
                                        </Text>
                                        <Text style={tw`text-white font-bold`}>
                                            Jenis: Anorganik
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text>Khusus</Text>
                        <View>
                            <View
                                style={tw`bg-[#c77116] shadow-md p-2 w-50 h-25 rounded-lg`}
                            >
                                <Text style={tw`text-white`}>2 Mar, 18:10</Text>
                                <View style={tw`my-3 gap-2 flex-row`}>
                                    <View>
                                        <View
                                            style={tw`w-10 h-10 rounded-xl shadow-md bg-white`}
                                        />
                                    </View>
                                    <View>
                                        <Text style={tw`text-white font-bold`}>
                                            Jalan 1 no 1,
                                        </Text>
                                        <Text style={tw`text-white font-bold`}>
                                            Jenis: Khusus
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 350,
        padding: 2,
        paddingLeft: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: "lightgray",
    },
});
