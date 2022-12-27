import React, { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="bg-primary h-screen">{children}</div>;
};

export default Container;
