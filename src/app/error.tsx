"use client";

interface Props {
  error: Error;
}

export default function error({ error }: Props) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
    </div>
  );
}
