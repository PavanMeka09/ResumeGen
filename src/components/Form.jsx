import { useFormik } from 'formik';
import { Primary } from './ui/Buttons/Primary.jsx';

export const Form = () => {

  const data = {
      fullName: '',
      api: '',
      socials: {
        mobile: '', 
        email: '',
        website: '',
        linkedin: '',
        github: '',
        x: '',
      },
      summary: '',
      skills: [''],
      projects: [{
        name: '',
        tech: '',
        about: ['']
      }],
      education: [{
        course: '',
        college: '',
        start: '',
        end: '',
        location: '',
        result: ''
      }],
      xp: [{
        role: '',
        company: '',
        start: '',
        end: '',
        location: '',
        summary: ['']
      }],
      certifications: [''],
      acheivements: ['']
    };

  const formik = useFormik({
    initialValues: data,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='h-[80%] w-[80%] bg-red-200 flex justify-evenly items-center flex-col'>

      <div className='gap-4 flex'>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}