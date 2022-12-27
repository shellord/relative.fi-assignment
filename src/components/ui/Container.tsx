import React, { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="bg-primary h-screen overflow-y-auto">{children}</div>;
};

export default Container;
