import React, { forwardRef, SVGProps } from 'react';

interface PhoneCallingBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const PhoneCallingBoldDuotone = forwardRef<
  SVGSVGElement,
  PhoneCallingBoldDuotoneProps
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
        d="m15.556 14.548-.455.48s-1.083 1.139-4.038-1.972-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705.09 1.68.808 5.293 4.812 9.51 4.247 4.47 8.232 4.648 9.861 4.487.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"
        opacity=".5"
      ></path>
      <path d="M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.091c.297.087.712.229 1.21.457.996.457 2.321 1.256 3.697 2.632 1.376 1.375 2.175 2.701 2.632 3.698.228.497.37.912.457 1.209a6 6 0 0 1 .113.454l.005.032a.765.765 0 0 1-.617.877.75.75 0 0 1-.86-.617 3 3 0 0 0-.081-.327 7.4 7.4 0 0 0-.38-1.003c-.39-.85-1.092-2.025-2.33-3.263s-2.411-1.939-3.262-2.328a7.4 7.4 0 0 0-1.003-.38 6 6 0 0 0-.318-.08.76.76 0 0 1-.626-.862"></path>
      <path
        fill-rule="evenodd"
        d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.722.206-.722h.001l.002.001.003.001.008.003.02.006q.023.006.056.019a3 3 0 0 1 .177.07c.146.062.345.158.59.303.489.29 1.157.771 1.942 1.556s1.266 1.453 1.556 1.943c.145.244.241.443.303.589a3 3 0 0 1 .09.233l.005.02.003.008v.003l.001.002-.72.207.72-.206a.75.75 0 0 1-1.439.422l-.003-.01-.035-.088a4 4 0 0 0-.216-.416c-.223-.377-.626-.946-1.326-1.646s-1.269-1.103-1.646-1.326a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.924"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

PhoneCallingBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default PhoneCallingBoldDuotone;
