import styles from "./FixedContainer.module.scss";

import type { CSSProperties } from "react";

function FixedContainer({
  style = {},
  children,
}: {
  style?: CSSProperties;
  children: Array<React.ReactNode> | React.ReactNode;
}) {
  return (
    <div style={style} className={styles.main}>
      {children}
    </div>
  );
}

export default FixedContainer;
