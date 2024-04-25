import image from '../../../assets/9xb5ejak-removebg-preview.png';

const GetInTouch = () => {
  return (
    <section id='get-in-touch'>
      <p className='get-in-touch-title'>
        Have something in mind?
        <span>
          <img src={image} className='get-in-touch-image' alt='' />
          let's build it together.
        </span>
      </p>
      <a href='' className='get-in-touch-btn'>
        Get In Touch
      </a>
    </section>
  );
};

export default GetInTouch;
