import React from 'react';
import styled from 'styled-components';

function VoiceControl() {
    return (
        <Container>
            <Vector>
                <Description>
                    <h1>Yamaguchi
                        Voice Control </h1>
                    <Desc>
                        Вы можете управлять программами массажа или самим креслом с помощью голосовых команд, приведённых ниже. Коснитесь кратковременно кнопки голосового управления, расположенной на левом подлокотнике, для запуска сеанса голосового управления.
                        Произнесите одну из доступных команд. Если произнесённая команда распознана, вы услышите ответ и кресло приступит к выполнению запроса.
                    </Desc>
                </Description>
                <Say><span>СКАЖИ:</span></Say>
                <Okay><span>«ОКЕЙ,</span></Okay>
                <Yamaguchi><span>ЯМАГУЧИ»</span></Yamaguchi>
                <Body><img src='/images/body.svg' alt='woman body' /></Body>
                <Circle><img src='/images/circle.svg' alt='circle' /></Circle>
                <Interface><img src='/images/interface.svg' alt='interface' /></Interface>
            </Vector>
        </Container>
    );
}

const Container = styled.div`
position: absolute;
width: 1920px;
height: 900px;
background: #181818;

@media(max-width: 320px){
position: absolute;
width: 320px;
height: 1994.11px;
background: #181818
}
`;

const Vector = styled.div`
background: url("/images/vector.svg") center center / cover no-repeat fixed;
width: 1920px;
height: 900px;
left: -0.33px;
top: -0.45px;

@media(max-width: 320px){
background: none;
}
`;

const Description = styled.div`
h1{
position: absolute;
width: 586.36px;
height: 745.93px;
left: 100.15px;
top: 17.32px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 56px;
line-height: 90%;
color: #FFFFFF;

@media(max-width: 320px){
position: absolute;
width: 227px;
height: 73px;
left: 16.12px;
top: 17.32px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 100%;
color: #FFFFFF;
}
}
`;

const Desc = styled.div`
position: absolute;
width: 586.36px;
height: 474.25px;
left: 100.15px;
top: 257.52px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 170%;
color: #FFFFFF;

@media(max-width: 320px){
position: absolute;
width: 289.4px;
height: 474.25px;
left: 17.02px;
top: 123.75px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 170%;
color: #FFFFFF;
};
`;

const Body = styled.div`
position: absolute;
width: 435px;
height: 790.64px;
left: 742.5px;
bottom: 109.35px;
animation: animateDown infinite 1.5s;

@media(max-width: 320px){
position: absolute;
width: 289.4px;
height: 756.22px;
left: -60px;
top: 548.75px;
}
`;

const Circle = styled.div`
position: absolute;
width: 193.78px;
height: 61.14px;
left: 855.03px;
bottom: 48.21px;

@media(max-width: 320px){
position: absolute;
width: 193.78px;
height: 61.14px;
left: 63.93px;
top: 1274.4px;
}
`;

const Interface = styled.div`
position: absolute;
left: 1092.9px;
top: 0px;

@media(max-width: 320px){
display: none;
position: absolute;
width: 411.77px;
height: 424.09px;
top: 1351.23px;
left: -26.13px;
}
`;

const Say = styled.div`
position: absolute;
width: 210.63px;
height: 49.25px;
left: 100.15px;
top: 689.77px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 900;
font-size: 44.7911px;
line-height: 90%;
color: #FFFFFF;

@media(max-width: 320px){
position: absolute;
width: 181.77px;
height: 42.5px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 900;
font-size: 38.6546px;
line-height: 90%;
color: #FFFFFF;
left: 16.28px;
top: 1805.07px;
}
`;

const Okay = styled.div`
position: absolute;
width: 249.08px;
height: 56.89px;
left: 159.43px;
top: 756.97px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 61.4163px;
line-height: 90%;
color: #FFFFFF;

@media(max-width: 320px){
position: absolute;
width: 249.08px;
height: 56.89px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 61.4163px;
line-height: 90%;
color: #FFFFFF;
left: 10.05px;
top: 1856.27px;
}
`;

const Yamaguchi = styled.div`
position: absolute;
width: 374.14px;
height: 149.03px;
left: 396.69px;
top: 756.97px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 900;
font-size: 61.4163px;
line-height: 90%;
color: #FFFFFF;

@media(max-width: 320px){
position: absolute;
width: 303.72px;
height: 53.91px;
left: 16.28px;
top: 1926.86px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 900;
font-size: 49.8561px;
line-height: 90%;
color: #FFFFFF;
}
`;



export default VoiceControl;