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
        <div className="flex items-center gap-5">
          {navIcons.map((item) => (
            <div
              key={item.alt}
              className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-200 transition-all duration-300"
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={28}
                height={28}
                className="object-contain cursor-pointer"
              />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
