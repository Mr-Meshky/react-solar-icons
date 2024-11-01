import React, { forwardRef, SVGProps } from 'react';

interface OutgoingCallBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const OutgoingCallBroken = forwardRef<SVGSVGElement, OutgoingCallBrokenProps>(
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
        <path d="m15 9 4-4m0 0v3m0-3h-3M15.1 15.027l.545.517zm.456-.48-.544-.516zm2.417-.335-.374.65zm1.91 1.1-.374.65zm.539 3.446.543.517zm-1.42 1.496-.545-.517zm-1.326.71.074.745zm-9.86-4.489.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88.544.517zm.287-.302.543.517zm.156-2.81.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514.455-.48-1.088-1.033-.455.48zm1.954-.682 1.91 1.1.749-1.3-1.911-1.1zm2.279 3.38-1.42 1.495 1.087 1.034 1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637.286-.302-1.087-1.033-.287.302zm.512-4.062L8.986 3.477l-1.225.866 1.26 1.783zM9.19 8.805c-.544-.516-.545-.516-.545-.515l-.002.002-.003.003a1 1 0 0 0-.05.058 1.592 1.592 0 0 0-.23.427c-.098.275-.15.639-.084 1.093.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884-.032-.22 0-.335.013-.372l.008-.019a.3.3 0 0 1-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034.014-.014.007-.006.003-.003.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001.002-.003.006-.005.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></path>
      </svg>
    );
  },
);

OutgoingCallBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default OutgoingCallBroken;
