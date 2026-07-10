import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "@/components/ui/logo-slider.module.css";

export type LogoSliderItem = {
  name: string;
  src: string;
  alt?: string;
};

export type LogoSliderProps = {
  logos: LogoSliderItem[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
};

function LogoTile({ item }: { item: LogoSliderItem }) {
  return (
    <div className={styles.tile}>
      <div className={styles.visual}>
        <div className={styles.imageWrap}>
          <Image
            src={item.src}
            alt={item.alt ?? item.name}
            width={72}
            height={72}
            unoptimized
            className={styles.image}
          />
        </div>
      </div>
      <span className={styles.label}>{item.name}</span>
    </div>
  );
}

export function LogoSlider({
  logos,
  speed = 60,
  direction = "left",
  className,
}: LogoSliderProps) {
  const repeatedLogos = [...logos, ...logos];
  const animationDuration = `${speed}s`;

  return (
    <div className={cn(styles.shell, className)}>
      <div className={`${styles.fade} ${styles.fadeLeft}`} />
      <div className={`${styles.fade} ${styles.fadeRight}`} />
      <div
        className={cn(
          styles.track,
          direction === "left" ? styles.left : styles.right,
        )}
        style={{ animationDuration }}
        aria-hidden="true"
      >
        {repeatedLogos.map((logo, index) => (
          <LogoTile key={`${logo.name}-${index}`} item={logo} />
        ))}
      </div>
    </div>
  );
}
