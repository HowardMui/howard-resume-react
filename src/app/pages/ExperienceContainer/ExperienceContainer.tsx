import { TimeLine } from 'app/components/Experience';
import { MT_JOURNEY } from 'constant';
import { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { MdOutlineAdd } from 'react-icons/md';

const ExperienceContainer = () => {
  const [timelineIndex, setTimeLineIndex] = useState<number>(3);

  const curTimelineIndex = () => {
    if (timelineIndex < MT_JOURNEY.length) {
      if (timelineIndex + 3 > MT_JOURNEY.length) {
        setTimeLineIndex(MT_JOURNEY.length);
      } else {
        setTimeLineIndex(timelineIndex + 3);
      }
    }
  };

  return (
    <div>
      <div>Experience</div>
      <VerticalTimeline lineColor={'#ffc107'} layout="2-columns">
        {MT_JOURNEY.slice(0, timelineIndex).map((exp, index) => (
          <TimeLine data={exp} key={index} />
        ))}
        {MT_JOURNEY.length !== timelineIndex && (
          <VerticalTimelineElement
            icon={
              <div
                className="text-white w-100 h-100"
                style={{ cursor: 'pointer' }}
              >
                <MdOutlineAdd />
              </div>
            }
            iconOnClick={curTimelineIndex}
            iconStyle={{
              background: '#3f51b5',
              // boxShadow: '#ffc107 0px 1px 4px, #ffc107 0px 0px 0px 3px',
              boxShadow:
                '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
            }}
          />
        )}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceContainer;
