import React, { forwardRef, SVGProps } from 'react';

interface PhoneRoundedOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const PhoneRoundedOutline = forwardRef<SVGSVGElement, PhoneRoundedOutlineProps>(
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
          fill-rule="evenodd"
          d="M6.007 3.407c1.68-1.68 4.516-1.552 5.686.544l.649 1.163c.763 1.369.438 3.096-.68 4.228a.63.63 0 0 0-.104.336c-.013.256.078.849.997 1.767.918.918 1.51 1.01 1.767.997a.63.63 0 0 0 .337-.104c1.131-1.118 2.859-1.443 4.227-.68l1.163.65c2.096 1.17 2.224 4.005.544 5.685-.899.898-2.093 1.697-3.498 1.75-2.08.079-5.536-.458-8.958-3.88-3.421-3.422-3.959-6.877-3.88-8.958.053-1.404.852-2.6 1.75-3.498m4.376 1.275c-.6-1.074-2.21-1.32-3.315-.214-.775.775-1.28 1.63-1.312 2.494-.066 1.735.363 4.76 3.442 7.84s6.105 3.508 7.84 3.442c.863-.033 1.72-.537 2.494-1.312 1.106-1.106.86-2.716-.214-3.315l-1.163-.649c-.723-.403-1.74-.266-2.453.448-.07.07-.516.486-1.307.524-.81.04-1.791-.324-2.9-1.434-1.111-1.11-1.475-2.091-1.435-2.902.038-.791.455-1.237.524-1.306.714-.714.851-1.73.448-2.453z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

PhoneRoundedOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default PhoneRoundedOutline;
