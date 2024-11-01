import React, { forwardRef, SVGProps } from 'react';

interface ReorderOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ReorderOutline = forwardRef<SVGSVGElement, ReorderOutlineProps>(
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
          d="M9.446 3.25c-1.133 0-2.058 0-2.79.098-.763.103-1.425.325-1.954.854s-.751 1.19-.854 1.955c-.098.73-.098 1.656-.098 2.79v5.309q-.222.005-.413.022c-.329.03-.655.096-.962.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962-.028.312-.028.691-.028 1.13v.065c0 .44 0 .82.028 1.13.03.33.096.656.273.963.198.342.482.626.824.824.307.177.633.243.962.273.312.028.69.028 1.13.028h.065c.44 0 .82 0 1.13-.028.33-.03.656-.096.963-.273a2.25 2.25 0 0 0 .824-.824c.177-.307.243-.633.273-.962.028-.312.028-.691.028-1.13v-.065c0-.44 0-.82-.028-1.13-.03-.33-.096-.656-.273-.963a2.25 2.25 0 0 0-.824-.824c-.307-.177-.633-.243-.962-.273a7 7 0 0 0-.413-.022V9c0-1.2.002-2.024.085-2.643.08-.598.224-.89.428-1.094s.496-.348 1.094-.428C7.476 4.752 8.3 4.75 9.5 4.75h5c1.2 0 2.024.002 2.643.085.598.08.89.224 1.094.428s.348.496.428 1.094c.083.619.085 1.443.085 2.643v1.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V8.945c0-1.133 0-2.058-.098-2.79-.103-.763-.325-1.425-.854-1.954s-1.19-.751-1.955-.854c-.73-.098-1.656-.098-2.79-.098zM4.5 15.75c-.481 0-.792 0-1.027.022-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A13 13 0 0 0 2.75 17.5c0 .481 0 .792.022 1.027.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079.235.021.546.022 1.027.022s.792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .275-.274c.023-.04.058-.123.078-.348.021-.235.022-.546.022-1.027s0-.792-.022-1.027c-.02-.225-.055-.307-.078-.348a.75.75 0 0 0-.275-.274c-.04-.024-.123-.059-.348-.079A13 13 0 0 0 4.5 15.75"
          clip-rule="evenodd"
        ></path>
        <path
          fill={color}
          fill-rule="evenodd"
          d="M11.968 14.25c-.44 0-.82 0-1.13.028-.33.03-.656.096-.963.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962-.028.312-.028.691-.028 1.13v.065c0 .44 0 .82.028 1.13.03.33.096.656.273.963.198.342.482.626.824.824.307.177.633.243.962.273.312.028.69.028 1.13.028h.065c.44 0 .82 0 1.13-.028.33-.03.656-.096.963-.273.342-.198.626-.482.824-.824.177-.307.243-.633.273-.962.028-.312.028-.69.028-1.13v-.065c0-.44 0-.82-.028-1.13-.03-.33-.096-.656-.273-.963a2.25 2.25 0 0 0-.824-.824c-.307-.177-.633-.243-.962-.273-.312-.028-.691-.028-1.13-.028zm-1.343 1.6c.04-.023.123-.057.348-.078.235-.021.546-.022 1.027-.022s.792 0 1.027.022c.225.02.307.055.348.079a.75.75 0 0 1 .274.274c.024.04.059.123.079.348.021.235.022.546.022 1.027s0 .792-.022 1.027c-.02.225-.055.307-.079.348a.75.75 0 0 1-.274.274c-.04.024-.123.058-.348.079-.235.021-.546.022-1.027.022s-.792 0-1.027-.022c-.225-.02-.307-.055-.348-.079a.75.75 0 0 1-.274-.274c-.024-.04-.059-.123-.079-.348a13 13 0 0 1-.022-1.027c0-.481 0-.792.022-1.027.02-.225.055-.307.079-.348a.75.75 0 0 1 .274-.274M19.468 14.25h.064c.44 0 .82 0 1.13.028.33.03.656.096.963.273.342.198.626.482.824.824.177.307.243.633.273.962.028.312.028.69.028 1.13v.065c0 .44 0 .82-.028 1.13-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273-.312.028-.69.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13.03-.33.096-.656.273-.963.198-.342.482-.626.824-.824.307-.177.633-.243.962-.273.312-.028.691-.028 1.13-.028m-.995 1.522c-.225.02-.307.055-.348.079a.75.75 0 0 0-.274.274c-.024.04-.058.123-.079.348-.021.235-.022.546-.022 1.027s0 .792.022 1.027c.02.225.055.307.079.348a.75.75 0 0 0 .274.274c.04.024.123.058.348.079.235.021.546.022 1.027.022s.792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348.021-.235.022-.546.022-1.027s0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a13 13 0 0 0-1.027-.022c-.481 0-.792 0-1.027.022"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

ReorderOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ReorderOutline;
