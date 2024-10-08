import lipsum from "@/util/lipsum";

export default function Page() {
  return (
    <div>
      <h1 className="page-title">Sejarah Gereja</h1>
      <div>
        <p>{lipsum.generateSentences(10)}</p>
        <p>{lipsum.generateSentences(8)}</p>
        <p>{lipsum.generateSentences(24)}</p>
      </div>
    </div>
  );
}
