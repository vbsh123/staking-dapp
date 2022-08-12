import { Formik, FormikHelpers, Form, Field } from 'formik';
import DatePickerField from './date-picker-field';
import { ToastContainer, toast } from 'react-toastify';
import Notifier from '../../notifications/notifier';
type EventProperties = {
    eventName: string,
    eventDate: Date,
    maximumParticipants: number,
}

function CreateEventForm() {
    const notifyEventCreated = () => toast("Created Event!");

    return (
        
        <div className='w-full h-full flex flex-col items-center justify-center'>
        <Notifier></Notifier>
        <Formik
          initialValues={{
            eventName: '',
            eventDate: new Date(),
            maximumParticipants: 10,
          }}
          onSubmit={(
            values: EventProperties,
            { setSubmitting }: FormikHelpers<EventProperties>
          ) => {
            notifyEventCreated()
            setSubmitting(false);
          }}
        >
        {({ values, setFieldValue }) => (
          <Form className='flex flex-col justify-center items-center h-4/5 w-1/5'>
          <div className='bg-[#212121] border-2 border-red-200 text-white rounded-xl w-full h-full flex flex-col justify-center items-center'>
            <div className='text-3xl mb-5 text-white'>Create Event</div>
            <label htmlFor="Event Name" className='m-1 text-[#929292]'>Event Name</label>
            <Field name="eventName" className="m-1 text-white h-10 rounded-lg pl-2 border-red-200 border-2 bg-[#383838]" />

            <label htmlFor="Event Date" className='text-[#929292] m-1'>Event Date</label> 
            <DatePickerField name="eventDate" value={values.eventDate} onChange={setFieldValue}/> 
            
            <label htmlFor="Maximum Participants" className='text-[#929292] m-1'>Maximum Participants</label>
            <Field name="maximumParticipants" className="text-white m-2 rounded-lg pl-1.5 border-red-200 border-2 bg-[#383838] w-16 " /> 
            
            </div>   
            <button type="submit" className='bg-red-200 text-white text-sm w-24 h-10 text-black rounded-md mt-5'>Create Event</button>
          </Form>
          )}
        </Formik>
      </div>
    )
}    

export default CreateEventForm;