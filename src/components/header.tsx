import Cta from "../components/cta";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <>
      <div>
        <nav className="py-6 flex items-center justify-between">
          <img src="https://i.imgur.com/gJlIbA2.png" alt="" />
        </nav>
      </div>
    </>
  );
};

export default Header;
