import { useFormik, FormikConsumer } from 'formik'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import { useSession } from 'next-auth/client'


const FormWrap = styled.form`
display: flex;
flex-direction: column;
`
const initialValues = {
    name: '',
}

const onSubmit = async (values, session) => {
    values.email = session
    try{
        const reply  = await fetch('api/user', {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
            "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        //console.log(reply)
    } catch(e){console.log(e)}
}

const validate = (values) => {
    let errors = {}

    if(!values.name){
        errors.name = 'whoops! Please enter your name'
    }
    return errors
}


export default function Signup({session}) {
    const formik = useFormik({initialValues, onSubmit, validate})
    let email = '' 
    if (session){
        email = session.user.email
        console.log("EMAIL",email)
        initialValues.email = email       
    }
  return (
  <div>
    <FormWrap onSubmit={formik.handleSubmit}>
       <div className='form-control'>
       <label htmlFor="name">name</label>
       <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
       {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
       </div>

       {session && <> email: {session.user.email} <br/> </>}
       <button type='submit'>Submit</button>
   </FormWrap>
</div>
  )
}
