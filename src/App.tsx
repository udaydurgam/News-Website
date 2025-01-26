import NewsApp from "./components/NewsApp";
import "./App.css";
import { NewsItem } from "./components/Card";

function App() {
  return (
    <div>
      <NewsApp />
    </div>
  );
}

export default App; // Define props for the Card component
export interface CardProps {
  data: NewsItem[];
}
