import { useRouter } from 'next/router'
import DefaultLayout from '../../layouts';
import styled from 'styled-components';
import Link from 'next/link'
import absoluteUrl from "next-absolute-url";
import fetch from 'isomorphic-unfetch'
import { getLongform } from '../../lib/getFromCMS'


const Outer = styled.div`
display: flex;
justify-content: center;
`

const Background = styled.div`
    min-height: 750px;
    margin: 1rem;
    padding: 1.5rem;
    max-width: 50%;
    color: #F6F6F6;
    background: linear-gradient(180deg, #2E3138 0.35%, #3D4148 192.77%);
    border-radius: 16px;
    box-shadow: 4px 4px 16px #1F2427;
    a {
        text-decoration: none;
        color: #A144F2;
        }
    h5{
    margin-right: 1rem;
    color: rgba(255,255,255,0.70)
}
`
const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: ${props => props.top || ".5rem"};
margin-bottom: ${props => props.top || ".5rem"};
`

const ColSimple = styled.div`
flex-direction: column;
max-width: 600px;
`
const Section = styled.div `
display: flex;
flex-direction: row;
align-items: baseline;
`


const Post =  ({ record }) => {
  console.log(typeof(record))
    const post = record

  const {
        "Summary": summary,
        "Theme": theme,
        "Action Category": actionCategory,
        "Action Sub-Category": actionSubCategory,
        "Author": author,
        "Proficiency": proficiency,
        "URL": url,
        "Aggregator": aggregator,
        "Source": source

    } = post.fields
  
  return ( 
    <DefaultLayout>
        <Outer>
             <Background>
             <Row>
                    <h2>{post.fields["Resource Title"]}</h2>
                </Row>
                <Row>
                    <ColSimple>
                        <h5>Summary:</h5><p>{summary}</p>
                        <Section><h5>Theme:</h5><p>{theme}</p></Section>
                        <Section><h5>Action Category:</h5><p>{actionCategory}</p></Section>
                        <Section><h5>Sub-category:</h5><p>{actionSubCategory}</p></Section>
                        <Section><h5>Author:</h5><p>{author}</p></Section>
                        <Section><h5>Proficiency:</h5><p>{proficiency}</p></Section>
                        <Section><h5>URL:</h5><a href={url ? url.toString(): ""}>{url}</a></Section>
                        <Section><h5>Aggregator:</h5><p>{aggregator}</p></Section>
                        <Section><h5>Source:</h5><p>{source}</p></Section>
                    </ColSimple>
                </Row> 
            </Background>
        </Outer>
    </DefaultLayout>
  )
}

export async function getStaticPaths() {

  //const res = await getLongform()
  //const myRecords = await res
  try{

  const url = process.env.AIRTABLE_URL_LONGFORM
    const data = await fetch(url, {
        "headers": {"Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`}
    })
    .then(res => res.json())
    .then((data) => {
        return data.records
    })

  const paths = await data.map((post) => ({
    params: { id: post.id },
  }))


  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
catch(e){console.log(e)}
}

export async function getStaticProps({ params }) {
    const myRecords = await getLongform()

    const record = await myRecords.find(rcrd => rcrd.id == params.id); 

      return {
          props: {
                record
          },
        }
    }

export default Post