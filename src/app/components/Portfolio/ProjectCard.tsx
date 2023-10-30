import { motion } from 'framer-motion';
import { PortfolioData } from 'models';
import { useState } from 'react';
import { BiLink } from 'react-icons/bi';
// import { FiZoomIn } from 'react-icons/fi';
import { ImageExplore } from '../Common';

import { VscGithubInverted } from 'react-icons/vsc';

interface Props {
  data: PortfolioData;
  index: number;
}

const ProjectCard = ({ data, index }: Props) => {
  const { video, image, url, gitHubLink, title, content, tags, category } =
    data;
  const [open, setOpen] = useState<boolean>(false);

  const iconOnClick = (icon: string) => {
    window.open(icon, '_blank');
  };

  // const testTransform = () => {
  //   return {
  //     exit: {
  //       opacity: 0,
  //       scale: 0,
  //       transition: {
  //         type: 'spring',
  //         duration: 0.5,
  //       },
  //     },
  //     //   hide: {
  //     //     opacity: 0,
  //     //     scale: 0,
  //     //   },
  //     show: {
  //       opacity: 1,
  //       scale: 1,
  //       transition: {
  //         type: 'spring',
  //         duration: 0.5,
  //       },
  //     },
  //   };
  // };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.div className="card-container" key={`${category}-${title}`}>
        <div className="media-div">
          {video ? (
            <>
              <video muted loop autoPlay>
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
              {/* <div className="link-wrapper">
                <div className=" link-div" onClick={() => setOpen(true)}>
                  <FiZoomIn />
                </div>
              </div> */}
            </>
          )}
          <div className="link-wrapper">
            {gitHubLink && (
              <div className="github-link link-div">
                <VscGithubInverted onClick={() => iconOnClick(gitHubLink)} />
              </div>
            )}
            {url && (
              <div className="website-link link-div">
                <BiLink onClick={() => iconOnClick(url)} />
              </div>
            )}
          </div>
        </div>
        <div className="content-div mt-1 p-4">
          <h3 className="">{title}</h3>
          <div className="content-section-div">
            <div className="mt-3">{content}</div>
            <div className="d-flex mt-4 flex-wrap">
              {tags.length > 0
                ? tags.map((tag, index) => (
                    <span
                      key={index}
                      className="me-1 tag-wrapper mb-2"
                      style={{ background: tag.color }}
                    >
                      <p className="text-dark tag mb-0">#{tag.tag}</p>
                    </span>
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
