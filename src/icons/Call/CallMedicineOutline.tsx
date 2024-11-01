import React, { forwardRef, SVGProps } from 'react';

interface CallMedicineOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const CallMedicineOutline = forwardRef<SVGSVGElement, CallMedicineOutlineProps>(
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
          d="M17 2.75a4.25 4.25 0 0 0-3.807 6.142c.16.32.225.71.12 1.102l-.253.946.946-.253a1.57 1.57 0 0 1 1.102.12A4.25 4.25 0 1 0 17 2.75M11.25 7a5.75 5.75 0 1 1 3.19 5.15.1.1 0 0 0-.04-.013h-.007l-1.112.297a1.4 1.4 0 0 1-1.715-1.714l.298-1.113V9.6a.1.1 0 0 0-.014-.04 5.7 5.7 0 0 1-.6-2.56M3.718 4.092c1.226-1.29 3.254-1.049 4.268.385l1.26 1.783c.811 1.147.743 2.74-.225 3.76l-.245.257q0 .003-.002.006c-.013.037-.045.152-.013.372.067.456.418 1.381 1.846 2.884 1.432 1.508 2.3 1.864 2.703 1.929a.6.6 0 0 0 .294-.007l.408-.43c.874-.92 2.236-1.101 3.335-.469l1.91 1.1c1.633.94 2.013 3.239.708 4.613l-1.42 1.495c-.443.467-1.048.866-1.795.94-1.824.18-6.049-.055-10.478-4.718-4.134-4.352-4.919-8.137-5.018-9.986-.049-.914.358-1.697.894-2.261l.544.516-.544-.516zm3.043 1.25c-.512-.724-1.433-.767-1.956-.217l-1.57 1.653c-.33.349-.505.748-.483 1.148.08 1.51.731 4.952 4.607 9.033 4.064 4.279 7.809 4.4 9.244 4.258.283-.028.575-.186.854-.48l1.42-1.495c.614-.645.453-1.808-.368-2.28l-1.91-1.1c-.513-.295-1.114-.204-1.499.202l-.455.48-.544-.517c.543.517.543.517.542.518l-.001.002-.003.003-.007.006-.014.014a1 1 0 0 1-.136.112c-.08.057-.186.12-.321.172-.276.11-.64.168-1.091.095-.878-.143-2.028-.773-3.55-2.377-1.528-1.608-2.113-2.807-2.243-3.7-.067-.453-.014-.817.084-1.092a1.6 1.6 0 0 1 .23-.427l.03-.037.014-.015.006-.006.003-.003.002-.002s.001-.001.545.515l-.544-.516.287-.302c.445-.47.51-1.264.088-1.86zM17 4.25a.75.75 0 0 1 .75.75v1.25H19a.75.75 0 1 1 0 1.5h-1.25V9a.75.75 0 1 1-1.5 0V7.75H15a.75.75 0 0 1 0-1.5h1.25V5a.75.75 0 0 1 .75-.75"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

CallMedicineOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default CallMedicineOutline;
