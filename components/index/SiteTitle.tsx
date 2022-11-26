import styles from "./SiteTitle.module.scss";

export default function SiteTitle() {
  return (
    <div className={styles.main}>
      <h1>Cascade</h1>
      <label>Real estate consultants</label>

      <span style={{ left: "-20px", transform: "translateX(-100%)" }} />
      <span style={{ right: "-30px", transform: "translateX(100%)" }} />
    </div>
  );
}
