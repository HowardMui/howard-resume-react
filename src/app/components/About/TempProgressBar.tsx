import { motion, animate } from 'framer-motion';
import './progressbar.css';
import { useEffect, useRef } from 'react';

interface Props {
  value: number;
}

interface ProgressInput {
  textContent: string | null;
}

export const TempProgressBar = ({ value }: Props) => {
  const progressTextRef = useRef<ProgressInput | null>(null);
  useEffect(() => {
    const progressText = progressTextRef.current?.textContent;
    if (progressText != null) {
      animate(parseInt(progressText), value, {
        duration: 2,
        onUpdate: cv => {
          progressTextRef.current!.textContent = cv.toFixed(0);
        },
      });
    }
  }, [value]);
  return (
    <div className="progressbar-container">
      <div className="progressbar">
        <motion.div
          className="bar"
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 2,
          }}
        />
      </div>
      <div className="progressbar-text-container">
        <p ref={progressTextRef.current?.textContent}>0</p>
        <p>%</p>
      </div>
    </div>
  );
};
