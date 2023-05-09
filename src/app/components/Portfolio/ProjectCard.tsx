import { motion } from 'framer-motion';
import { PortfolioData } from 'models';
import React, { useState } from 'react';
import { fadeIn } from 'utils/motion';
import GithubIcon from 'assets/icons/github.png';
import { BiLink } from 'react-icons/bi';
import { FiZoomIn } from 'react-icons/fi';
import { ImageExplore } from '../Common';

interface Props {
  data: PortfolioData;
  index: number;
}

const ProjectCard = ({ data, index }: Props) => {
  const { video, image, url, gitHubLink, title, content, tags, category } =
    data;
  const [open, setOpen] = useState<boolean>(false);

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

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.div className="p-4 card-container" key={`${category}-${title}`}>
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
                <div className=" link-div" onClick={() => setOpen(true)}>
                  <FiZoomIn />
                </div>
              </div>
            </>
          )}
          <div className="link-wrapper">
            {gitHubLink && (
              <div className="github-link link-div">
                <a href={gitHubLink} target="_blank" rel="noreferrer">
                  <img
                    src={GithubIcon}
                    alt="github"
                    className=""
                    width={25}
                    height={25}
                  />
                </a>
              </div>
            )}
            {url && (
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
            )}
          </div>
        </div>
        <div className="content-div mt-3">
          <h3 className="">{title}</h3>
          <div className="content-section-div">
            <div className="mt-3">{content}</div>
            <div className="d-flex mt-4">
              {tags.length > 0
                ? tags.map((tag, index) => (
                    <div key={index} className="me-1 badge badge-div">
                      <div className="text-dark">#{tag}</div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </motion.div>
      <ImageExplore visible={open} onClose={onClose} />
    </>
  );
};

export default ProjectCard;
