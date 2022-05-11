import React, {useState,useEffect} from 'react';
import { Text, View ,Image,StyleSheet} from 'react-native';
import styled from 'styled-components/native'
import { Dimensions ,FlatList,ActivityIndicator,RefreshControl} from 'react-native';
import { BLACK_COLOR } from '../colors';
import * as Progress from 'react-native-progress';
import { Ionicons ,MaterialCommunityIcons} from "@expo/vector-icons";
import { useQuery , useQueryClient } from "react-query";
const { height:SCREEN_HEIGHT} = Dimensions.get("window");

const Container = styled.ScrollView`

`

const Header = styled.View`
    width:100%;
    height: ${SCREEN_HEIGHT / 4}px;
`

const BackImg = styled.Image`
    width:100%;
    height: ${SCREEN_HEIGHT / 4}px;
    opacity:0.5;
    
`
const Title = styled.Text`
    font-size: 24px;
    margin-left : 15px;
    font-weight: 500;
    margin-top : 70px;
`
const SubContainer = styled.View`
    display:flex;
    flex-direction: row;
`
const SubView1 = styled.View`
    width:60%;
    margin-left : 15px;
    display:flex;
`;
const SubView2 = styled.View`
    width:40%;
    float:right;
    display:flex;
    align-self:flex-end;
    flex-direction: row;
`;
const SubTitle = styled.Text`
    font-size: 12px;
    color:rgba(0,0,0,0.5);
    margin-top:20px;
    margin-bottom:10px;
    font-weight: 500;
`;
const MainScore = styled.Text`
    font-size: 24px;
    color:black;
    margin-left:10px;
    font-weight: 500;
`
const SubScore = styled.Text`
    font-size: 18px;
    color:rgba(0,0,0,0.5);
    font-weight: 500;
    align-self:flex-end;
`
const Section = styled.View`
    flex-direction: row;
    height:50px;
    align-items: center;
    
`;
const MessageView = styled.View`
    flex:1;
    align-items: center;
    flex-direction: row;
    padding-left:30px;
`;
const CouponView = styled.View`
    flex:1;
    align-items: center;
    flex-direction: row;
    padding-left:40px;
`;
const InfoView = styled.View`
    flex:1;
    justify-content:flex-end;
    flex-direction: row;
    padding-right:20px;
`;

const EventSection = styled.View`
    height: ${SCREEN_HEIGHT / 4}px;
    margin : 10px;
`

const EventTitle = styled.Text`
    font-size: 24px;
    margin-left : 15px;
    font-weight: 500;
    margin-top:20px;
`;
const EventSubTitle = styled.Text`
    font-size: 12px;
    color:rgba(0,0,0,0.5);
    font-weight: 600;
    margin-left:20px;
`;
const EventSubTitle2 = styled.Text`
    font-size: 12px;
    color:rgba(0,0,0,0.8);
    font-weight: 600;
    margin-left:20px;
    margin-bottom:5px;
    margin-top:auto;
`;
const SectionTitle = styled.Text`
    font-size: 18px;
    margin-left : 15px;
    font-weight: 600;
    margin-top:20px;
`;
const HListSeparator = styled.View`
    width:20px;
`;
//loading
const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const CoffeeImg = styled.Image`
    width:100px;
    height:100px;
    border-radius:50px;
`;
const CoffeeTitle = styled.Text`
    margin-top:10px;
    align-self: center;
`;

const Home = () => {
    const queryClient = useQueryClient();
    const [refreshing,setRefreshing] = useState(false);
    const { isLoading:coffeLoading,data:coffeeData}=useQuery(["coffee"],()=>
    fetch(
        `https://starbugs.herokuapp.com/api/menus`
    ).then((res) => res.json()
    ));
    const onRefresh = async() => {
        setRefreshing(true);
        setRefreshing(false);
    }
    if(coffeLoading){
        return (
            <Wrapper>
                <ActivityIndicator />
            </Wrapper>
        )
    }
    return(
        <Container 
            refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        >
            <Header>
                <BackImg style={StyleSheet.absoluteFill} source={require('../assets/img/coffee.jpg')}/>
                <Title>펀치 그래피티 블렌디드와 함께 {"\n"}상큼한 오후 되세요 🍹</Title>
                <SubContainer>
                    <SubView1>
                        <SubTitle>3 ★ until Green Level</SubTitle>
                        <Progress.Bar progress={0.4} width={null} color={"rgba(0,0,0,0.5)"}/>
                    </SubView1>
                    <SubView2>
                        <MainScore> 2 </MainScore>
                        <SubScore>/ 5 ★ </SubScore>
                    </SubView2>
                </SubContainer>
            </Header>
            <Section>
                <MessageView>
                <Ionicons name={"mail-outline"} size={24} />  
                <Text> What's New</Text> 
                </MessageView>
                <CouponView>
                <MaterialCommunityIcons name="ticket-outline" size={24} color="black" /> 
                <Text> Coupon </Text> 
                </CouponView>
                <InfoView>
                <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
                </InfoView>
            </Section>
            <EventSection>
                <BackImg style={StyleSheet.absoluteFill} source={require('../assets/img/coffee2.jpg')}/>
                <EventTitle> 22 SUMMER e-Frequency </EventTitle>
                <EventSubTitle>[적립 기간] 5/10(화) ~ 7/11(월) {"\n"} 
                [예약/증정기간] 5/10(화) ~ 7/18(월)
                </EventSubTitle>
                <EventSubTitle2>증정품은 매장별 예약 가능 일자 및 재고가 상이할 수 있으며,{"\n"}한정 수량 제작되어 조기 소진 될 수 있습니다.</EventSubTitle2>
            </EventSection>
            <SectionTitle> 고객님을 위한 추천 메뉴 </SectionTitle>
            <FlatList
            style={{marginTop:20}} 
            data={coffeeData} 
            horizontal
            keyExtractor={(item) => item.id+ ""} 
            contentContainerStyle={{paddingHorizontal:30}} 
            ItemSeparatorComponent={HListSeparator}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <View>
                    <CoffeeImg source={{uri:item.image}}/>

                    {/* <CoffeeImg source={{uri:"https://source.unsplash.com/collection/2"}}></CoffeeImg>
                    <CoffeeImg source={{uri:"https://source.unsplash.com/collection/5"}}></CoffeeImg>
                    <CoffeeImg source={{uri:"https://source.unsplash.com/collection/10"}}></CoffeeImg> */}
                    <CoffeeTitle>
                        {item.name.length > 8 ? item.name.slice(0,8)+"..." : item.name}
                    </CoffeeTitle>
                </View>
            )}
            />
        </Container>
    )
}

export default Home;