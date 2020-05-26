import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";



const NewsCard = (cardData) => {
    const [fullCardFlag, setFullCardFlag] = useState(false)


    function toggleCardView() {
        setFullCardFlag(!fullCardFlag)
    }

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>
                {cardData.title}
            </Text>
            <Text style={styles.cardMetadata}>
                {cardData.publishedAt}
            </Text>
            <Image
                style={styles.cardImage}
                source={cardData.urlToImage}
            />
            {!fullCardFlag && <ScrollView>
                <Text style={styles.newsBody}>
                    {cardData.description}
                </Text>
                <Button
                    title="view complete story"
                    onPress={() => toggleCardView()}
                />
            </ScrollView>}
            {fullCardFlag && <ScrollView>
                <Text style={styles.newsBody}>
                    {cardData.content}
                </Text>
                <Button
                    title="back"
                    onPress={() => toggleCardView()}
                />
            </ScrollView>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
    },
    cardImage: {
        alignContent: "flex-start",
        width: 350,
        height: 150
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    cardMetadata: {
        fontSize: 10,
        fontWeight: "normal",
        alignContent: "flex-start"
    },
    newsBody: {
        fontSize: 13,
        fontWeight: "normal",
        alignContent: "flex-start",
        paddingBottom: 10
    },
});

export default NewsCard;