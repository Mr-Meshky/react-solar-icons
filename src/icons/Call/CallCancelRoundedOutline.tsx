import React, { forwardRef, SVGProps } from 'react';

interface CallCancelRoundedOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const CallCancelRoundedOutline = forwardRef<
  SVGSVGElement,
  CallCancelRoundedOutlineProps
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
      <path d="M16.53 3.47a.75.75 0 0 0-1.06 1.06L16.94 6l-1.47 1.47a.75.75 0 0 0 1.06 1.06L18 7.06l1.47 1.47a.75.75 0 0 0 1.06-1.06L19.06 6l1.47-1.47a.75.75 0 1 0-1.06-1.06L18 4.94z"></path>
      <path
        fill-rule="evenodd"
        d="M10.693 4.95c-1.17-2.095-4.005-2.223-5.686-.543-.898.899-1.697 2.093-1.75 3.498-.079 2.08.459 5.536 3.88 8.958 3.422 3.421 6.877 3.959 8.958 3.88 1.405-.053 2.6-.852 3.498-1.75 1.68-1.68 1.552-4.516-.544-5.685l-1.163-.65c-1.368-.763-3.095-.438-4.227.68a.63.63 0 0 1-.337.104c-.256.012-.85-.079-1.767-.997-.919-.918-1.01-1.511-.997-1.767a.63.63 0 0 1 .104-.337c1.118-1.131 1.443-2.859.68-4.227zm-4.625.518c1.106-1.106 2.716-.86 3.315.214l.649 1.163c.403.723.266 1.74-.448 2.452-.07.07-.486.516-.524 1.307-.04.81.324 1.792 1.434 2.902s2.09 1.474 2.901 1.434c.791-.038 1.237-.454 1.307-.524.714-.713 1.73-.851 2.453-.448l1.163.65c1.074.598 1.32 2.208.214 3.314-.775.775-1.63 1.28-2.494 1.312-1.735.066-4.76-.363-7.84-3.442S4.69 9.697 4.756 7.962c.033-.863.537-1.72 1.312-2.494"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

CallCancelRoundedOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default CallCancelRoundedOutline;
