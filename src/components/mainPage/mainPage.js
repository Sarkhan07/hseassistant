import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './mainPage.scss';
import girl from '../../resources/img/girl.jpg';
import training from '../../resources/img/training.jpg';

function MainPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={girl} alt="First slide" />
          <p className='imgText'>Bizimlə işləməklə siz təkcə əməyin mühafizəsi sənədlərinin yüksək keyfiyyətli işlənib hazırlanmasını deyil, həm də biznesinizi etibarlı mühafizə ilə təmin etməyə hazır olan tərəfdaş əldə edirsiniz.</p>
      </Carousel.Item>
      <Carousel.Item>
          <img src={training} alt="third slide" /> 
          <p className='imgText'>
            Təhlükəsizlik qaydalarına riayət etmək həyata və rifaha qoyulan sərmayədir.
          </p>
      </Carousel.Item>
    </Carousel>
  );
}


export default MainPage;