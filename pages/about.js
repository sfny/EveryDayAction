import Head from 'next/head'
import { useSession } from 'next-auth/client'
import DefaultLayout from '../layouts';
import Signup from '../lib/signup';

export default function About() {
  const [ session, loading ] = useSession()

  return (
    <div className="container">
        <DefaultLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1>About</h1>
      <div className="textArea">
      <p>Instances of police brutality against people of color in the past decade have caused widespread outrage and released waves of protests which challenged the nation’s consciousness. Regrettably, some time after each of these tragic instances (Eric Garner, Laquan McDonald, Philando Castile, Tamir Rice, Trayvon Martin, Sandra Bland among many others) the outrage dies down and American life returns to its status quo. The harsh reality is that systemic oppression does not conclude for a significant portion of the population just because the media cycle has moved on to the next hot news item.</p>
      <p>Non-BIPOC must make anti-racism a part of our daily lives to combat the centuries of inequality our Nation’s legacy systems have perpetuated. In committing to taking at least one action per day, Every Day Action’s users are equipped with the knowledge to begin reversing the legacy and impact of systemic racism in their societies. </p>
      <p>The Every Day Action platform suggests daily actions that can educate a user on the history of systemic racial injustice, prompt support for an organization working on the front lines, or even direct to petitions demanding justice for the families of victims.</p>
      <p>We do not create nor own any original content. There are thousands of Black community leaders, educators, and activists who are experts and whose voices we aspire to elevate to be heard above all.</p>
      <p>Every Day Action is the platform that connects these two pieces, preparing YOU to take on racism and inequality in your workplaces, homes, schools, and wherever else you might find it.</p>
      <p>If you have questions or feedback, please reach out to us at everydayaction@gmail.com</p>

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
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .textArea {
          width: 50%;
          min-width: 800px;
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
          color: #0070f3;
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
          color: #0070f3;
          border-color: #0070f3;
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
