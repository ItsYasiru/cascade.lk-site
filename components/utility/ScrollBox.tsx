import styles from "./ScrollBox.module.scss";

import type { CSSProperties } from "react";

function ScrollBox({
  style = {},
  children,
}: {
  style?: CSSProperties;
  children: Array<React.ReactNode>;
}) {
  if (typeof window != "undefined") {
    window.addEventListener("wheel", () => {
      console.log("test");
    });
  }

  return (
    <div style={style} className={styles.main}>
      <div className={styles.cast}>
        {children.map((e: React.ReactNode, i: number) => (
          <div key={i} className={styles.scrollContainer}>
            {e}
          </div>
        ))}
      </div>

      <span className={styles.scrollIndicator}>
        <span />
      </span>
    </div>
  );
}

function SB_Card({
  title,
  id = null,
  style = {},
  children,
}: {
  id?: string | null;
  title: string;
  style?: CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id ? id : title.replaceAll(" ", "-").toLowerCase()}
      style={style}
      className={styles.scrollCard}
    >
      {title ? (
        <h2>
          {title}
          <span />
          <span />
        </h2>
      ) : null}
      {children}
    </div>
  );
}

export { ScrollBox, SB_Card };
export default ScrollBox;
