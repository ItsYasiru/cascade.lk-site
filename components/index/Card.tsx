import styles from "./Card.module.scss";

import { textToID } from "../../utility/stringFormatting";

import type { CSSProperties } from "react";

function Card({
  title,
  id = null,
  style = {},
  children,
}: {
  id?: string | null;
  title: string;
  style?: CSSProperties;
  children: Array<React.ReactNode> | React.ReactNode;
}) {
  return (
    <div id={id ? id : textToID(title)} style={style} className={styles.main}>
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

export default Card;
