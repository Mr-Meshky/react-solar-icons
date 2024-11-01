import React, { forwardRef, SVGProps } from 'react';

interface DownloadOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DownloadOutline = forwardRef<SVGSVGElement, DownloadOutlineProps>(
  ({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
          d="M12 1.25a.75.75 0 0 1 .75.75v10.973l1.68-1.961a.75.75 0 1 1 1.14.976l-3 3.5a.75.75 0 0 1-1.14 0l-3-3.5a.75.75 0 1 1 1.14-.976l1.68 1.96V2a.75.75 0 0 1 .75-.75M6.996 8.252a.75.75 0 0 1 .008 1.5c-1.093.006-1.868.034-2.457.142-.566.105-.895.272-1.138.515-.277.277-.457.666-.556 1.4-.101.755-.103 1.756-.103 3.191v1c0 1.436.002 2.437.103 3.192.099.734.28 1.122.556 1.4.277.276.665.456 1.4.555.754.102 1.756.103 3.191.103h8c1.435 0 2.436-.001 3.192-.103.734-.099 1.122-.279 1.399-.556s.457-.665.556-1.399c.101-.755.103-1.756.103-3.192v-1c0-1.435-.002-2.436-.103-3.192-.099-.733-.28-1.122-.556-1.399-.244-.243-.572-.41-1.138-.515-.589-.108-1.364-.136-2.457-.142a.75.75 0 1 1 .008-1.5c1.082.006 1.983.032 2.72.167.758.14 1.403.405 1.928.93.602.601.86 1.36.982 2.26.116.866.116 1.969.116 3.336v1.11c0 1.368 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116-.9-.121-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-1.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.525-.524 1.17-.79 1.928-.929.737-.135 1.638-.161 2.72-.167"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

DownloadOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DownloadOutline;