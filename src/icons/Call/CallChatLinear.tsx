import React, { forwardRef, SVGProps } from 'react';

interface CallChatLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const CallChatLinear = forwardRef<SVGSVGElement, CallChatLinearProps>(
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
        <path d="M17 12a5 5 0 1 0-4.478-2.774.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12M14.1 16.027l-.543-.516zm.456-.48.544.517zm2.417-.335-.374.65zm1.91 1.1-.374.65zm.539 3.446.543.517zm-1.42 1.496-.545-.517zm-1.326.71.074.745zm-9.86-4.489.543-.516zm-4.813-9.51-.749.041zm6.475 1.538.543.517zm.156-2.81.613-.433zM7.374 4.91l-.613.433zM4.26 4.609l.544.516zM2.691 6.26l-.543-.516zm7.372 7.795.544-.517zm4.582 2.488.455-.48-1.088-1.033-.455.48zm1.954-.682 1.91 1.1.749-1.3-1.911-1.1zm2.279 3.38-1.42 1.495 1.087 1.034 1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637.286-.302-1.087-1.033-.287.302zm.512-4.062L7.986 4.477l-1.225.866 1.26 1.783zm-5.53-2.168L2.149 5.745l1.088 1.033 1.57-1.653zm4.474 5.713c-.544-.516-.545-.516-.545-.515l-.002.002-.003.003-.05.058a1.592 1.592 0 0 0-.23.427c-.098.275-.15.639-.084 1.093.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884-.032-.22 0-.335.013-.372l.008-.019a.3.3 0 0 1-.037.047l-.005.005-.003.003-.001.001s-.002.002-.545-.515m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034.014-.014.01-.01h.001c0-.002.002-.002-.542-.519-.544-.516-.543-.517-.543-.518l.002-.001.002-.003.005-.005.01-.01.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009-.402-.066-1.27-.42-2.703-1.929zM7.986 4.477C6.972 3.043 4.944 2.8 3.718 4.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM2.752 7.926c-.022-.4.152-.8.484-1.148L2.148 5.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM9.021 10.02C9.99 9 10.057 7.407 9.247 6.26l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z"></path>
      </svg>
    );
  },
);

CallChatLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default CallChatLinear;
