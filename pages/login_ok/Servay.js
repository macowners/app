import React, { useState } from 'react';
import { Modal, ScrollView, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
const App = ({navigation}) => {
    const [zoomState, setZoomState] = useState({ img1: false, img2: false, img3: false, img4: false, img5: false });
    const [zoomState1, setZoomState1] = useState({ img1: false, img2: false, img3: false, img4: false, img5: false });
    const [zoomState2, setZoomState2] = useState({ img1: false, img2: false, img3: false, img4: false, img5: false });
    const [zoomState3, setZoomState3] = useState({ img1: false, img2: false, img3: false, img4: false, img5: false });
    const [zoomState4, setZoomState4] = useState({ img1: false, img2: false, img3: false, img4: false, img5: false });
    const [zoomState5, setZoomState5] = useState({ img1: false, img2: false, img3: false, img4: false, img5: false });
    const [zoomState6, setZoomState6] = useState({ img1: false, img2: false, img3: false, img4: false, img5: false });
    const [zoomState7, setZoomState7] = useState({ img1: false, img2: false, img3: false, img4: false, img5: false });
    const [zoomState8, setZoomState8] = useState({ img1: false, img2: false, img3: false, img4: false, img5: false });
    const [zoomState9, setZoomState9] = useState({ img1: false, img2: false, img3: false, img4: false, img5: false });
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };
    const openModal1 = () => {
        setModalVisible1(true);
    };
    const openModal2 = () => {
        setModalVisible2(true);
    };
    const toggleZoom = (img) => {
        let newArray = [...array];
        newArray[0] = parseInt(img.replace('img', ''), 10);
        setArray(newArray);
        console.log(array);
        setZoomState({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
    };
    const toggleZoom1 = (img) => {
        let newArray = [...array];
        newArray[1] = parseInt(img.replace('img', ''), 10);
        setArray(newArray);
        console.log(array);
        setZoomState1({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
    };
    const toggleZoom2 = (img) => {
        let newArray = [...array];
        newArray[2] = parseInt(img.replace('img', ''), 10);
        setArray(newArray);
        console.log(array);
        setZoomState2({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
    };
    const toggleZoom3 = (img) => {
        let newArray = [...array];
        newArray[3] = parseInt(img.replace('img', ''), 10);
        setArray(newArray);
        console.log(array);
        setZoomState3({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
    };
    const toggleZoom4 = (img) => {
        let newArray = [...array];
        newArray[4] = parseInt(img.replace('img', ''), 10);
        setArray(newArray);
        console.log(array);
        setZoomState4({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
    };
    const toggleZoom5 = (img) => {
        let newArray = [...array];
        newArray[5] = parseInt(img.replace('img', ''), 10);
        setArray(newArray);
        console.log(array);
        setZoomState5({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
    };
    const toggleZoom6 = (img) => {
        let newArray = [...array];
        newArray[6] = parseInt(img.replace('img', ''), 10);
        setArray(newArray);
        console.log(array);
        setZoomState6({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
    };
    const toggleZoom7 = (img) => {
        let newArray = [...array];
        newArray[7] = parseInt(img.replace('img', ''), 10);
        setArray(newArray);
        console.log(array);
        setZoomState7({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
    };
    const toggleZoom8 = (img) => {
        let newArray = [...array];
        newArray[8] = parseInt(img.replace('img', ''), 10);
        setArray(newArray);
        console.log(array);
        setZoomState8({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
    };
    const toggleZoom9 = (img) => {
        let newArray = [...array];
        newArray[9] = parseInt(img.replace('img', ''), 10);
        setArray(newArray);
        console.log(array);
        setZoomState9({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
    };
    const submit = (arr) => {
        let hap = 0;
        for (let i = 0; i < 10; i++) {
            if (array[i] == 0)
                hap = 1;
        }
        let sum = 0;
        if (hap !== 1) {
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            console.log(sum);
            if (sum <= 20) {
                setModalVisible(true);
            }
            else if (sum <= 35) {
                setModalVisible1(true);
            }
            else if (sum <= 50) {
                setModalVisible2(true);
            }
        }
    };
    const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    return (React.createElement(View, null,
        React.createElement(View, { style: { marginTop: 22 } },
            React.createElement(Modal, { animationType: "slide", transparent: false, visible: modalVisible },
                React.createElement(View, { style: styles.comment },
                    React.createElement(Text, { style: styles.commenttext }, "\uB2F9\uC2E0\uC740 \uC2A4\uD2B8\uB808\uC2A4\uC218\uCE58\uAC00 \uB192\uC2B5\uB2C8\uB2E4 !"),
                    React.createElement(Text, { style: styles.explanation }, "\uC2A4\uD2B8\uB808\uC2A4\uC5D0 \uB300\uD55C \uB300\uCC98\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uACF5\uBD80\uB7C9\uC744 \uC870\uC808\uD558\uACE0 \uAC00\uC871\uACFC\uC758 \uB300\uD654, \uC88B\uC544\uD558\uB294 \uC6B4\uB3D9, \uC26C\uB294 \uC2DC\uAC04 \uC911 \uBA4D\uD558\uB2C8 \uC549\uC544 \uC26C\uAC70\uB098 \uC0B0\uCC45\uD558\uB294 \uAC83 \uB4F1\uC73C\uB85C \uC2A4\uD2B8\uB808\uC2A4\uB97C \uC870\uC808\uD558\uC2DC\uAE38 \uBC14\uB78D\uB2C8\uB2E4.")),
                React.createElement(Button, { title: "\uB3CC\uC544\uAC00\uAE30 ", onPress: () => setModalVisible(false) }))),
        React.createElement(View, { style: { marginTop: 22 } },
            React.createElement(Modal, { animationType: "slide", transparent: false, visible: modalVisible1 },
                React.createElement(View, { style: styles.comment },
                    React.createElement(Text, { style: styles.commenttext }, "\uB2F9\uC2E0\uC740 \uC2A4\uD2B8\uB808\uC2A4\uC218\uCE58\uAC00 \uBCF4\uD1B5\uC785\uB2C8\uB2E4 !"),
                    React.createElement(Text, { style: styles.explanation }, "\uC2A4\uD2B8\uB808\uC2A4\uAC00 \uC5C4\uCCAD\uB098\uAC8C \uB9CE\uC9C0\uB294 \uC54A\uC9C0\uB9CC \uC5B4\uB290\uC815\uB3C4 \uAD00\uB9AC\uB97C \uD558\uC2DC\uBA74 \uC88B\uC744\uAC83 \uAC19\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uC5EC\uAC00\uC0DD\uD65C \uB610\uB294 \uCDE8\uBBF8\uC0DD\uD65C\uC744 \uC7A0\uAE50\uC774\uB098\uB9C8 \uC2DC\uAC04\uB0B4\uC5B4 \uAC00\uC2DC\uB294 \uAC83\uC744 \uCD94\uCC9C\uB4DC\uB9BD\uB2C8\uB2E4 !")),
                React.createElement(Button, { title: "\uB3CC\uC544\uAC00\uAE30 ", onPress: () => setModalVisible1(false) }))),
        React.createElement(View, { style: { marginTop: 22 } },
            React.createElement(Modal, { animationType: "slide", transparent: false, visible: modalVisible2 },
                React.createElement(View, { style: styles.comment },
                    React.createElement(Text, { style: styles.commenttext }, "\uB2F9\uC2E0\uC740 \uC2A4\uD2B8\uB808\uC2A4\uC218\uCE58\uAC00 \uC591\uD638\uD569\uB2C8\uB2E4!"),
                    React.createElement(Text, { style: styles.explanation }, "\uC9C0\uAE08 \uB9C8\uC778\uB4DC \uADF8\uB300\uB85C \uC2A4\uD2B8\uB808\uC2A4 \uC5C6\uB294 \uC0DD\uD65C \uC751\uC6D0\uD558\uACA0\uC2B5\uB2C8\uB2E4.")),
                React.createElement(Button, { title: "\uB3CC\uC544\uAC00\uAE30 ", onPress: () => setModalVisible2(false) }))),
        React.createElement(ScrollView, null,
            React.createElement(View, { style: styles.header }),
            React.createElement(View, { style: styles.box },
                React.createElement(View, { style: styles.questionView },
                    React.createElement(Text, { style: styles.question }, "1. \uB098\uB294 \uC219\uC81C\uC640 \uC2DC\uD5D8\uC744 \uC704\uD574 \uACF5\uBD80\uD558\uB294\uAC83\uC774 \uC9C0\uACB9\uB2E4.")),
                React.createElement(View, { style: styles.checkView },
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom('img1') }, zoomState.img1 ?
                        React.createElement(Text, { style: [styles.check, zoomState.img1 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom('img2') }, zoomState.img2 ?
                        React.createElement(Text, { style: [styles.check, zoomState.img2 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom('img3') }, zoomState.img3 ?
                        React.createElement(Text, { style: [styles.check, zoomState.img3 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom('img4') }, zoomState.img4 ?
                        React.createElement(Text, { style: [styles.check, zoomState.img4 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom('img5') }, zoomState.img5 ?
                        React.createElement(Text, { style: [styles.check, zoomState.img5 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB"))),
                React.createElement(View, { style: styles.asdf },
                    React.createElement(Text, { style: styles.questiontext }, "\uB3D9\uC758"),
                    React.createElement(Text, { style: styles.questiontext }, "\uBE44\uB3D9\uC758"))),
            React.createElement(View, { style: styles.box },
                React.createElement(View, { style: styles.questionView },
                    React.createElement(Text, { style: styles.question }, "2. \uC2DC\uD5D8\uAE30\uAC04\uC774 \uB2E4\uAC00\uC624\uBA74 \uBD88\uC548\uD558\uB2E4.")),
                React.createElement(View, { style: styles.checkView },
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom1('img1') }, zoomState1.img1 ?
                        React.createElement(Text, { style: [styles.check, zoomState1.img1 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom1('img2') }, zoomState1.img2 ?
                        React.createElement(Text, { style: [styles.check, zoomState1.img2 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom1('img3') }, zoomState1.img3 ?
                        React.createElement(Text, { style: [styles.check, zoomState1.img3 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom1('img4') }, zoomState1.img4 ?
                        React.createElement(Text, { style: [styles.check, zoomState1.img4 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom1('img5') }, zoomState1.img5 ?
                        React.createElement(Text, { style: [styles.check, zoomState1.img5 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB"))),
                React.createElement(View, { style: styles.asdf },
                    React.createElement(Text, { style: styles.questiontext }, "\uB3D9\uC758"),
                    React.createElement(Text, { style: styles.questiontext }, "\uBE44\uB3D9\uC758"))),
            React.createElement(View, { style: styles.box },
                React.createElement(View, { style: styles.questionView },
                    React.createElement(Text, { style: styles.question }, "3. \uC218\uC5C5\uC2DC\uAC04\uC740 \uC7AC\uBBF8\uC5C6\uACE0 \uB530\uBD84\uD558\uB2E4.")),
                React.createElement(View, { style: styles.checkView },
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom2('img1') }, zoomState2.img1 ?
                        React.createElement(Text, { style: [styles.check, zoomState2.img1 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom2('img2') }, zoomState2.img2 ?
                        React.createElement(Text, { style: [styles.check, zoomState2.img2 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom2('img3') }, zoomState2.img3 ?
                        React.createElement(Text, { style: [styles.check, zoomState2.img3 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom2('img4') }, zoomState2.img4 ?
                        React.createElement(Text, { style: [styles.check, zoomState2.img4 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom2('img5') }, zoomState2.img5 ?
                        React.createElement(Text, { style: [styles.check, zoomState2.img5 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB"))),
                React.createElement(View, { style: styles.asdf },
                    React.createElement(Text, { style: styles.questiontext }, "\uB3D9\uC758"),
                    React.createElement(Text, { style: styles.questiontext }, "\uBE44\uB3D9\uC758"))),
            React.createElement(View, { style: styles.box },
                React.createElement(View, { style: styles.questionView },
                    React.createElement(Text, { style: styles.question }, "4. \uBD80\uBAA8\uB2D8\uC774 \uB098\uC758 \uC131\uC801\uC744 \uB0A8\uACFC \uBE44\uAD50\uD55C\uB2E4.")),
                React.createElement(View, { style: styles.checkView },
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom3('img1') }, zoomState3.img1 ?
                        React.createElement(Text, { style: [styles.check, zoomState3.img1 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom3('img2') }, zoomState3.img2 ?
                        React.createElement(Text, { style: [styles.check, zoomState3.img2 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom3('img3') }, zoomState3.img3 ?
                        React.createElement(Text, { style: [styles.check, zoomState3.img3 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom3('img4') }, zoomState3.img4 ?
                        React.createElement(Text, { style: [styles.check, zoomState3.img4 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom3('img5') }, zoomState3.img5 ?
                        React.createElement(Text, { style: [styles.check, zoomState3.img5 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB"))),
                React.createElement(View, { style: styles.asdf },
                    React.createElement(Text, { style: styles.questiontext }, "\uB3D9\uC758"),
                    React.createElement(Text, { style: styles.questiontext }, "\uBE44\uB3D9\uC758"))),
            React.createElement(View, { style: styles.box },
                React.createElement(View, { style: styles.questionView },
                    React.createElement(Text, { style: styles.question }, "5. \uACF5\uBD80\uD558\uB294 \uB3C4\uC911 \uB2E4\uB978 \uC0DD\uAC01\uC774 \uB9CE\uC774 \uB09C\uB2E4.")),
                React.createElement(View, { style: styles.checkView },
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom4('img1') }, zoomState4.img1 ?
                        React.createElement(Text, { style: [styles.check, zoomState4.img1 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom4('img2') }, zoomState4.img2 ?
                        React.createElement(Text, { style: [styles.check, zoomState4.img2 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom4('img3') }, zoomState4.img3 ?
                        React.createElement(Text, { style: [styles.check, zoomState4.img3 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom4('img4') }, zoomState4.img4 ?
                        React.createElement(Text, { style: [styles.check, zoomState4.img4 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom4('img5') }, zoomState4.img5 ?
                        React.createElement(Text, { style: [styles.check, zoomState4.img5 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB"))),
                React.createElement(View, { style: styles.asdf },
                    React.createElement(Text, { style: styles.questiontext }, "\uB3D9\uC758"),
                    React.createElement(Text, { style: styles.questiontext }, "\uBE44\uB3D9\uC758"))),
            React.createElement(View, { style: styles.box },
                React.createElement(View, { style: styles.questionView },
                    React.createElement(Text, { style: styles.question }, "6. \uB2A5\uB825\uC774 \uBD80\uC871\uD558\uC5EC \uC7A5\uB798\uC5D0 \uD558\uACE0 \uC2F6\uC740 \uC77C\uC744 \uD560 \uC218 \uC5C6\uB2E4.")),
                React.createElement(View, { style: styles.checkView },
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom5('img1') }, zoomState5.img1 ?
                        React.createElement(Text, { style: [styles.check, zoomState5.img1 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom5('img2') }, zoomState5.img2 ?
                        React.createElement(Text, { style: [styles.check, zoomState5.img2 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom5('img3') }, zoomState5.img3 ?
                        React.createElement(Text, { style: [styles.check, zoomState5.img3 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom5('img4') }, zoomState5.img4 ?
                        React.createElement(Text, { style: [styles.check, zoomState5.img4 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom5('img5') }, zoomState5.img5 ?
                        React.createElement(Text, { style: [styles.check, zoomState5.img5 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB"))),
                React.createElement(View, { style: styles.asdf },
                    React.createElement(Text, { style: styles.questiontext }, "\uB3D9\uC758"),
                    React.createElement(Text, { style: styles.questiontext }, "\uBE44\uB3D9\uC758"))),
            React.createElement(View, { style: styles.box },
                React.createElement(View, { style: styles.questionView },
                    React.createElement(Text, { style: styles.question }, "7. \uACF5\uBD80\uB97C \uC65C \uD574\uC57C\uB418\uB294\uC9C0\uB294 \uBAA8\uB974\uACA0\uC9C0\uB9CC \uACF5\uBD80\uB97C \uD574\uC57C \uB41C\uB2E4.")),
                React.createElement(View, { style: styles.checkView },
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom6('img1') }, zoomState6.img1 ?
                        React.createElement(Text, { style: [styles.check, zoomState6.img1 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom6('img2') }, zoomState6.img2 ?
                        React.createElement(Text, { style: [styles.check, zoomState6.img2 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom6('img3') }, zoomState6.img3 ?
                        React.createElement(Text, { style: [styles.check, zoomState6.img3 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom6('img4') }, zoomState6.img4 ?
                        React.createElement(Text, { style: [styles.check, zoomState6.img4 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom6('img5') }, zoomState6.img5 ?
                        React.createElement(Text, { style: [styles.check, zoomState6.img5 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB"))),
                React.createElement(View, { style: styles.asdf },
                    React.createElement(Text, { style: styles.questiontext }, "\uB3D9\uC758"),
                    React.createElement(Text, { style: styles.questiontext }, "\uBE44\uB3D9\uC758"))),
            React.createElement(View, { style: styles.box },
                React.createElement(View, { style: styles.questionView },
                    React.createElement(Text, { style: styles.question }, "8. \uC219\uC81C\uB098 \uACFC\uC81C\uAC00 \uB108\uBB34 \uB9CE\uB2E4.")),
                React.createElement(View, { style: styles.checkView },
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom7('img1') }, zoomState7.img1 ?
                        React.createElement(Text, { style: [styles.check, zoomState7.img1 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom7('img2') }, zoomState7.img2 ?
                        React.createElement(Text, { style: [styles.check, zoomState7.img2 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom7('img3') }, zoomState7.img3 ?
                        React.createElement(Text, { style: [styles.check, zoomState7.img3 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom7('img4') }, zoomState7.img4 ?
                        React.createElement(Text, { style: [styles.check, zoomState7.img4 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom7('img5') }, zoomState7.img5 ?
                        React.createElement(Text, { style: [styles.check, zoomState7.img5 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB"))),
                React.createElement(View, { style: styles.asdf },
                    React.createElement(Text, { style: styles.questiontext }, "\uB3D9\uC758"),
                    React.createElement(Text, { style: styles.questiontext }, "\uBE44\uB3D9\uC758"))),
            React.createElement(View, { style: styles.box },
                React.createElement(View, { style: styles.questionView },
                    React.createElement(Text, { style: styles.question }, "9. \uC9C4\uB85C\uC5D0 \uB300\uD574 \uC758\uB17C\uD560 \uC0C1\uB300\uAC00 \uC5C6\uB2E4.")),
                React.createElement(View, { style: styles.checkView },
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom8('img1') }, zoomState8.img1 ?
                        React.createElement(Text, { style: [styles.check, zoomState8.img1 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom8('img2') }, zoomState8.img2 ?
                        React.createElement(Text, { style: [styles.check, zoomState8.img2 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom8('img3') }, zoomState8.img3 ?
                        React.createElement(Text, { style: [styles.check, zoomState8.img3 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom8('img4') }, zoomState8.img4 ?
                        React.createElement(Text, { style: [styles.check, zoomState8.img4 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom8('img5') }, zoomState8.img5 ?
                        React.createElement(Text, { style: [styles.check, zoomState8.img5 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB"))),
                React.createElement(View, { style: styles.asdf },
                    React.createElement(Text, { style: styles.questiontext }, "\uB3D9\uC758"),
                    React.createElement(Text, { style: styles.questiontext }, "\uBE44\uB3D9\uC758"))),
            React.createElement(View, { style: styles.box },
                React.createElement(View, { style: styles.questionView },
                    React.createElement(Text, { style: styles.question }, "10. \uC131\uC801\uD45C\uB97C \uBC1B\uACE0 \uC2F6\uC9C0 \uC54A\uB2E4.")),
                React.createElement(View, { style: styles.checkView },
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom9('img1') }, zoomState9.img1 ?
                        React.createElement(Text, { style: [styles.check, zoomState9.img1 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom9('img2') }, zoomState9.img2 ?
                        React.createElement(Text, { style: [styles.check, zoomState9.img2 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom9('img3') }, zoomState9.img3 ?
                        React.createElement(Text, { style: [styles.check, zoomState9.img3 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom9('img4') }, zoomState9.img4 ?
                        React.createElement(Text, { style: [styles.check, zoomState8.img4 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB")),
                    React.createElement(TouchableOpacity, { onPress: () => toggleZoom9('img5') }, zoomState9.img5 ?
                        React.createElement(Text, { style: [styles.check, zoomState9.img5 && styles.zoomed] }, "\u25CF") :
                        React.createElement(Text, { style: styles.check }, "\u25CB"))),
                React.createElement(View, { style: styles.asdf },
                    React.createElement(Text, { style: styles.questiontext }, "\uB3D9\uC758"),
                    React.createElement(Text, { style: styles.questiontext }, "\uBE44\uB3D9\uC758")),
                React.createElement(TouchableOpacity, { onPress: () => submit(array) },
                    React.createElement(View, { style: {
                            backgroundColor: '#2376FF',
                            width: 200,
                            height: 60,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 50,
                            marginTop: 50,
                        } },
                        React.createElement(Text, { style: {
                                fontWeight: 'bold',
                                fontSize: 20,
                                color: "white",
                            } }, "제출")))),
            React.createElement(View, { style: { width: 200, height: 200, paddingTop: 100 } }))));
};
const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
    },
    background: {
        width: "100%",
        height: "100%",
    },
    arrow: {
        fontSize: 112,
    },
    item: {
        marginVertical: 10,
        fontSize: 18
    },
    title: {
        color: '#2397FF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    topheader: {
        backgroundColor: "white",
        opacity: 1,
        width: 375,
        height: 300,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
    },
    question: {
        width: 260,
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 50,
        marginRight: 50,
        justifyContent: "center",
        color: '#2376FF'
    },
    questionView: {
        marginTop: 15,
        width: 350,
        height: 50,
        borderRadius: 5,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.27,
        shadowRadius: 20.49,
    },
    check: {
        fontSize: 50,
        marginLeft: 5,
        marginRight: 5,
        opacity: .3,
        marginTop: 10,
        marginBottom: 10,
        color: '#2376FF'
    },
    checkView: {
        flexDirection: "row",
    },
    zoomed: {
        fontSize: 50,
        opacity: 1,
    },
    questiontext: {
        fontSize: 14,
        marginTop: 30,
        marginLeft: 2,
        color: '#2376FF'
    },
    box: {
        // backgroundColor : "red",
        width: 350,
        height: 150,
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 15,
        margin: 6,
        marginBottom: 30,
        marginTop: 20,
    },
    header: {
        marginBottom: 50
    },
    asdf: {
        flexDirection: 'row',
        width: 260,
        justifyContent: 'space-between',
        marginTop: -40
    },
    comment: {
        alignSelf: "center",
        marginTop: 300,
        backgroundColor: "rgb(204,255,255)",
        width: 350,
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    commenttext: {
        marginBottom: 30,
        fontSize: 20,
        fontWeight: "bold"
    },
    explanation: {
        marginLeft: 15,
        marginRight: 15,
    },
    backspace: {
        marginTop: 20,
    }
});
export default App;
