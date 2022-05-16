import React from 'react';
import { Text, View,Image } from 'react-native';
import styled from 'styled-components/native'
import { Dimensions ,FlatList,ActivityIndicator,RefreshControl,PanResponder} from 'react-native';
import {  MaterialCommunityIcons,MaterialIcons} from "@expo/vector-icons";
const { height:SCREEN_HEIGHT} = Dimensions.get("window");

const Container = styled.ScrollView``;
const Header = styled.View`
    width:100%;
    height: ${SCREEN_HEIGHT / 8}px;
    position: relative;
    left: 0;
    z-index: 100;
    border-bottom-width: 1px;
    border-color: #ddd;
    shadow-color: #ddd;
    shadow-opacity: 0.8;
    elevation: 2;
    
`
const Title = styled.Text`
    font-size: 24px;
    margin-left : 15px;
    font-weight: 500;
    margin-top : 70px;
`
const SectionTitle = styled.Text`
    font-size: 18px;
    margin-left : 15px;
    font-weight: 600;
    margin-top:20px;
`;
const SectionContainer = styled.View`
    height: ${SCREEN_HEIGHT / 2}px;
    margin : 10px;
    border-width: 1px;
    border-radius: 2px;
    border-color: rgba(0,0,0,0.1);
    shadow-color: #000;
    shadow-offset: 1px 1px;
    shadow-radius: 2px;
    
`
const CardImg = styled.Image`
    margin-top:10px;
    width:90%;
    height:200px;
    border-radius:10px;
    align-self:center;
`;
const SubTitle1 = styled.Text`
    align-self:center;
    font-size: 12px;
    color: black;
    font-weight: 500;
    margin-top:10px;
`;
const SubTitle2 = styled.Text`
    align-self:center;
    font-size: 20px;
    color: black;
    font-weight: 500;
`;
const SubContainer = styled.View`
    flex-direction: row;
    align-items:center;
    align-self:center;
    justify-content: center;
`
const SubContainer2 = styled.View`
    flex-direction: row;
    justify-content: space-around;
`
const ChargeContaienr = styled.View`
    justify-content: space-around;
    align-items:center;
    margin-top:20px;
`
const ChargeText = styled.Text`
    margin-top:5px;

`
const Pay = () => {
    return(
        <>
        <Container>
            <Header>
                <Title>Header</Title>
            </Header>
            <SectionTitle> Pay </SectionTitle>
            <SectionContainer style={{shadowOpacity:0.5}}>
                <CardImg source={require('../assets/img/starbucks.jpeg')} />
                <SubContainer>
                <SubTitle1 >스타벅스 e카드</SubTitle1><MaterialIcons style={{marginLeft:"1%"}}name="stars" size={14} color="white" />
                </SubContainer>
                <SubTitle2>17,700원</SubTitle2>
                <SubContainer2>
                    <ChargeContaienr>
                    <MaterialCommunityIcons name="credit-card-refresh-outline" size={30} color="black" />
                    <ChargeText>자동 충전</ChargeText>
                    </ChargeContaienr>
                    <ChargeContaienr>
                    <MaterialCommunityIcons name="credit-card-plus-outline" size={30} color="black" />
                    <ChargeText>일반 충전</ChargeText>
                    </ChargeContaienr>
                </SubContainer2>
            </SectionContainer>
            
        </Container>
        </>
    )
}

export default Pay;