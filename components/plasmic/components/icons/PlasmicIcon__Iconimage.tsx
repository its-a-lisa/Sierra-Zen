// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconimageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconimageIcon(props: IconimageIconProps) {
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
          "M3.204 17.313a7.045 7.045 0 01-.146-1.004 18.88 18.88 0 01-.051-1.226l2.343-1.449.079-.048c.33-.205.66-.41 1.034-.507a2.497 2.497 0 011-.05c.38.058.731.229 1.08.4l.083.04.528.257c.53.258.593.275.635.28a.5.5 0 00.212-.017c.04-.013.1-.04.58-.382l2.505-1.79.093-.066c.384-.276.77-.552 1.215-.671a2.5 2.5 0 011.186-.025c.45.1.847.36 1.242.619l.096.062 4.081 2.66a25.52 25.52 0 01-.057 1.913c-.011.14-.025.276-.042.41l-5.074-3.307c-.563-.367-.633-.395-.68-.405a.5.5 0 00-.236.005c-.046.012-.115.043-.662.433l-2.505 1.79-.082.058c-.338.243-.679.487-1.072.607a2.5 2.5 0 01-1.061.09c-.408-.054-.785-.239-1.16-.422l-.089-.043-.528-.258c-.492-.239-.55-.255-.59-.261a.5.5 0 00-.2.01c-.038.01-.094.032-.56.32l-3.197 1.977zM11 9a2 2 0 11-4 0 2 2 0 014 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.357 3h3.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 012.185 2.185c.302.592.428 1.233.487 1.961C21 8.4 21 9.273 21 10.357v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 01-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 01-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 015.73 3.544c.592-.302 1.233-.428 1.961-.487C8.4 3 9.273 3 10.357 3zM7.854 5.051c-.605.05-.953.142-1.216.276a3 3 0 00-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 001.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 001.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 00-1.311-1.311c-.263-.134-.611-.226-1.216-.276C15.529 5.001 14.736 5 13.6 5h-3.2c-1.137 0-1.929 0-2.546.051z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconimageIcon;
/* prettier-ignore-end */
