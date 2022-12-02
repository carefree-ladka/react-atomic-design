import Projects from "../template/Projects";

const data = [
  {
    id: "kzsjezsmjdgjuxdgf,kxduf7489rw37488",
    text: "React",
    image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    link: "https://beta.reactjs.org/",
    content: "A JavaScript library for building user interfaces"
  },
  {
    id: "sdhzsjbvxndzvsdmjdgd,6q2t376u2r357w36",

    text: "Angular",
    image:
      "https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36",
    link: "https://angular.io/",
    content:
      "Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps."
  }
];

export default () => <Projects data={data} />;
