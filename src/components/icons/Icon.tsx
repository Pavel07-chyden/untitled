import React from "react";

type IIcon = {
  className?: string;
  name?: string;
  width?: string;
  height?: string;
  path?: string;
};
export const Icon: React.FC<IIcon> = ({
  className,
  name,
  width,
  height,
  path,
}) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={path ? path : `/static/sprite.svg#${name}`} />
    </svg>
  );
};
