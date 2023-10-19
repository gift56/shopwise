import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navIcons = [
    {
      icon: "/assets/icons/search.svg",
      alt: "search",
    },
    {
      icon: "/assets/icons/black-heart.svg",
      alt: "heart",
    },
    {
      icon: "/assets/icons/user.svg",
      alt: "user",
    },
  ];

  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1 select-none">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={27}
            height={27}
          />
          <p className="nav-logo">
            Shop<span className="text-primary">Wise</span>
          </p>
        </Link>
        <div className="flex items-center gap-5"></div>
      </nav>
    </header>
  );
};

export default Navbar;
