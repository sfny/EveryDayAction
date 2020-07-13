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
export default sendmail