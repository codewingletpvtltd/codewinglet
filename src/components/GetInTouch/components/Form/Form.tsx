import Textarea from '../../../Textarea';
import Button from '../../../Button';
import TextField from '../../../TextField';

const Form = () => (
  <div className='grid md:grid-rows-2 gap-[20px] md:col-span-2'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
      <TextField fullWidth label='Your Name' placeholder='Your Name' />
      <TextField fullWidth label='Email' placeholder='Email' />
      <TextField fullWidth label='Phone' placeholder='Phone' />
      <TextField
        fullWidth
        label='What service are you looking for?'
        placeholder='Web Design, Web Development'
      />
    </div>
    <Textarea fullWidth label='Message' placeholder='Your Message' />
    <Button>Submit</Button>
  </div>
);

export default Form;
