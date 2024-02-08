import Form from "./components/Form";

function App() {
  console.log(CredentialsContainer);
  return (
    <div id="fido-page__main-wrapper">
      <section className="grid grid-cols-1 mr-auto ml-auto grid-rows-2 place-items-center h-[100cqh] bg-slate-600">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="font-serif text-3xl font-bold text-[4cqw] text-teal-200">
            FIDO
          </h1>
          <main>
            <Form />
          </main>
        </div>
      </section>
    </div>
  );
}

export default App;
