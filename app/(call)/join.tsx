import { inverseformatSlug } from "@/lib/slugs";
import { useStreamVideoClient } from "@stream-io/video-react-native-sdk";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-root-toast";

export default function JoinPage () {
    const [roomId, setRoomId] = useState("");
    const client =  useStreamVideoClient();
    const router = useRouter();
    const handleJoinRoom = async () => {
        if(!roomId) return;

        const slug = inverseformatSlug(roomId);
        const call =  client?.call("default", slug);

        call?.get().then((callResponse) => {
            console.log(callResponse);
            router.push(`/(call)/${slug}`)
        }).catch((reason) => {
            console.log(reason.message);

            Toast.show(
                "Whoops!\nLooks like the room you're trying to join dosen't exist.",
                {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.CENTER,
                    shadow: true,
                }
            )
        })
    }
    return (
        <View
        style={{
            flex: 1,
        }}
        >
            <Text
            style={{
                padding: 20,
                fontWeight: "bold",
            }}
            >
                Enter the Room Name
            </Text>
            <TextInput
            placeholder="e.g. Black Purple Tiger"
            value={roomId}
            onChangeText={setRoomId}
            style={{
                padding: 20,
                width: "100%",
                backgroundColor: "white",
            }}
            />

            <TouchableOpacity
            onPress={handleJoinRoom}
            style={{
                padding: 20,
                backgroundColor: "#5F%DEC",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
                <Text
                style={{
                    color: "white",
                    fontWeight: "bold",
                }}
                >
                    Join Room
                </Text>
            </TouchableOpacity>
        </View>
    )
}