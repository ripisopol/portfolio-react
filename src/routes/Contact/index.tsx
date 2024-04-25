import image from '../../assets/9xb5ejak-removebg-preview.png';

const Contact = () => {
  return (
    <main id='contact'>
      <div className='contact-info'>
        <img src={image} className='contact-image' alt='' />
        <div className='contact-details'>
          <h2>Contact Details</h2>
          <a href='mailto:mail.ripisopol.com'>
            mail@ripisopol.com
          </a>
          <a href='tel:+62 123456789'>+62 123456789</a>
        </div>
        <div className='contact-socials'>
          <h2>Social</h2>
          <a href='https://www.linkedin.com/in/rizalsolihin/' target='_blank'>LinkedIn</a>
          <a href='https://www.instagram.com/ripisopol/'target='_blank'>Instagram</a>
          <a href='https://www.x.com/ripisopol/' target='_blank'>X</a>
        </div>
      </div>
      <div className='contact-form'>
        <h1>Let's build something cool together</h1>
        <form>
          <div className='contact-input-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='John Doe'
              className='contact-input'
            />
          </div>
          <div className='contact-input-group'>
            <label htmlFor='name'>Email</label>
            <input
              type='text'
              placeholder='mail.ripisopol.com'
              className='contact-input'
            />
          </div>
          <div className='contact-input-group'>
            <label htmlFor='name'>Subject</label>
            <input
              type='text'
              placeholder='For web design work Enquire'
              className='contact-input'
            />
          </div>
          <div className='contact-input-group'>
            <label htmlFor='name'>Message</label>
            <textarea
              rows={5}
              placeholder='Type your Message'
              className='contact-input'
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
