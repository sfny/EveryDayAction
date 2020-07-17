import Head from 'next/head'
import DefaultLayout from '../layouts';
import Card from '../lib/designsystem/HomeCard'
import styled from 'styled-components';
import { getLongform } from '../lib/getFromCMS'

const Outer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function Resources( recordlist ) {
  const records = recordlist

  return (
      <DefaultLayout>
      <Head>
        <title>Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <Outer>

        {records.myRecords.map((anObjectMapped, index) => {
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
const myRecords = await getLongform()
  return {
      props: {
        myRecords,
      },
    }
}