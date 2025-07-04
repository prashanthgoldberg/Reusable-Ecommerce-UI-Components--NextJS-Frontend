"use client";

// import Image from "next/image";
import React from "react";

interface SingleProductCardProps {
  productImage: string;
  productName: string;
  salePrice: string;
  originalPrice: string;
  saleLabel: string;
  shippingLabel: string;
  onAddToBasket?: () => void;
}

export const SingleProductCard: React.FC<SingleProductCardProps> = ({
  productImage,
  productName,
  salePrice,
  originalPrice,
  saleLabel,
  shippingLabel,
  onAddToBasket,
}) => {
  return (
    <div
      className="relative w-[90vw] max-w-[248px] h-[329px] sm:w-[248px] sm:h-[329px] rounded-[16px] overflow-hidden flex-shrink-0 shadow-sm"
      style={{ background: "linear-gradient(180deg, #CEF6F8 0%, #F0F1F1 100%)" }}
    >
      {/* Top badges */}
      <div className="absolute flex flex-row w-full justify-between top-[10px] left-0 px-2 z-0">
        {/* Sale badge */}
        <div className="bg-white rounded-[6px] w-[61px] h-[20px] flex items-center justify-center">
          <span className="italic font-semibold text-[11px] leading-[13px] text-[#C02929]">{saleLabel}</span>
        </div>
        {/* Free shipping badge */}
        <div className="bg-white rounded-[6px] w-[91px] h-[20px] flex items-center justify-center">
          <span className="italic font-semibold text-[11px] leading-[13px] text-black">{shippingLabel}</span>
        </div>
      </div>

      {/* Product image */}
      <div className="absolute left-[14px] top-[38px] w-[219px] h-[220px] flex items-center justify-center">
        <img
          src={productImage}
          alt={productName}
          width={219}
          height={220}
          className="object-contain rounded-[12px]"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Product name */}
      <div className="absolute left-[17px] top-[281px] w-[86px] h-[15px] flex items-center">
        <span className="font-normal text-[13px] leading-[15px] text-black truncate">{productName}</span>
      </div>

      {/* Sale price */}
      <div className="absolute left-[17px] top-[296px] w-[37px] h-[15px] flex items-center">
        <span className="font-normal text-[13px] leading-[15px] text-[#C02929]">{salePrice}</span>
      </div>

      {/* Original price */}
      <div className="absolute left-[58px] top-[296px] w-[37px] h-[15px] flex items-center">
        <span className="font-normal text-[12px] leading-[14px] text-black line-through">{originalPrice}</span>
      </div>

      {/* Decorative ellipses */}
      <div className="absolute left-[197px] top-[276px] w-[38px] h-[38px] rounded-full bg-[#CCEBE5] z-0" />
      <div className="absolute left-[202px] top-[281px] w-[28px] h-[28px] rounded-full bg-[#DDFFF8] z-10" />

      {/* Add to Basket button (icon) */}
      <button
        className="absolute left-[208px] top-[288px] w-[15px] h-[14px] flex items-center justify-center z-20 focus:outline-none"
        onClick={onAddToBasket}
        aria-label="Add to Basket"
        type="button"
      >
        {/* Simple basket icon SVG */}
        {/* <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="2.5" width="14" height="11" rx="2" stroke="#222" />
          <path d="M4 6.5L7.5 10L11 6.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14" fill="none">
<rect width="15" height="14" fill="url(#pattern0_7817_2152)"/>
<defs>
<pattern id="pattern0_7817_2152" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_7817_2152" transform="matrix(0.0103704 0 0 0.0111111 0.0333333 0)"/>
</pattern>
<image id="image0_7817_2152" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTklEQVR4nO2dzasOURzHP9drUkKIq6ysbGRlIy/5D5SFssHKy4biYWXpykUKC2VjQXaSjeR6yU5KkWzFJa/lKroLjs5tpq7rOXOfZ+bMOWfmfj/13TzdM3Pm07nz/ObMzHmgXWwArgKfgG/ARWBB7E61ibXAXcB0yeXYnWsLR4BfDsk2P4CB2J1sMnOAKwWC84zF7miTGQCu9yDZ5kLszjaZkz0I/gkMA/Nid7apbAL+THNOPgEsjd3RJjMXeFEg+SmwJnYn28DeAsmPgYWxO9gWnjkkvwWWxe5cm676jCM7YneuTRx1SH6lCxK/3HaIPuZ5PzOe1w7RG2e8Gc98cYhWveyZ3w7Rs3zvaKZjHBESnR5ne5yJKxM7sSQmTXteq0HyTZ3D/8dOZ97zKPkhML/LfgSwCHjuQfJLYImMFjMIvKkg+Z2mSntnXfa4QL+SvwPr+9iPADZPc3d7asaB7TJXjp0FV4STY29t7S65D5FxoAfRh/M/FtUYLpB8puK2xSTsxNGNLpLtZ5pUquGC5jzwNcs5PbMhhBBCCNFvOXUaeF/DhLxpWUaBobLl5lACB2AaFuusbzSS6Vv0hzKiY48O09BINBJN7FGoEU18cTp1EF+qztE0SPRoAqPDNCz2UYe+0QULfYs+VUb0vEy2Rjb1XoJP5aOHf63x7J2TwSyd7LOU2xbFrgvinREPHet02W4n8bZFeVCD54nVXKp2bFWX7a5MvG1RrJMoD7JMFxcpty2KdeKdrRLNVNFb6hBt37XWiOYfB8upCfstq1MHEw5sFVYb9ltWoqmv4si5JNHUWnHkHJRoctH76xRdtfJwkXLboBWHr8rDRcptg1ccPioPFym3DV5x5NgXJWe66BECUKXycJFy2+AVh4/Kw0XKbYNXHDnbJBr7DmTtrJBogq2xV7byGOyyrdWJt41ScVStPDpdtnU88bZRKo6qlcd4dtBl7/vFaBul4sg5VLKTpgUJUnH4qDxMwxOk4vBReZiGJ/iqvp8TOGgTOEErjpw7CRy4CZxbMUTvSuDATeDYhVqCY5dveJTAwZtAuR9zyQq70u2TBCSYmmMH1GIS+IWffdmPGYwlIMV4ylgmeA8wO7ZkIYQQQgghhBBCCBLiL+jG5pQWk0kFAAAAAElFTkSuQmCC"/>
</defs>
</svg>
      </button>
    </div>
  );
};
