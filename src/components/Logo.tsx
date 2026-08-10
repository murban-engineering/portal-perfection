import logoImg from "@/assets/murban-logo.png";

const Logo = () => {
  return (
    <img
      src={logoImg}
      alt="MURBAN ENGINEERING LTD logo mark"
      className="h-10 md:h-12 w-auto object-contain shrink-0"
    />
  );
};

export default Logo;
