import React from "react";

// Data for each quantity image card

export interface ProductQuantityImageOption {
  percent: string;
  label: string;
  value: number;
  description?: string;
}

export interface ProductQuantityImageSectionProps {
  options?: ProductQuantityImageOption[];
  selected?: number;
  onSelect?: (value: number) => void;
}

const defaultOptions: ProductQuantityImageOption[] = [
  { percent: "-10%", label: "10X", value: 10, description: "10 cans" },
  { percent: "-13%", label: "20X", value: 20, description: "20 cans" },
  { percent: "-16%", label: "35X", value: 35, description: "35 cans" },
  { percent: "-20%", label: "50X", value: 50, description: "50 cans" },
];

// SVG for the can image (reusable)
function CanSVG() {
  return (
    // <svg width="56" height="50" viewBox="0 0 56 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <ellipse cx="28" cy="21.5" rx="27.85" ry="13.5" fill="#8EF7FB" />
    //   <ellipse cx="28" cy="28" rx="23" ry="7.5" fill="white" />
    //   <ellipse cx="28" cy="36.5" rx="20.5" ry="6.5" fill="#8EF7FB" />
    //   <ellipse cx="28" cy="40.5" rx="15.5" ry="4.5" fill="#8EF7FB" />
    // </svg>
    <svg width="60" height="60" viewBox="0 0 57 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        
<path d="M28.482 0.0635986C13.3872 0.0635986 0.633789 5.99733 0.633789 13.0217C0.633789 20.0461 13.3872 25.9798 28.482 25.9798C43.5769 25.9798 56.3302 20.0461 56.3302 13.0217C56.3302 5.99733 43.5769 0.0635986 28.482 0.0635986Z" fill="#8EF7FB"/>
<path d="M27.9259 4.36008C17.3595 4.36008 8.43213 8.51369 8.43213 13.4307C8.43213 18.3478 17.3595 22.5014 27.9259 22.5014C38.4923 22.5014 47.4197 18.3478 47.4197 13.4307C47.4197 8.51369 38.4923 4.36008 27.9259 4.36008Z"/>
<path d="M28.482 28.1395C15.6922 28.1395 5.01669 24.2963 0.633789 18.7276V21.6604C0.633789 23.6247 1.59992 25.5241 3.50433 27.3048C8.31241 31.8163 17.8825 34.6186 28.482 34.6186C39.0815 34.6186 48.6515 31.8163 53.4584 27.3058C55.3639 25.5241 56.3302 23.6247 56.3302 21.6604V18.7276C51.9473 24.2963 41.2719 28.1395 28.482 28.1395Z" fill="white"/>
<path d="M2.77637 29.5185V37.3181C2.77637 44.1751 14.2798 49.7364 28.4824 49.7364C42.6743 49.7364 54.1882 44.1751 54.1882 37.3181V29.5185C48.8215 34.0117 39.1098 36.7782 28.4824 36.7782C17.8562 36.7782 8.14463 34.0117 2.77637 29.5185Z" fill="#8EF7FB"/>
</svg>

  );
}


export const ProductQuantityImageSection: React.FC<ProductQuantityImageSectionProps> = ({
  options = defaultOptions,
  selected,
  onSelect,
}) => {
  return (
    <div className="w-full flex flex-row justify-center items-end gap-4 mt-2 mb-2">
      {options.map((opt, idx) => {
        const isSelected = selected === opt.value;
        return (
          <button
            type="button"
            key={opt.label}
            className={`relative flex flex-col items-center justify-center bg-[#F0F1F1] rounded-[5.8px] shadow focus:outline-none transition-all duration-300 ${isSelected ? 'border-2 border-black/90' : 'border border-transparent'} group`}
            style={{ width: 86.5, height: 86.5, cursor: onSelect ? 'pointer' : 'default' }}
            aria-pressed={isSelected}
            tabIndex={0}
            onClick={() => onSelect?.(opt.value)}
          >
            {/* Discount badge */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-3 flex flex-row justify-center items-center px-3 py-1 bg-[#EBF5F5] rounded-[6.9px] shadow"
              style={{ minWidth: 43, height: 17 }}
            >
              <span className="text-[10.3px] leading-[13px] font-normal text-black uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>{opt.percent}</span>
            </div>
            {/* Can SVG and label, centered */}
            <div className="relative flex flex-col items-center justify-center w-full grow" style={{height: '60px'}}>
              <span className="absolute left-1/2 top-[22px] -translate-x-1/2 -translate-y-1/2 text-[18px] font-medium italic text-black select-none pointer-events-none z-10" style={{ fontFamily: 'Inter, sans-serif', width: '100%', textAlign: 'center' }}>{opt.label}</span>
              <div className="flex items-center justify-center w-full h-full">
                <CanSVG />
              </div>
            </div>
            {/* Optionally show description below */}
            {opt.description && (
              <span className=" text-xs text-gray-500 group-hover:text-black transition-colors duration-300">{opt.description}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ProductQuantityImageSection;
