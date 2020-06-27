import Head from 'next/head'
import DefaultLayout from '../layouts';
import { useSession } from 'next-auth/client'
const AirtablePlus = require('airtable-plus');
const fetch = require('isomorphic-unfetch');

function Home( records ) {
  const [ session, loading ] = useSession()
  const content = records.records

  async function sendmail(){
   const response = await fetch('/api/sendmail', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify('this is the body')
    },
    console.log(response)
  )}

  const dummyRecords = [
    {'id':1, title: 'title1'},
    {'id':2, title: 'title2'},
    {'id':3, title: 'title3'},
  ]

  return (
    <div className="container">
      <DefaultLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Every Day Action</a>
        </h1>

        <p className="description">
          Make anti-Racism a Habit
        </p>
        <p>

          <button onClick={() => sendmail()}>My Button</button>

        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>{content[0].fields['Resource Title']} &rarr;</h3>
            by {content[0].fields['Author']}
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>{content[1].fields['Resource Title']} &rarr;</h3>

            {!content[0].fields['Author'] && <>
            <br></br>
        </>}
        {content[0].fields['Author'] && <>
         by {content[0].fields['Author']}
        </>}
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>{content[2].fields['Resource Title']} &rarr;</h3>
            by {content[2].fields['Author']}
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>{content[3].fields['Resource Title']} &rarr;</h3>
            <p>
              by {content[3].fields['Author']}
            </p>
          </a>
        </div>
      </main>

      <footer>
      <p>
        {!session && <>
          Not signed in <br/>
          <a href="/api/auth/signin">Sign in</a>
        </>}
        {session && <>
          Signed in as {session.user.email} <br/>
          <a href="/api/auth/signout">Sign out</a>
        </>}
      </p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #3C4C96;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #3C4C96;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #3C4C96;
          border-color: #3C4C96;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </DefaultLayout>
    </div>
  )

}

export async function getStaticProps() {
  const airtable = new AirtablePlus({
      baseID: AIRTABLE_BASE_ID,
      apiKey: AIRTABLE_API_KEY,
      tableName: 'Daily Action Content Database',
  });
  const homeFour = ['rec1O1Ytwuyxr9QjG', 'rec3UgGRmHx8JWHJe', 'recIQsRWPQLvXHwRj', 'recNYHwjOSaQu340a']
  const recordList = []

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const start = async () => {
  await asyncForEach(homeFour, async (record) => {
    const item = await airtable.find(record)
    recordList.push(item)
  });
  return recordList
}
const records = await start();

return {
  props: {
    records: records,
  },
}
}

export default Home
