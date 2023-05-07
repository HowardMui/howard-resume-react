import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { PortfolioData } from 'models';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { fadeIn } from 'utils/motion';

interface Props {
  data: PortfolioData;
  index: number;
}

const ProjectCard = ({ data, index }: Props) => {
  const { video, image, url, title, content, tags, category } = data;

  const testTransform = () => {
    return {
      exit: {
        opacity: 0,
        scale: 0,
        transition: {
          type: 'spring',
          duration: 0.5,
        },
      },
      //   hide: {
      //     opacity: 0,
      //     scale: 0,
      //   },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          duration: 0.5,
        },
      },
    };
  };

  return (
    <>
      <motion.div key={`${category}-${title}`}>
        <div className="video-div">
          {/* {video ? (
          <video
            className="needToZoom"
            muted
            loop
            autoPlay
            style={{ width: '100%', height: '100%' }}
          >
            <source src={video} />
          </video>
        ) : (
          'image'
        )} */}
        </div>
        <div className="">
          <div className="">{title}</div>
          <div className="">{content}</div>
          <div className="d-flex">
            {tags.length > 0
              ? tags.map((tag, index) => (
                  <Badge key={index}>
                    <div className="">#{tag}</div>
                  </Badge>
                ))
              : null}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
