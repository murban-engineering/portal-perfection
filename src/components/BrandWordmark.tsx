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
      className={`brand-wordmark inline-flex flex-col items-start leading-none uppercase ${className}`}
      aria-label="MURBAN ENGINEERING LTD"
    >
      <span
        className={`brand-wordmark__murban font-black text-[#C8172F] ${murbanClassName}`}
      >
        MURBAN
      </span>
      <span
        className={`brand-wordmark__engineering inline-flex w-fit items-center rounded-full bg-white px-[0.72em] py-[0.28em] font-light text-[#213164] shadow-sm ${engineeringClassName}`}
      >
        ENGINEERING LTD
      </span>
    </span>
  );
};

export default BrandWordmark;
