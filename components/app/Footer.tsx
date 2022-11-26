import Link from "next/link";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.main}>
      <p>
        © 2022 Cascade.lk all rights reserved - developed by{" "}
        <Link href='https://www.yasiru.dev' target='_blank'>
          <b>Yas_!_ru</b>
        </Link>
      </p>
    </footer>
  );
}
