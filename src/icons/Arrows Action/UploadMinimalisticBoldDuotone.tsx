import React, { forwardRef, SVGProps } from 'react';

interface UploadMinimalisticBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UploadMinimalisticBoldDuotone = forwardRef<
  SVGSVGElement,
  UploadMinimalisticBoldDuotoneProps
>(({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill={color}
        fill-rule="evenodd"
        d="M3 14.25a.75.75 0 0 1 .75.75c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h6c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191a.75.75 0 0 1 1.5 0v.055c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V15a.75.75 0 0 1 .75-.75"
        clip-rule="evenodd"
        opacity=".5"
      ></path>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M12 2.25a.75.75 0 0 1 .553.244l4 4.375a.75.75 0 1 1-1.107 1.012l-2.696-2.95V16a.75.75 0 0 1-1.5 0V4.932l-2.696 2.95a.75.75 0 0 1-1.108-1.013l4-4.375A.75.75 0 0 1 12 2.25"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

UploadMinimalisticBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UploadMinimalisticBoldDuotone;
