import logoImg from "@/assets/murban-logo-full.png";

const Logo = () => {
  return (
    <img
      src={logoImg}
      alt="Murban Engineering"
      className="h-9 md:h-12 w-auto object-contain shrink-0"
    />
  );
};

export default Logo;
