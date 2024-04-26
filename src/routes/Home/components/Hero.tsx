import heroImg from '../../../assets/4af64137-c303-4961-98da-d823e005252c-removebg-preview.png';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={heroImg} className='hero-img' alt='' />
      <div className='hero-running-text'>
        - Software Engineer - Problem Developer - Under Development - 
      </div>
    </div>
  );
};

export default Hero;
