import React from "react";

export default function Docs({params}) {
  return <div>concept:{params.slug[1]} features:{params.slug[3]}</div>;
}
