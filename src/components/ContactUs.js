
import { useForm } from 'react-hook-form'
import content from './static/index.js';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../App.css';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const schema = yup.object().shape({
  username: yup.string().required("Input your name"),
  number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string()
  .required("Please enter your email")
  .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Only alphabets are allowed for this field "),
  usermessage: yup.string().required("Input your message"),
});
const ContactUs = () => {
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(schema)
    })
    const onSubmit = (data) => console.log(data);
    console.log(errors);
  return (
      <div class="antialiased bg-gray-300">
        <div class="">
          <h1 class="font-bold text-4xl tracking-wide p-2 text-gray-700">Inquiry Form</h1>
            <form class="w-1/2 md:w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onSubmit={handleSubmit(onSubmit)}>
            {content.inputs.map((input,key)=>{
              return(
              <div key={key}>
                <p>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2">{input.label}</label>
                </p>
                <p>
                  <input
                  class={input.class}
                  name={input.name}
                  type={input.type}
                  row={input}
                  ref={register}
                  />
                </p>
                <p class="errorForm text-red-600 text-xs font-bold">{errors[input.name]?.message}</p>
              </div>
              )
            })}
            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2">Your Message</label>
            <textarea ref={register} name="usermessage" class="appearance-none block w-full bg-gray-200
            text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3
            leading-tight focus:outline-none focus:bg-white focus:border-gray-500" row='5'></textarea>
            <p class="errorForm text-red-600 text-xs font-bold">{errors['usermessage']?.message}</p>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold align-center py-2 px-4 rounded-full display-flex justify-center"
              type=""
              >Submit</button>
          </form>
        </div>
      </div>
    );
}
export default ContactUs;