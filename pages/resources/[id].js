import { useRouter } from 'next/router'
const AirtablePlus = require('airtable-plus');


const Post = ({ post } ) => {
  const router = useRouter()
  const { pid } = router.query
  
  return <div>
            <h6>Post Fields: {Object.keys(post.fields)}</h6>
            <h2>{post.fields["Resource Title"]}</h2>
            <p>{post.fields["Summary"]}</p>
        </div>
}
  
  // This function gets called at build time
  export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const airtable = new AirtablePlus({
        baseID: process.env.AIRTABLE_BASE_ID,
        apiKey: process.env.AIRTABLE_API_KEY,
        tableName: 'Daily Action Content Database',
    });

    const getRecords = async () => {
        const allRecords =  await airtable.read()
        return allRecords
    }

    const recordList = await getRecords();
  
    // Get the paths we want to pre-render based on posts
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
        tableName: 'Daily Action Content Database',
    });

    const post = await airtable.find(`${params.id}`);
  
    // Pass post data to the page via props
    return { props: { post } }
  }

export default Post