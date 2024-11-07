const { default: Link } = require("next/link");

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ABD7BE] sm:text-xl rounde md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};
export default NavLink;
