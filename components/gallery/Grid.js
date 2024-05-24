
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from './Grid.module.scss'

function Grid() {
  const url = [];

  for (let i = 1; i < 34; i++) {
    url.push({
      src: `/images/gallery/${i}.jpg`,
    });
  }
  return (
    <section className={styles.gallery}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 680: 2, 1020: 3, 1340: 4 }}>
      <Masonry>
        {url.map((src, idx) => {
          return <img src={src.src} key={idx} className={styles.container} />;
        })}
      </Masonry>
    </ResponsiveMasonry>
    </section>
  );
}

export default Grid