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
      aria-label="MURBAN ENGINEERING LTD"
      style={{ fontFamily: "'Montserrat', 'Inter', system-ui, sans-serif" }}
    >
      <span
        className={`font-extrabold text-[#C73545] ${murbanClassName}`}
      >
        MURBAN
      </span>
      <span
        className={`font-medium text-[#2A5792] ${engineeringClassName}`}
      >
        ENGINEERING LTD
      </span>
    </span>
  );
};

export default BrandWordmark;
