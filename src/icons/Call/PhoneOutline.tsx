import React, { forwardRef, SVGProps } from 'react';

interface PhoneOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const PhoneOutline = forwardRef<SVGSVGElement, PhoneOutlineProps>(
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
          d="M5.733 2.043c1.217-1.21 3.221-.995 4.24.367l1.262 1.684c.83 1.108.756 2.656-.229 3.635l-.238.238a.65.65 0 0 0-.008.306c.063.408.404 1.272 1.832 2.692s2.298 1.76 2.712 1.824a.7.7 0 0 0 .315-.009l.408-.406c.876-.87 2.22-1.033 3.304-.444l1.91 1.04c1.637.888 2.05 3.112.71 4.445l-1.421 1.412c-.448.445-1.05.816-1.784.885-1.81.169-6.027-.047-10.46-4.454-4.137-4.114-4.931-7.702-5.032-9.47l.749-.042-.749.042c-.05-.894.372-1.65.91-2.184zm3.04 1.266c-.507-.677-1.451-.731-1.983-.202l-1.57 1.56c-.33.328-.488.69-.468 1.036.08 1.405.72 4.642 4.592 8.492 4.062 4.038 7.813 4.159 9.263 4.023.296-.027.59-.181.865-.454l1.42-1.413c.578-.574.451-1.62-.367-2.064l-1.91-1.039c-.528-.286-1.146-.192-1.53.19l-.455.453-.53-.532c.53.532.529.533.528.533l-.001.002-.003.003-.007.006-.015.014a1 1 0 0 1-.136.106c-.08.053-.186.112-.319.161-.27.101-.628.155-1.07.087-.867-.133-2.016-.724-3.543-2.242-1.526-1.518-2.122-2.66-2.256-3.526-.069-.442-.014-.8.088-1.07a1.5 1.5 0 0 1 .238-.42l.032-.035.014-.015.006-.006.003-.003.002-.002.53.53-.53-.531.288-.285c.428-.427.488-1.134.085-1.673z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

PhoneOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default PhoneOutline;
