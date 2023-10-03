import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, icons, images } from "../constants";
import { Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
import { View } from "react-native-web";
import { Image, Text } from "react-native";
import styles from "../components/home/welcome/welcome.style";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default function Profile() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <View
        style={{
          padding: SIZES.medium,
          innerWidth: "100%",
          alignItems: "center",
          backgroundColor: COLORS.lightWhite,
        }}
      >
        <Image
          source={images.profile}
          resizeMode="cover"
          style={{
            height: 150,
            width: 150,
            borderRadius: 150 / 2,
            backgroundColor: "red",
          }}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.userName}>Hello Ruben</Text>
        </View>

        <Text style={styles.welcomeMessage}>Jobs you've applied</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}
          ></View>
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Popularjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
