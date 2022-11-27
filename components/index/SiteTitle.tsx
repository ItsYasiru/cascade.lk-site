import styles from "./SiteTitle.module.scss";

function SiteTitle() {
  return (
    <div className={styles.main}>
      <h1>
        Cascade
        <span
          data-bp-hide-tablet
          style={{
            left: "-20px",
            transform: "translateX(-100%)",
          }}
        />
        <span
          data-bp-hide-tablet
          style={{
            right: "-30px",
            transform: "translateX(100%)",
          }}
        />
        <label>Real estate consultants</label>
      </h1>

      <ScrollIndicator />
    </div>
  );
}

function ScrollIndicator() {
  return <span className={styles.ScrollIndicator} />;
}

export default SiteTitle;
