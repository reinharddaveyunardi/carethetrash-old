import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    Button,
    StyleSheet,
    StatusBar,
} from "react-native";
import tw from "twrnc";
import * as Progress from "react-native-progress";

const Data = [
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        nama: "Anonim",
        saldo: 2000000,
        point: "10.000",
        noHp: "12345678901",
        phoneCountry: "+62",
        alamat: "jalan 1 no 1",
        email: "anonim@gmail.com",
        level: "10",
        expLevel: "200 Exp",
    },
];

const ProfileItem = ({props, level, expLevel, nama, phoneCountry, noHp, email }) => (
    <View style={tw`items-center`}>
        <View style={tw`items-center my-5`}>
            <Image
                style={{
                    width: 150,
                    height: 150,
                    borderTopRightRadius: 120,
                    borderTopLeftRadius: 120,
                    borderBottomRightRadius: 120,
                    borderBottomLeftRadius: 120,
                }}
                source={require("../assets/profile.png")}
                onPress={() => props.navigation.navigate("Profile")}
            />
        </View>
        <View style={tw`items-center`}>
            <Text style={tw`text-xl font-bold`}>{nama}</Text>
            <Text style={tw`opacity-30 font-bold text-black`}>{email}</Text>
            <Text style={tw`opacity-30 font-bold text-black`}>
                {phoneCountry} {noHp}
            </Text>
        </View>
        <View style={tw`my-4`}>
            <View style={tw`w-85 h-15 rounded-lg shadow-md bg-white`}>
                <View style={tw`items-center my-2`}>
                    <Text>
                        Level {level} / {expLevel}
                    </Text>
                </View>
                <View style={tw`items-center`}>
                    <Progress.Bar
                        progress={0.2}
                        color="green"
                        vertical
                        borderColor="white"
                        unfilledColor="lightgreen"
                        width={300}
                    />
                </View>
            </View>
        </View>
        <View style={tw`w-85 bg-white shadow-xl h-150 rounded-xl`}>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Nomor Ponsel</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Alamat Email</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Alamat</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Metode Pembayaran</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Keamanan Akun</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Privasi</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Notifikasi</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Aksesibilitas</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Ganti Bahasa</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text style={tw`text-red-600`}>Log Out dan Hapus Akun</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
            </View>
        </View>

        <View style={tw`items-center my-5`}>
            <View style={tw`bg-black w-80 h-[1px] opacity-30`} />
        </View>

        <View style={tw`w-85 bg-white shadow-xl h-45 rounded-xl mb-5`}>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Bantuan</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Ketentuan Layanan</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
            <View>
                <View style={tw`p-5 flex-row justify-between`}>
                    <Text>Beri Ulasan</Text>
                    <Text style={tw`font-bold`}> &gt; </Text>
                </View>
                <View style={tw`items-center`}>
                    <View style={tw`bg-black w-80 h-[0.9px] opacity-8`} />
                </View>
            </View>
        </View>
    </View>
);

export default function Profile() {
    return (
        <View style={styles.container}>
            <FlatList
                data={Data}
                renderItem={({ item }) => (
                    <ProfileItem
                        nama={item.nama}
                        noHp={item.noHp}
                        email={item.email}
                        phoneCountry={item.phoneCountry}
                        level={item.level}
                        expLevel={item.expLevel}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
