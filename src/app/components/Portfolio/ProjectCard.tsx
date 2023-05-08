import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { PortfolioData } from 'models';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { fadeIn } from 'utils/motion';
import GithubIcon from 'assets/icons/github.png';
import { BiLink } from 'react-icons/bi';
import { FiZoomIn } from 'react-icons/fi';

interface Props {
  data: PortfolioData;
  index: number;
}

const ProjectCard = ({ data, index }: Props) => {
  const { video, image, url, gitHubLink, title, content, tags, category } =
    data;

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
      <motion.div className="p-4" key={`${category}-${title}`}>
        <div className="media-div">
          {video ? (
            <>
              <video
                className="needToZoom"
                muted
                loop
                autoPlay
                style={{ width: '100%', height: '100%' }}
              >
                <source src={video} />
              </video>
              <div className="link-wrapper">
                <div className="github-link link-div">
                  <a
                    href={gitHubLink ? gitHubLink : ''}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={GithubIcon}
                      alt="github"
                      className=""
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
                <div className="website-link link-div">
                  <a
                    href={url ? url : ''}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <BiLink />
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                src={image ? image : ''}
                alt=""
                width={'100%'}
                height={'100%'}
              />
              <div className="link-wrapper">
                <div className=" link-div">
                  <FiZoomIn />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="content-div mt-4">
          <h3 className="">{title}</h3>
          <div className="mt-3">{content}</div>
          <div className="d-flex mt-4">
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
