import styles from "./BindToViewPort.module.scss";

import type { CSSProperties } from "react";

function BindToViewPort({
  style,
  children,
}: {
  style?: CSSProperties;
  children: React.ReactNode;
}) {
  // Component to consume the full width & height of the window

  return (
    <div style={style ? style : {}} className={styles.main}>
      {children}
    </div>
  );
}

function BTVP_BottomSection({
  style,
  children,
}: {
  style?: object;
  children: React.ReactNode;
}) {
  return (
    <div style={style} className={styles.BottomSection}>
      {children}
    </div>
  );
}

export { BindToViewPort, BTVP_BottomSection };
export default BindToViewPort;
