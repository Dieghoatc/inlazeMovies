import styles from "./circularProgressBarSmall.module.css";
import { useCircularProgressBar } from "./useCircularProgressBar";

interface CircularProgressBarProps {
  rated: number;
}

export function CircularProgressBarSmall({ rated }: CircularProgressBarProps) {
  const { result, percent } = useCircularProgressBar(rated);

  return (
    <div className={styles.circle_container}>
      {percent < 60 ? (
        <div>
          <div className={styles.circle_svg}>
            <svg viewBox="0 0 102 102" width="27" height="27">
              <defs>
                <filter id="dropshadow" height="180%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
                  <feOffset dx="2" dy="2" result="offsetblur" />
                  <feOffset dx="-2" dy="-2" result="offsetblur" />
                  <feFlood floodColor="#ffbb00" />
                  <feComposite in2="offsetblur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <circle
                className={styles.circle}
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#FF8800"
                strokeWidth={5.5}
                strokeDasharray={251}
                strokeDashoffset={result}
                filter="url(#dropshadow)"
              />
            </svg>
          </div>
          <div className={`${styles.circle_outer} ${styles.circle_outer_color_secondary_background}`}></div>
        </div>
      ) : (
        <div>
          <div className={styles.circle_svg}>
            <svg viewBox="0 0 102 102" width="27" height="27">
              <defs>
                <filter id="dropshadow" height="180%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
                  <feOffset dx="2" dy="2" result="offsetblur" />
                  <feOffset dx="-2" dy="-2" result="offsetblur" />
                  <feFlood floodColor="#4f9" />
                  <feComposite in2="offsetblur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <circle
                className={styles.circle}
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#61C864"
                strokeWidth={5.5}
                strokeDasharray={251}
                strokeDashoffset={result}
                filter="url(#dropshadow)"
              />
            </svg>
          </div>
          <div className={`${styles.circle_outer} ${styles.circle_outer_color_primary_background}`}></div>
        </div>
      )}

      <span className={styles.percent}>
        <p>{`${percent}%`}</p>
      </span>
    </div>
  );
}
