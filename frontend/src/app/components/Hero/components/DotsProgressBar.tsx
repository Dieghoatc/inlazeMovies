import styles from "./dotsProgressBar.module.css";

interface Dots {
  name: string;
  state: string;
}

export function DotsProgressBar() {
  const toggleCle = "on";
  const dots: Dots[] = [
    { name: "dot1", state: "off" },
    { name: "dot2", state: "off" },
    { name: "dot3", state: "off" },
    { name: "dot4", state: "off" },
    { name: "dot5", state: "off" },
  ];

  return (
    <div className={styles.dots_container}>
      {toggleCle ? (
        <div className={`${styles.squircle} ${styles.squircle_on}`}></div>
      ) : (
        <div className={`${styles.squircle} ${styles.squircle_off}`}></div>
      )}

      {dots.map((data) => {
        return (
          <div key={data.name}>
            {data.state === "off" ? (
              <div className={`${styles.dot} ${styles.dot_off}`}></div>
            ) : (
              <div className={`${styles.dot} ${styles.dot_on}`}></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
