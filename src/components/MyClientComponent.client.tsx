import React from "react";

interface Props {
  children: React.ReactNode;
  color?: "red";
  intro?: React.ReactNode;
}

export default function MyClientComponent({ children, color, intro }: Props) {
  return (
    <div>
      <h1>This code is rendered on the client</h1>
      {children}
    </div>
  );
}
