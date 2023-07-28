"use client";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  console.log("render start");
  const [count, setCount] = useState(() => {
    console.log("state init");
    return 0;
  });

  useEffect(() => {
    console.log("count use effect");

    return () => console.log("clean up function call");
  });

  const element = (
    <>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </>
  );

  console.log("%cApp: render end", "color: red");
  return element;
}

// /* eslint-disable react/no-unescaped-entities */
// export default function Home() {
//   return (
//     <div>
//       Home Page Y y
//       <h1 className="font-secondary text-h1 font-700">
//         font-family: Bespoke Sans
//       </h1>
//       <h1 className="font-primary">primary font family</h1>
//       {/* <TextField /> */}
//     </div>
//   );
// }
