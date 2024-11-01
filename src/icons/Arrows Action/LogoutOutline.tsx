import React, { forwardRef, SVGProps } from 'react';

interface LogoutOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const LogoutOutline = forwardRef<SVGSVGElement, LogoutOutlineProps>(
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
          d="M5.47 12.53a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72H15a.75.75 0 0 1 0 1.5H7.81l.72.72a.75.75 0 1 1-1.06 1.06z"
        ></path>
        <path
          fill={color}
          fill-rule="evenodd"
          d="M13.945 1.25h1.11c1.368 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337-.121.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-1.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.398-.4-.647-.868-.805-1.402-.951-.001-1.744-.012-2.386-.098-.764-.103-1.426-.325-1.955-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79V9.447c0-1.133 0-2.058.098-2.79.103-.763.325-1.425.854-1.954s1.19-.751 1.955-.854c.642-.086 1.435-.097 2.386-.098.158-.534.407-1.003.806-1.402.601-.602 1.36-.86 2.26-.981.866-.117 1.969-.117 3.336-.117M7.252 17.004c.004.645.014 1.225.05 1.745-.834-.003-1.454-.018-1.945-.084-.598-.08-.89-.224-1.094-.428s-.348-.496-.428-1.094c-.083-.619-.085-1.443-.085-2.643v-5c0-1.2.002-2.024.085-2.643.08-.598.224-.89.428-1.094s.496-.348 1.094-.428c.491-.066 1.111-.08 1.946-.084-.037.52-.047 1.1-.051 1.745a.75.75 0 0 0 1.5.008c.006-1.093.034-1.868.142-2.457.105-.566.272-.895.515-1.138.277-.277.666-.457 1.4-.556.755-.101 1.756-.103 3.191-.103h1c1.436 0 2.437.002 3.192.103.734.099 1.122.28 1.4.556.276.277.456.665.555 1.4.102.754.103 1.756.103 3.191v8c0 1.435-.001 2.436-.103 3.192-.099.734-.279 1.122-.556 1.399s-.665.457-1.399.556c-.755.101-1.756.103-3.192.103h-1c-1.435 0-2.436-.002-3.192-.103-.733-.099-1.122-.28-1.399-.556-.243-.244-.41-.572-.515-1.138-.108-.589-.136-1.364-.142-2.457a.75.75 0 1 0-1.5.008"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

LogoutOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default LogoutOutline;
