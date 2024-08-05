import styles from "./circularProgressBar.module.css";

export function CircularProgressBar() {
  return (
    <div className={styles.circle_container}>
      <div className={styles.circle_svg}>
        <svg viewBox="0 0 102 102" width="97" height="97">
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
            strokeDasharray={262}
            strokeDashoffset={261}
            filter="url(#dropshadow)"
          />
        </svg>
      </div>
      <div className={styles.circle_outer}></div>
      <span>
        <p className={styles.percent}>97%</p>
      </span>
    </div>
  );
}
