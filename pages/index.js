import Head from 'next/head'
import DefaultLayout from '../layouts';
import { useSession } from 'next-auth/client'
import styled from 'styled-components';

import {ButtonPrimary, ButtonSecondary} from '../lib/designsystem/Button'
import HomeImage from '../public/Illustration.svg'
import CheckMark from '../public/check_EDA.svg';
import {CheckY, CheckB, CheckP} from '../lib/designsystem/Checkmark'
import HomeCard from '../lib/designsystem/HomeCard'

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: ${props => props.top || ".5rem"};
margin-bottom: ${props => props.top || ".5rem"};
`

const SimpleBox = styled.div`
display: flex;
justify-content: center;
padding: 2rem;
min-width: 300px;
`

const ColSimple = styled.div`
flex-direction: column;
`

const ImageWrap = styled.div`
margin-top: 2rem;
min-height: 300px;
`

const LineDiv = styled.div`
height: .15rem;
width: 80%;
margin: 6rem;
border-radius: 1rem;
background: linear-gradient(274.82deg, #A144F2 24.94%, #B467F7 109.98%);
box-shadow: 0px 4px 8px rgba(161, 68, 242, .6);
`


const Tile = styled.div`
  padding: 1.5rem;
  width: ${props => props.width || "400px"};
  background: #2C2F32;
  border-radius: 16px;
  box-shadow: 4px 4px 16px #1F2427;
  display: flex;
  flex-direction: column; 
  margin: 2rem;
  align-items: center;
  justify-content: center;
  line-height: 16px;
  height: 208px;
  p{
    color: rgba(255, 255, 255, 0.70);
  }
  h3{
    margin: 0px;
  }
`

function Home( records ) {
  const [ session, loading ] = useSession()

  return (
      <DefaultLayout>
      <Head>
        <title>Every Day Action</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Row>
          <SimpleBox>
            <ColSimple>
              <h1 className="title">Every Day Action</h1>
              <h3>make anti-racism a habit</h3>
              <ButtonPrimary>Get Started</ButtonPrimary> <br></br>
              <ButtonSecondary>Login</ButtonSecondary>
            </ColSimple>
          </SimpleBox>
          <SimpleBox>
            <ImageWrap>
              <HomeImage/>
            </ImageWrap>
          </SimpleBox>
        </Row>
        <Row>       
          <h2>How It Works</h2></Row>
        <Row >
          <Tile width="222px"> 
            <CheckY>
              <CheckMark/>
            </CheckY>
            <p>Step 1</p>
          <h3>Sign up</h3>
        </Tile>
          <Tile width="222px"> 
            <CheckB>
              <CheckMark/>
            </CheckB>
          <p>Step 2</p>
            <h3>Get Action Prompt</h3>
          </Tile>
          <Tile width="222px"> 
            <CheckP>
              <CheckMark/>
            </CheckP>
          <p>Step 3</p>
          <h3>Take Action</h3>
          </Tile>
        </Row>
        <Row>
           <LineDiv/>
        </Row>
        <Row>
          <h2>Past Actions</h2>
        </Row>
        <Row>
          <HomeCard title={"Title One"} author={"Author One"}/>
          <HomeCard title={"Title Two"} author={"Author Two"}/>
        </Row>
        <Row>
        <HomeCard title={"Title Three"} author={"Author Three"}/>
        <HomeCard title={"Title Four"} author={"Author Four"}/>
        </Row>
      </main>
    </DefaultLayout>
  )
}

export default Home
