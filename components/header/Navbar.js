import styles from "./Navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  return (
    <header className={styles.header}>
      <address className={styles.address}>
        <span>012-3846579 | cme-camproject.online</span>
      </address>
      <nav>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <img src={"/images/logo.png"} />
            </div>
          </a>
        </Link>
        <ul className={styles.navContainer}>
          <Link href="/">
            <a>
              <li>About Us</li>
            </a>
          </Link>
          <Link href="/archives">
            <a>
              <li>Archives</li>
            </a>
          </Link>
          <Link href="/gallery">
            <a>
              <li>Gallery</li>
            </a>
          </Link>
          <Link href="/videoGallery">
            <a>
              <li>Video Gallery</li>
            </a>
          </Link>
          <Link href="/upload">
            <a>
              <div className={styles.contriBtn}>Upload</div>
            </a>
          </Link>
          <Link href="/delete">
            <a>
              <div className={styles.contriBtn}>Delete</div>
            </a>
          </Link>
          <Link href="/contact_us">
            <a>
              <li>Contact Us</li>
            </a>
          </Link>
        </ul>
        <span
          className={styles.hamburgerMenu}
          onClick={() => {
            setIsMounted((v) => !v);
          }}
        >
          <MenuIcon className={styles.mobMenu} />
        </span>
      </nav>
      {isMounted && <MobileMenu />}
    </header>
  );
}

export default Navbar;
