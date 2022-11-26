import styles from "./BindToViewPort.module.scss";

export default function BindToViewPort({
  style,
  children,
}: {
  style?: object;
  children: React.ReactNode;
}) {
  // Component to consume the full width & height of the window

  return (
    <div style={style ? style : {}} className={styles.main}>
      {children}
    </div>
  );
}
