import styled from 'styled-components';

const ButtonPrimary = styled.button`
background: linear-gradient(347.53deg, #BE76FD 14.57%, #A144F2 70.4%);
border-radius: 20px;
margin-top: 1rem;
margin-bottom: 1rem;
padding-left: 71px;
padding-right: 71px;
padding-top: 14px;
padding-bottom: 15px;
border-style: none;
color: #F6F6F6;
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 24px;

:hover{
    cursor: pointer;
    opacity: 0.75;
}
`
const ButtonSecondary = styled(ButtonPrimary)`
background: linear-gradient(348.26deg, #2F353A 18.56%, #1C1F22 90.55%);
box-shadow: -4px -4px 10px rgba(72, 78, 83, 0.3), 4px 4px 10px rgba(31, 36, 39, 0.6);
`

export { ButtonPrimary, ButtonSecondary }