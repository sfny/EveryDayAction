import { useRouter } from 'next/router'
const AirtablePlus = require('airtable-plus');
import DefaultLayout from '../../layouts';
import styled from 'styled-components';
import Link from 'next/link'

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


const Post = ({ post } ) => {
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
    const airtable = new AirtablePlus({
        baseID: process.env.AIRTABLE_BASE_ID,
        apiKey: process.env.AIRTABLE_API_KEY,
        tableName: 'Long Form Website Content Database',
    });

    const getRecords = async () => {
        const allRecords =  await airtable.read()
        return allRecords
    }

    const recordList = await getRecords();

    const paths = await recordList.map((record) => ({
      params: { id: record.id.toString() },
    }))
    
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  // This also gets called at build time
  export async function getStaticProps({ params }) {
    // params contains the record `id`.

    const airtable = new AirtablePlus({
        baseID: process.env.AIRTABLE_BASE_ID,
        apiKey: process.env.AIRTABLE_API_KEY,
        tableName: 'Long Form Website Content Database',
    });

    const post = await airtable.find(`${params.id}`);
  
    // Pass post data to the page via props
    return { props: { post } }
  }

export default Post