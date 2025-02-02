export default function ErrorNotif({ setError, errorMessage }) {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="m-8 my-20 max-w-[400px] mx-auto">
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-extrabold">
                Error Occured
              </h1>
              <p className="text-gray-600">
                {errorMessage}
              </p>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => {
                  setError(false);
                }}
                className="p-3 bg-white border rounded-full w-full font-semibold hover:bg-red-500 hover:text-white  "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
