import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <main className="px-5 md:px-0 py-14 md:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center">
        {children}
      </div>
    </main>
  );
};
