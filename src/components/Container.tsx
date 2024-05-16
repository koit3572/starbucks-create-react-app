import React from 'react'
interface IContainerProps {
  children: React.ReactNode;
  backgroundColor: string;
}
const Container: React.FC<IContainerProps> = ({
  children,
  backgroundColor,
}) => {
  return (
    <div
      className="container"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="inner">{children}</div>
    </div>
  );
};

export default Container