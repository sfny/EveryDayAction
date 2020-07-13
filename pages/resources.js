import Head from 'next/head'
const fetch = require('isomorphic-unfetch');
const AirtablePlus = require('airtable-plus');
import DefaultLayout from '../layouts';
import Card from '../lib/designsystem/HomeCard'
import styled from 'styled-components';

const Outer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function Resources( recordlist ) {


  return (
      <DefaultLayout>
      <Head>
        <title>Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <Outer>

        {recordlist.records.map((anObjectMapped, index) => {
            if (anObjectMapped.fields['Resource Title']){
              return (
                <Card key={`${anObjectMapped.id}`} title={anObjectMapped.fields['Resource Title']} author={anObjectMapped.fields['Author']} id={anObjectMapped.id}/>
              );
            } else {
              console.log( 'empty title')
            }
          })}  

</Outer>
      </DefaultLayout>
  )
}

export async function getStaticProps() {
    const airtable = new AirtablePlus({
        baseID: process.env.AIRTABLE_BASE_ID,
        apiKey: process.env.AIRTABLE_API_KEY,
        tableName: 'Long Form Website Content Database',
    });

    const getRecords = async () => {
        const allRecords =  await airtable.read()
        return allRecords
    }

    const records = await getRecords();

    return {
      props: {
        records,
      }
    }
}