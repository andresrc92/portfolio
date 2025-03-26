import React from "react";

export interface SectionWrapperProps {
  Component: React.ComponentType;
  idName: string;
}

const SectionWrapper =
  ({ Component, idName }: SectionWrapperProps) =>
  () =>
    (
      <>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </>
    );

export default SectionWrapper;
