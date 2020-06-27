  
import Link from 'next/link'
import DefaultLayout from '../layouts';
import styled from 'styled-components';

const AirtablePlus = require('airtable-plus');

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: rgba(0, 0, 0, .1);
box-shadow: 4px 11px #3C4C96;
border-radius: 8px;
width: 360px;
height: 16rem;
margin: 1rem;
padding: 1rem;
p{
  line-height: 16px;
  margin: .25rem;
}
h6{
  margin: .25rem;
}
`

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`

function Test({ records }) {
    console.log("ONE: "+Object.keys(records[0].fields))
  return (
      <DefaultLayout>
        <Container>
      {records.map(function(d, idx){
         return (<Card>
                        <h3 key={idx}>{"Title: "+d.fields['Resource Title']}</h3>
                        <p key={idx}>{"Theme: "+d.fields['Theme']}</p>
                        <p key={idx}>{"Author: "+d.fields['Author']}</p>
                        <p key={idx}><a href={d.fields.URL}>link</a></p>
                        <p key={idx}>{"Category: "+d.fields['Action Category']}</p>
                        <h6 key={idx}>{"id: "+d.id}</h6>
                </Card>)
       })}
       </Container>
      </DefaultLayout>
  )
}

export async function getStaticProps() {
    const airtable = new AirtablePlus({
        baseID: 'appYPf1EbZC6Q4wap',
        apiKey: 'keyDklevGNYkASXBt',
        tableName: 'Daily Action Content Database',
    });
    
    const records = await airtable.read()

  return {
    props: {
      records: records,
    },
  }
}

export default Test