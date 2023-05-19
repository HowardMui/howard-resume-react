import { TimeLineData } from 'models';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
// import { MdSchool, MdWork } from 'react-icons/md';

interface Props {
  data: TimeLineData;
}

export const TimeLine = ({ data }: Props) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        boxShadow: '0px 0px 30px rgba(127, 137, 161, 0.25)',
        borderRadius: '20px',
      }}
      date={data.dateRange}
      style={{ color: '#000', border: '#FFFFFF' }}
      iconStyle={{
        background: '#FFFFFF',
        boxShadow: '#ffc107 0px 1px 4px, #ffc107 0px 0px 0px 3px',
      }}
      icon={
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          {data.icon}
        </div>
      }
    >
      <div>
        <h3 className="text-dark fs-4 fw-bold">{data.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {data.company ? data.company : data.school}
        </p>
      </div>

      <ul className="mt-3">
        {data.description &&
          data.description.map((content, index) => (
            <li key={index} className="py-2">
              {content}
            </li>
          ))}
      </ul>
    </VerticalTimelineElement>
  );
};
