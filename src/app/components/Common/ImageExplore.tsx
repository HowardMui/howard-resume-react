import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import 'assets/scss/Components/Common/ImageExplore.scss';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const ImageExplore = ({ visible, onClose }: Props) => {
  return (
    <Modal
      className="fullscreen"
      isOpen={visible}
      closeTimeoutMS={100}
      ariaHideApp={false}
      contentLabel="dialog-overlay"
    >
      <div className="gallery-container">
        <div className="gallery-tool-bar">
          <div className="font-size-16 text-white">{'asd'}</div>
          <div className="d-flex flex-row">
            <Button onClick={onClose}>X</Button>
          </div>
        </div>
      </div>
      <div className="gallery-wrapper">
        <div className="swiper-container">
          {/* <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              lazy={false}
              modules={[Lazy, Navigation]}
              centeredSlides={true}
              initialSlide={index}
              onNavigationNext={onNextSlide}
              onNavigationPrev={onPrevSlide}
              autoplay={false}
              allowTouchMove={false}
            >
              {previewItems.map((item, slideIndex) => {
                return (
                  <SwiperSlide key={item.fileName}>
                    {renderSlide(item, slideIndex)}
                  </SwiperSlide>
                );
              })}
            </Swiper> */}
        </div>
      </div>
    </Modal>
  );
};
