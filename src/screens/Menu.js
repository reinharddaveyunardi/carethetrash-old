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
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import Profile from "./Profile";
import Payment from "./Payment";
import History from "./History";

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
        expLevel: 200,
        progressExp: 0.2,
    },
];
const Item = ({ saldo, point, level, expLevel, progressExp, props }) => (
    <View style={tw`items-center`}>
        <Pressable
            onPress={() => props.navigation.navigate("Profile")}
            style={tw`flex-row items-center justify-center my-5 bg-white h-30 w-85 rounded-lg shadow-md`}
        >
            <Text
                style={tw`text-4xl font-bold opacity-30 bottom-10 right-20 text-green-800`}
            >
                Care
            </Text>
            <Image
                style={[
                    {
                        width: 120,
                        height: 120,
                        borderTopRightRadius: 90,
                        borderTopLeftRadius: 90,
                        borderBottomRightRadius: 90,
                        borderBottomLeftRadius: 90,
                    },
                    tw`
                        absolute z-10
                    `,
                ]}
                source={require("../assets/profile.png")}
                onPress={() => props.navigation.navigate("Profile")}
            />
            <Text
                style={tw`text-4xl font-bold top-10 left-20 opacity-30 text-green-800`}
            >
                Trash
            </Text>
        </Pressable>
        <View style={tw`flex-row justify-around items-center w-90`}>
            <View
                style={tw`bg-gray-600 w-50 py-5 rounded-xl flex-row items-center justify-around shadow-md bg-white`}
            >
                <View>
                    <Text>Saldo:</Text>
                    <Text>{saldo}</Text>
                </View>
                <View>
                    <Button
                        title="+"
                        color="#4B813C"
                        style={{ width: 50, height: 50 }}
                    />
                </View>
            </View>
            <View
                style={tw`bg-gray-600 w-30 p-5 py-5 rounded-xl shadow-md bg-white`}
            >
                <Text>Point:</Text>
                <Text>{point}</Text>
            </View>
        </View>
        <View style={tw`my-4`}>
            <View style={tw`w-85 h-15 rounded-lg shadow-md bg-white`}>
                <View style={tw`items-center my-2`}>
                    <Text>
                        Level {level} / {expLevel} Exp
                    </Text>
                </View>
                <View style={tw`items-center`}>
                    <Progress.Bar
                        progress={progressExp}
                        color="green"
                        borderColor="white"
                        unfilledColor="lightgreen"
                        width={300}
                    />
                </View>
            </View>
        </View>
    </View>
);

function Menu({ props }) {
    return (
        <View>
            <FlatList
                data={Data}
                renderItem={({ item }) => (
                    <Item
                        saldo={item.saldo}
                        point={item.point}
                        level={item.level}
                        expLevel={item.expLevel}
                        progressExp={item.progressExp}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
            <View
                style={tw`flex-row justify-between w-85 mx-auto mb-10 bg-white rounded-lg shadow-md p-2`}
            >
                <View
                    style={tw`justify-center items-center bg-white shadow-md m-1`}
                >
                    <Button
                        color="#4B813C"
                        title="Organik"
                        onPress={() => props.navigation.navigate("Login")}
                    />
                </View>
                <View
                    style={tw`justify-center items-center bg-white shadow-md m-1`}
                >
                    <Button color="#0a70f5" title="Anorganik" />
                </View>
                <View
                    style={tw`justify-center items-center bg-white shadow-md m-1`}
                >
                    <Button color="#c77116" title="Khusus" />
                </View>
            </View>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function MenuDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Beranda" component={Menu} />
            <Drawer.Screen name="Profil" component={Profile} />
            <Drawer.Screen name="Riwayat" component={History} />
            <Drawer.Screen name="Pembayaran" component={Payment} />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <MenuDrawer />
        </NavigationContainer>
    );
}
