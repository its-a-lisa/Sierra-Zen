// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBrandxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBrandxIcon(props: IconBrandxIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.516 7.125v.656c0 6.516-4.922 13.969-13.97 13.969-2.812 0-5.39-.797-7.546-2.203.375.047.75.094 1.172.094a9.895 9.895 0 006.094-2.11c-2.157-.047-3.985-1.453-4.594-3.422.328.047.61.094.937.094.422 0 .891-.094 1.266-.187A4.928 4.928 0 01.937 9.187v-.046c.657.375 1.454.562 2.25.609A4.843 4.843 0 01.985 5.672c0-.938.235-1.781.657-2.484a14.28 14.28 0 0010.171 5.156 4.625 4.625 0 01-.14-1.125 4.921 4.921 0 014.922-4.922c1.406 0 2.672.562 3.61 1.547a10.396 10.396 0 003.093-1.219 4.809 4.809 0 01-2.156 2.719 9.225 9.225 0 002.812-.75c-.656.984-1.5 1.828-2.437 2.531z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconBrandxIcon;
/* prettier-ignore-end */
