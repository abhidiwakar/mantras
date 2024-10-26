import { useState } from "react";
import chalisa from "./assets/chalisa.json";
import Header from "./Header";
import { Chalisa } from "./chalisa.type";

export default function App() {
  const [selectedChalisa, setSelectedChalisa] = useState<Chalisa | null>(null);

  return (
    <>
      <Header />
      {selectedChalisa ? (
        <main className="flex flex-col items-center p-8">
          <button
            className="mb-10 btn"
            onClick={() => setSelectedChalisa(null)}
          >
            Close
          </button>
          <p className="text-2xl text-center">{selectedChalisa.title}</p>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: selectedChalisa.content }}
          />
        </main>
      ) : (
        <main className="p-6 grid grid-cols-2 md:grid-cols-6 gap-4">
          {chalisa.map((e) => (
            <div
              onClick={() => setSelectedChalisa(e as Chalisa)}
              className="card card-compact bg-base-200 cursor-pointer"
            >
              <figure>
                <img
                  src={`/assets/${e.image}`}
                  alt={e.title}
                  className="max-h-[150px]"
                />
              </figure>
              <div className="card-body flex items-center">
                <h2 className="card-title text-center">{e.title}</h2>
              </div>
            </div>
          ))}
        </main>
      )}
    </>
  );
}
