import Mermaid from '@/components/Mermaid';

const MyPage: React.FC = () => {
  const chart = `
    graph TD
    A[Start] --> B[Process]
    B --> C[End]
    click A "https://example.com" "Tooltip for link"
    click B "https://example.com/process" "Go to process page"
    click C "https://example.com/end" "End page"
  `;

  return (
    <div>
      <h1>My Mermaid Chart</h1>
      <Mermaid chart={chart} />
    </div>
  );
};

export default MyPage;