import Mermaid from '@/components/Mermaid';

const MyPage: React.FC = () => {
  const chart = `
    graph TD
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
  `;

  return (
    <div>
      <h1>My Mermaid Chart</h1>
      <Mermaid chart={chart} />
    </div>
  );
};

export default MyPage;