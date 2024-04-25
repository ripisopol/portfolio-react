import author1 from '../../../assets/images.jpeg';
import author2 from '../../../assets/images (1).jpeg';

const Testimonials = () => {
  return (
    <section className='two-column' id='testimonials'>
      <h2 className='section-title'>Testimonials</h2>
      <div className='testimonials-list'>
        <div className='testimonials-item'>
          <p className='testimonials-content'>
            “Approved.”
          </p>
          <div className='testimonials-author'>
            <img src={author2} className='wawan' alt='' />
            <div>
              <p className='testimonials-name'>Wawan uhuy</p>
              <p className='testimonials-role'>CEO @ marinakal</p>
            </div>
          </div>
        </div>
        <div className='testimonials-item'>
          <p className='testimonials-content'>
            “Approved.”
          </p>
          <div className='testimonials-author'>
            <img src={author1} className='paaji' alt='' />
            <div>
              <p className='testimonials-name'>Pa aji (calon)</p>
              <p className='testimonials-role'>CEO  @ marikemari</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
