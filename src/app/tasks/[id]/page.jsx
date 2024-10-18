import React from "react";

export default function page({ params }) {
  return <div className="h-screen">Details of Task ID: {params.id}</div>;
}
