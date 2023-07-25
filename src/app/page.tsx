export default function Home() {
  return (
    <main className="">
      <div className="m-8 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Analyze Script</h1>
        <div className="border p-8 bg-gray-100 rounded-lg shadow-md">
          <form>
            <textarea
              className="w-full p-2 mb-4 border rounded-md shadow-sm resize-none"
              rows={10}
            ></textarea>
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Analyze
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
