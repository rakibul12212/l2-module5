import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-primary-gradient h-full w-full max-w-[1250] mx-auto">
      {children}
    </div>
  );
};

export default Container;
