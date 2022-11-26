import styles from "./NavBar.module.scss";

import type { CSSProperties } from "react";

export default function NavBar({
  style,
  children,
}: {
  style?: CSSProperties;
  children: Array<React.ReactNode>;
}) {
  return (
    <nav style={style} className={styles.main}>
      <ol>
        {children.map((e: React.ReactNode, i: number) => (
          <li key={i}>{e}</li>
        ))}
      </ol>
    </nav>
  );
}
