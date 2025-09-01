// import { useMemo } from "react";

// export function useUniversalNavigate() {
//   let isNext = false;
//   let isReactRouter = false;

//   try {
//     require.resolve("next/router");
//     isNext = true;
//   } catch {}

//   try {
//     require.resolve("react-router-dom");
//     isReactRouter = true;
//   } catch {}

//   return useMemo(() => {
//     if (isNext) {
//       const { useRouter } = require("next/router");
//       const router = useRouter();
//       return (path) => router.push(path);
//     }

//     if (isReactRouter) {
//       const { useNavigate } = require("react-router-dom");
//       const navigate = useNavigate();
//       return (path) => navigate(path);
//     }
//     return (path) => {
//       if (typeof window !== "undefined") {
//         window.location.href = path;
//       }
//     };
//   }, [isNext, isReactRouter]);
// }


import { useEffect, useState, useCallback } from "react";

export function useUniversalNavigate() {
  const [navigateFunc, setNavigateFunc] = useState(() => (path) => {
    if (typeof window !== "undefined") window.location.href = path;
  });

  useEffect(() => {
    let isNext = false;
    let isReactRouter = false;

    try { require.resolve("next/router"); isNext = true } catch {}
    try { require.resolve("react-router-dom"); isReactRouter = true } catch {}

    if (isNext) {
      const { useRouter } = require("next/router");
      const router = useRouter();
      if (router) setNavigateFunc(() => (path) => router.push(path));
    } else if (isReactRouter) {
      const { useNavigate } = require("react-router-dom");
      const navigate = useNavigate();
      setNavigateFunc(() => (path) => navigate(path));
    }
  }, []);

  return useCallback((path) => navigateFunc(path), [navigateFunc]);
}

