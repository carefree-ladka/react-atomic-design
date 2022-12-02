import Link from "../atoms/Link";
export default ({ link, text }: { link: string; text: string }) => (
  <div>
    <Link href={link} text={text} />
  </div>
);
