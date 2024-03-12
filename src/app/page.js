import Image from "next/image";
import styles from "./home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <p>
          Creative Thoughts Agency is a dynamic and innovative hub that thrives
          on the boundless possibilities of imagination. Committed to harnessing
          the power of creativity, this agency serves as a catalyst for
          transformative ideas, seamlessly merging artistic expression with
          strategic thinking. With a team of visionary minds, the agency is
          dedicated to crafting compelling narratives, visually stunning
          designs, and breakthrough concepts that leave an indelible mark on the
          audience. From brand storytelling to immersive experiences, Creative
          Thoughts Agency specializes in weaving together a tapestry of ideas
          that captivate, inspire, and resonate.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.png" alt="hero" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
