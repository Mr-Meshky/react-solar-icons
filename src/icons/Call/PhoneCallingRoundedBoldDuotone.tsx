import React, { forwardRef, SVGProps } from 'react';

interface PhoneCallingRoundedBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const PhoneCallingRoundedBoldDuotone = forwardRef<
  SVGSVGElement,
  PhoneCallingRoundedBoldDuotoneProps
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
        d="m10.038 5.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.028 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.572l1.163.649c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.205 4.5.38"
        opacity=".5"
      ></path>
      <path d="M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.028.352.091c.297.087.712.229 1.21.457.996.457 2.321 1.256 3.697 2.632s2.175 2.701 2.632 3.698c.228.497.37.912.457 1.209a6 6 0 0 1 .113.455l.005.03a.765.765 0 0 1-.617.878.75.75 0 0 1-.86-.617 3 3 0 0 0-.081-.327 7.4 7.4 0 0 0-.38-1.003c-.39-.85-1.092-2.025-2.33-3.263s-2.411-1.938-3.262-2.328a7.4 7.4 0 0 0-1.003-.38 6 6 0 0 0-.318-.08.76.76 0 0 1-.626-.862"></path>
      <path
        fill-rule="evenodd"
        d="M13.486 5.33a.75.75 0 0 1 .927-.515l-.206.72.206-.72h.003l.003.001.008.003.02.006.056.019q.067.024.177.07c.146.062.345.159.59.303.489.29 1.157.771 1.942 1.556s1.266 1.453 1.556 1.943c.145.244.241.443.303.589a3 3 0 0 1 .09.233l.005.02.003.008v.003l.001.002-.72.207.72-.206a.75.75 0 0 1-1.439.422l-.003-.01-.035-.088a4 4 0 0 0-.216-.416c-.223-.377-.626-.946-1.326-1.646s-1.269-1.103-1.646-1.326a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.924"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

PhoneCallingRoundedBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default PhoneCallingRoundedBoldDuotone;
