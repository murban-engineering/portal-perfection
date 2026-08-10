import logoImg from "@/assets/murbanlogofinal_branding.png.asset.json";

const Logo = () => {
  return (
    <img src={logoImg.url} alt="MURBAN ENGINEERING LTD logo mark" className="h-10 md:h-12 w-auto object-contain shrink-0" />
  );
};

export default Logo;
