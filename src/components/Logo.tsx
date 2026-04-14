import logoImg from "@/assets/murbanlogo.ico";

const Logo = () => {
  return (
    <img src={logoImg} alt="Murban Engineering" className="w-9 h-9 md:w-10 md:h-10 object-contain shrink-0" />
  );
};

export default Logo;
