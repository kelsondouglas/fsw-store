import Image from "next/image";
import React from "react";

const PromoBanner = () => {
  return (
    <div className="pt-8">
      <Image
        width={0}
        height={0}
        sizes="100vh"
        src="/banner-01.png"
        alt="55% de desconto somente este mês"
        className="h-full w-full"
      />
    </div>
  );
};

export default PromoBanner;
