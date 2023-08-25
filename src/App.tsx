import { createRoot } from "react-dom/client";

const App = () => {
  return <div className="m-0 p-0">hey</div>;
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
