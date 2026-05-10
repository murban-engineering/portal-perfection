interface BrandWordmarkProps {
  className?: string;
  murbanClassName?: string;
  engineeringClassName?: string;
}

const BrandWordmark = ({
  className = "",
  murbanClassName = "",
  engineeringClassName = "",
}: BrandWordmarkProps) => {
  return (
    <span
      className={`inline-flex flex-col leading-none uppercase ${className}`}
      aria-label="MURBAN ENGINEERING LIMITED"
      style={{ fontFamily: "'Montserrat', 'Inter', system-ui, sans-serif" }}
    >
      <span
        className={`font-extrabold text-[#A60D0F] ${murbanClassName}`}
      >
        MURBAN
      </span>
      <span
        className={`font-medium text-[#213164] ${engineeringClassName}`}
      >
        ENGINEERING LIMITED
      </span>
    </span>
  );
};

export default BrandWordmark;
