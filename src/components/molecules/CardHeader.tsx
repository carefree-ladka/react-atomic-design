import Image from "../atoms/Image";
export default ({ src }: { src: string }) => (
  <div>
    <Image src={src} alt="React library" h={200} w={200} />
  </div>
);
