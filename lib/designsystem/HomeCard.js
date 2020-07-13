import styled from 'styled-components';
import Link from 'next/link';


const CardWrap = styled.div`
 margin: 1rem;
  padding: 1.5rem;
  width: ${props => props.width || "400px"};
  text-align: left;
  color: #F6F6F6;
  text-decoration: none;
  background: linear-gradient(180deg, #2E3138 0.35%, #3D4148 192.77%);
  border-radius: 16px;
  box-shadow: 4px 4px 16px #1F2427;
  a {
    text-decoration: none;
    color: #F6F6F6;
    }
  :hover{
    cursor: pointer;
    background: linear-gradient(347.53deg, #BE76FD 14.57%, #A144F2 70.4%);
    border-color: #4495F2;
  }
`

const HomeCard = (props) => {
    return (
      <Link href={"resources/"+props.id}> 
        <CardWrap>
         
          <a>
              <h3>{props.title}</h3>
              {!props.author ? <p> </p> : <p>by {props.author}</p>} 
              </a>
              
        </CardWrap>
        </Link> 
    )};
   
  export default HomeCard;
