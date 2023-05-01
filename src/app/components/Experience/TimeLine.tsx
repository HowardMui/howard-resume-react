import { TimeLineData } from 'models';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdSchool, MdWork } from 'react-icons/md';

interface Props {
  data: TimeLineData;
}

export const TimeLine = ({ data }: Props) => {
  //   console.log(data);

  return (
    <VerticalTimelineElement
      contentStyle={{
        // border: '1px solid red',
        // display: 'flex',
        // flex: 1,
        boxShadow: '0px 0px 30px rgba(127, 137, 161, 0.25)',
        borderRadius: '20px',
        // background: '#ffc107',
      }}
      contentArrowStyle={
        {
          // borderRight: '10px solid  rgba(230,230,230)',
          // borderRight: '20px',
          // border: '10px solid red',
          // boxShadow: '0px 0px 30px rgba(127, 137, 161, 0.25)',
        }
      }
      date={data.dateRange}
      style={{ color: '#000', border: '#FFFFFF' }}
      iconStyle={{
        background: '#FFFFFF',
        boxShadow: '#ffc107 0px 1px 4px, #ffc107 0px 0px 0px 3px',
      }}
      icon={
        <div className="w-100 h-100">
          {data.school ? <MdSchool /> : <MdWork />}
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
            <li key={index} className="py-3">
              {content}
            </li>
          ))}
      </ul>
    </VerticalTimelineElement>
  );
};
