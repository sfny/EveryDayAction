import styled from 'styled-components';
import Link from 'next/link';

const Everything = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const TopNavBG = styled.div`
display: flex;
justify-content: ${props => props.justifycontent || "space-between"};
vertical-align: middle;
padding-left: 2rem;
padding-right: 2rem;
@media (max-width: 800px) {
  flex-direction: column;
  justify-content: center;
  height: 100%;
  }
`

const Logo = styled.h1`
display: flex;
justify-content: center;
a{ text-decoration: none;
    color: #3C4C96;}
`;

const OutlineLogo = styled.div`
margin-right: 4rem;
`

const TopNavMenu = styled.ul`
  display: flex;
  align-self: flex-end;
  list-style-type: none;
  overflow: hidden;
  vertical-align: middle;
  padding-left: 0px;
  
  @media (max-width: 800px) {
  align-self: center;
  margin-top: -.8rem;
  }
`;

const BottomNavMenu = styled(TopNavMenu)`
margin-top: 3rem;
margin-bottom: 3rem;
@media (max-width: 800px) {
  align-self: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  }
`

const NavListItem = styled.li `
  display: inline;
  padding: .75rem;
  font-size: 15px;
  font-style: normal;
  font-weight: bold;
  a{ text-decoration: none;
  color: #3C4C96}
  a:hover{
    color: #FFB001;
    transition-delay:.05s;
  } 
`

const DefaultLayout = ({ children }) => (
    <Everything>
    <header>
    <TopNavBG>
    
    <Logo><Link href="/"><a text-decoration="none">EDA</a></Link> </Logo>
    

    <TopNavMenu>
    
        <NavListItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/mission">
            <a>Mission</a>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/longform">
            <a>LongForm</a>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </NavListItem>
    </TopNavMenu>
    </TopNavBG>
    </header>
    <main>{children}</main>
    <footer>
        <TopNavBG justifycontent="space-around">
        <BottomNavMenu>
              <NavListItem >
                <Link href="/terms">
                  <a>Terms</a>
                </Link>
              </NavListItem>
              <NavListItem borderright="none">
                <Link href="/privacy">
                  <a>Privacy</a>
                </Link>
              </NavListItem>
          </BottomNavMenu>
          </TopNavBG>
    </footer>
    </Everything>
  );
  
  export default DefaultLayout;