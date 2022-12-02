interface Image {
  src: string;
  alt: string;
  h: number;
  w: number;
}

export default ({ src, alt, h, w }: Image) => (
  <img src={src} alt={alt} height={h} width={w} />
);
