type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PastePage({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.BASE_URL}/api/pastes/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>❌ Paste Not Found</h1>
      </div>
    );
  }

  const paste = await res.json();

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>✅ Paste ID: {id}</h1>

      <pre
        style={{
          background: "#f4f4f4",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px",
          whiteSpace: "pre-wrap",
        }}
      >
        {paste.content}
      </pre>
    </div>
  );
}
