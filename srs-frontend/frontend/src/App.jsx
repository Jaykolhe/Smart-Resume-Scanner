// import React from "react";
// import ResumeUpload from "./components/ResumeUpload";
// import ResumeSearch from "./components/ResumeSearch";

// export default function App() {
//   return (
//     <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center">
//         Smart Resume Screener
//       </h1>
//       <ResumeUpload />
//       <ResumeSearch />
//     </div>
//   );
// }

// import React from "react";
// import ResumeUpload from "./components/ResumeUpload";
// import ResumeSearch from "./components/ResumeSearch";
// import ErrorBoundary from "./components/ErrorBoundary";

// export default function App() {
//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold mb-6 text-center">
//           Smart Resume Screener
//         </h1>
//         <ResumeUpload />
//         <ErrorBoundary>
//           <ResumeSearch />
//         </ErrorBoundary>
//       </div>
//     </div>
//   );
// }

import React from "react";
import ResumeUpload from "./components/ResumeUpload";
import ResumeSearch from "./components/ResumeSearch";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Smart Resume Screener
        </h1>
        <ResumeUpload />
        <ErrorBoundary>
          <ResumeSearch />
        </ErrorBoundary>
      </div>
    </div>
  );
}
