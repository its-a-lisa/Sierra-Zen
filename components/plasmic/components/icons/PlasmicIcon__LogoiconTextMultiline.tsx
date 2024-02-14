// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoiconTextMultilineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoiconTextMultilineIcon(
  props: LogoiconTextMultilineIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 105 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        className={"ccustom"}
        d={
          "M48.136 35.238h2.734V24.924h-2.734v10.314zm0-11.923h2.734v-2.453h-2.734v2.453zm4.496 15.301h2.735v-4.544h.04c.583.885 1.528 1.468 2.976 1.468 2.654 0 4.463-2.111 4.463-5.449 0-3.217-1.75-5.449-4.483-5.449-1.408 0-2.373.664-3.036 1.569h-.06v-1.287h-2.635v13.692zm5.168-5.348c-1.629 0-2.494-1.227-2.494-3.097 0-1.85.684-3.317 2.393-3.317 1.689 0 2.373 1.367 2.373 3.317 0 1.95-.885 3.097-2.272 3.097zm10.5 2.272c2.574 0 4.344-1.247 4.344-3.318 0-2.413-1.91-2.895-3.64-3.257-1.467-.302-2.835-.382-2.835-1.267 0-.744.704-1.146 1.77-1.146 1.166 0 1.87.402 1.99 1.508h2.473c-.2-2.07-1.709-3.418-4.423-3.418-2.352 0-4.202 1.066-4.202 3.298 0 2.252 1.81 2.754 3.66 3.116 1.407.281 2.713.382 2.713 1.367 0 .724-.683 1.186-1.89 1.186-1.226 0-2.07-.522-2.251-1.709h-2.534c.161 2.192 1.83 3.64 4.826 3.64zm14.725-.302V24.924h-2.734v5.951c0 1.367-.784 2.332-2.071 2.332-1.166 0-1.71-.663-1.71-1.87v-6.413h-2.713V31.8c0 2.252 1.286 3.72 3.579 3.72 1.447 0 2.251-.543 2.955-1.488h.06v1.206h2.634zm1.769 0h2.734v-5.991c0-1.368.744-2.252 1.85-2.252 1.005 0 1.588.603 1.588 1.769v6.474h2.735v-5.991c0-1.368.704-2.252 1.85-2.252 1.005 0 1.588.603 1.588 1.769v6.474h2.734v-6.936c0-2.252-1.226-3.66-3.398-3.66-1.306 0-2.392.684-3.096 1.81h-.04c-.503-1.086-1.548-1.81-2.855-1.81-1.428 0-2.433.724-2.996 1.67h-.06v-1.388h-2.634v10.314zM48.176 17.572h2.735V3.196h-2.735v14.376zm9.421.302c3.197 0 5.388-2.373 5.388-5.45 0-3.075-2.191-5.448-5.388-5.448s-5.389 2.373-5.389 5.449c0 3.076 2.192 5.449 5.389 5.449zm0-2.091c-1.69 0-2.614-1.348-2.614-3.358s.925-3.378 2.614-3.378c1.668 0 2.613 1.367 2.613 3.378 0 2.01-.945 3.358-2.613 3.358zM68.8 21.09c1.528 0 2.855-.361 3.72-1.166.764-.703 1.226-1.689 1.226-3.136v-9.53h-2.634v1.085h-.04c-.623-.864-1.568-1.367-2.855-1.367-2.614 0-4.464 1.97-4.464 5.047 0 3.116 2.252 4.926 4.544 4.926 1.307 0 2.091-.523 2.695-1.207h.06v1.126c0 1.408-.744 2.152-2.292 2.152-1.267 0-1.85-.503-2.071-1.146h-2.714c.281 2.01 2.01 3.217 4.825 3.217zm-.04-6.333c-1.408 0-2.333-1.025-2.333-2.774 0-1.73.925-2.815 2.313-2.815 1.648 0 2.453 1.287 2.453 2.795 0 1.528-.704 2.794-2.433 2.794zm11.632 3.117c3.197 0 5.389-2.373 5.389-5.45 0-3.075-2.192-5.448-5.389-5.448-3.196 0-5.388 2.373-5.388 5.449 0 3.076 2.192 5.449 5.388 5.449zm0-2.091c-1.688 0-2.613-1.348-2.613-3.358s.925-3.378 2.614-3.378c1.668 0 2.613 1.367 2.613 3.378 0 2.01-.945 3.358-2.614 3.358zm7.786-2.152H100V11.28H88.178v2.352zm12.689 9.541c0-.463.375-.838.838-.838h1.675a.838.838 0 110 1.675h-1.675a.838.838 0 01-.838-.837z"
        }
        fill={"currentColor"}
      ></path>

      <path
        className={"ccustom"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M20.522 0c11.045 0 20 8.954 20 20s-8.955 20-20 20c-11.046 0-20-8.954-20-20s8.954-20 20-20zm-.723 1.497c-2.282.32-4.454 2.154-6.141 5.22-.49.89-.93 1.872-1.315 2.933 2.293-.576 4.812-.916 7.456-.968V1.497zm-9.147 8.634a23.087 23.087 0 011.74-4.11c.835-1.52 1.827-2.833 2.945-3.841A18.593 18.593 0 002.701 14.816c1.009-1.118 2.321-2.11 3.841-2.946a23.087 23.087 0 014.11-1.74zm-.48 1.69c-.576 2.293-.916 4.812-.969 7.456H2.018c.321-2.282 2.155-4.454 5.221-6.14.89-.49 1.872-.931 2.933-1.316zm.478 7.456c.06-2.885.475-5.594 1.162-7.987 2.393-.687 5.102-1.102 7.987-1.162v3.123a10.64 10.64 0 01-6.027 6.026H10.65zm-1.447 1.446H2.018c.321 2.282 2.155 4.454 5.221 6.14.89.49 1.872.931 2.933 1.316-.576-2.293-.916-4.812-.969-7.456zm2.609 7.987c-.687-2.393-1.103-5.102-1.162-7.987h3.122a10.64 10.64 0 016.027 6.026v3.123c-2.885-.06-5.594-.475-7.987-1.162zm-1.16 1.16a23.087 23.087 0 01-4.11-1.74c-1.52-.836-2.832-1.828-3.84-2.946A18.593 18.593 0 0015.336 37.82c-1.118-1.008-2.11-2.32-2.946-3.84a23.086 23.086 0 01-1.739-4.11zm9.147 8.633c-2.282-.32-4.454-2.154-6.141-5.22-.49-.89-.93-1.873-1.315-2.933 2.293.576 4.812.916 7.456.968v7.185zm5.907-.683c1.118-1.008 2.11-2.32 2.946-3.84a23.093 23.093 0 001.739-4.11 23.09 23.09 0 004.11-1.74c1.52-.836 2.833-1.828 3.84-2.946A18.593 18.593 0 0125.707 37.82zm2.995-7.47a20.824 20.824 0 01-1.316 2.933c-1.686 3.066-3.859 4.9-6.14 5.22v-7.185c2.643-.052 5.162-.392 7.456-.968zm2.17-2.171a20.824 20.824 0 002.933-1.315c3.066-1.687 4.9-3.86 5.221-6.141H31.84c-.053 2.644-.393 5.163-.969 7.456zm-.477-7.456c-.06 2.885-.475 5.594-1.163 7.987-2.393.687-5.101 1.102-7.987 1.162v-3.12a10.64 10.64 0 016.028-6.03h3.122zm1.446-1.446h7.185c-.321-2.282-2.154-4.454-5.22-6.14-.89-.49-1.873-.931-2.934-1.316.576 2.293.916 4.812.969 7.456zm-2.61-7.987c.688 2.393 1.103 5.102 1.163 7.987h-3.122a10.64 10.64 0 01-6.027-6.029v-3.12c2.885.06 5.593.475 7.986 1.162zm1.16-1.16a23.09 23.09 0 014.11 1.74c1.52.836 2.833 1.828 3.84 2.946A18.593 18.593 0 0025.707 2.18c1.118 1.008 2.11 2.32 2.946 3.84a23.095 23.095 0 011.739 4.11zm-9.146-8.633c2.281.32 4.454 2.154 6.14 5.22.49.89.93 1.872 1.316 2.933-2.294-.576-4.813-.916-7.457-.968V1.497z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoiconTextMultilineIcon;
/* prettier-ignore-end */