import React from 'react';
import styled from 'styled-components';

function Table() {
    const tableUp = (e) => {
        document.getElementById('tableTop').classList.add('up');
        document.getElementById('tableBottom').classList.add('down');
    };

    const tableDown = (e) => {
        document.getElementById('tableTop').classList.remove('up');
        document.getElementById('tableBottom').classList.remove('down');
    };

    return (
        <Container>
            <TableTop><img src='images/tableUp.svg' alt='TableUp' id="tableTop"></img></TableTop>
            <TableDown><img src='images/tableDown.svg' alt='TableDown' id="tableBottom"></img></TableDown>
            <ButtonUp onClick={tableUp}><img src="images/btnUp.svg" alt="buttonUp"></img></ButtonUp>
            <BtnUpSpan>ВВЕРХ</BtnUpSpan>
            <ButtonDown onClick={tableDown}><img src="images/btnDown.svg" alt="buttonDown"></img></ButtonDown>
            <BtnDownSpan>ВНИЗ</BtnDownSpan>
            <Header>
                Эргономика — ключ к успеху современного человека
            </Header>
            <Description>
                Cтильная столешница , выполненной из экологически безопасного материала (ДСП), и усиленной стальной рамы не составит труда разместить на поверхности инновационного стола большое количество крупногабаритной техники: стол выдерживает нагрузку до 80 кг.
                Также столешница, обладающая меламиновым покрытием, хорошо переносит механические воздействия (царапины или удары), при контакте с водой не разрушается, устойчиво переносит бытовые химические вещества и не выгорает под воздействием ультрафиолета.
            </Description>
        </Container>
    );
};

const Container = styled.div`
  position: absolute;
    width: 1920px;
    height: 900px;
    left: 0px;
    top: 0px;
    background: #F3F3F3;
    font-family: 'Ubuntu', sans-serif;
`;

const TableTop = styled.div`
position: absolute;
width: 1476.76px;
height: 984.7px;
left: -247.75px;
top: -127.78px;

.up{
position: absolute;
top: -18px;

transition: all 2s ease-in-out;
-webkit-transition: all 2s ease-in-out; 
-moz-transition: all 2s ease-in-out; 
-o-transition: all 2s ease-in-out; 
transition-duration: 1s;
}
`;

const TableDown = styled.div`
position: absolute;
width: 1476.76px;
height: 984.7px;
left: -247.75px;
top: -127.78px;

.down{
position: absolute;
top: 60px;

transition: all 2s linear;
-webkit-transition: all 2s linear; 
-moz-transition: all 2s linear; 
-o-transition: all 2s linear; 
transition-duration: 1s;
}
`;

const ButtonDown = styled.button`
position: absolute;
width: 200.22px;
height: 200.22px;
left: 527.56px;
top: 391.45px;
border-radius: 50%;
border: none;
background: #A6FFFF;
`;

const BtnDownSpan = styled.span`
position: absolute;
width: 92.49px;
height: 83.68px;
left: 581.42px;
top: 449.71px;

font-family: 'Ubuntu';
font-style: normal;
font-weight: 300;
font-size: 40.1944px;
line-height: 170%;
/* or 68px */


color: #000000;
`;

const ButtonUp = styled.button`
position: absolute;
width: 200.22px;
height: 200.22px;
left: 253.49px;
top: 393.79px;
border-radius: 50%;
border: none;
background: #A6FFFF;
`;

const BtnUpSpan = styled.span`
position: absolute;
width: 112.11px;
height: 83.68px;
left: 297.54px;
top: 452.05px;

font-family: 'Ubuntu';
font-style: normal;
font-weight: 300;
font-size: 40.1944px;
line-height: 170%;
/* or 68px */

color: #000000;
`;

const Header = styled.h1`
position: absolute;
width: 646.75px;
height: 218.63px;
left: 1071.7px;
top: 25.59px;
font-family: 'Ubuntu';
font-style: normal;
font-weight: 300;
font-size: 62px;
line-height: 100%;
/* or 62px */
color: #0B64FE;
`;

const Description = styled.p`
position: absolute;
width: 500px;
height: 416px;
left: 1074.7px;
top: 312.45px;
font-family: 'Ubuntu';
font-style: normal;
font-weight: 300;
font-size: 22px;
line-height: 170%;
/* or 37px */
color: #181818;
`;

export default Table;