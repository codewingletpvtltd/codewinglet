import { SectionHeader, Typography } from '@codewinglet/components';
import './sass/contactmain.css';

const ContactUs = () => (
  <section className='our-expert'>
    <div className='container'>
      <SectionHeader
        title={<>Contact Us</>}
        description='Awesomeness awaits! Connect with our experts.'
        headingClassName='text-[22px]'
      />
      <div className='main-expert'>
        <div className='left'>
          <Typography variant='subtitle2' className='des'>
            If you are looking for a way to optimize your business processes and
            operations with data and analytics, talk to our business analytics
            expert now and learn how you can do it.
          </Typography>
          <iframe
            src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=codewinglet&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            id='gmap_canvas'
            className='w-[100%] h-[306px] md:h-[400px] lg:h-[470px]'
          ></iframe>
        </div>
        <div className='right'>
          <div className='form-2 wow fadeInUp' data-wow-duration='2s'>
            <h3 className='c-center'>Get in touch</h3>
            <p className='c-center'>
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
            <form>
              <span>
                <input
                  type='text'
                  className='input'
                  placeholder='Your name'
                  required
                />
              </span>
              <span>
                <input
                  type='text'
                  className='input'
                  placeholder='Email'
                  required
                />
              </span>
              <span>
                <input
                  type='text'
                  className='input'
                  placeholder='Phone number'
                  required
                />
              </span>
              <span>
                <input
                  type='text'
                  className='input'
                  placeholder='What service are you looking for?'
                  required
                />
              </span>
              <input
                type='submit'
                name='submit'
                id='submit'
                value='Submit'
                className='orange-btn'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
