export default function GenerateKeys({
  generate,
  publicKey,
  privateKey,
  keys,
}) {
  const [a, b] = publicKey.length == 0 ? [ 0, 0 ] : publicKey;
  const [c, d] = privateKey.length == 0 ? [ 0, 0 ] : privateKey;
  return (
    <div className="h-full flex flex-col items-center">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          RSA
        </span>{" "}
        Encryption
      </h1>
      <p>
        Public Key: [{a}, {b}]
      </p>
      <p>
        Private Key: [{c}, {d}]
      </p>

      <button
        onClick={generate}
        type="button"
        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-14"
      >
        Generate
      </button>
      <div className="overflow-y-scroll h-2/5 no-scrollbar border-solid dark:bg-gray-800 dark:border-gray-700 mt-24 ">
        <table className="min-w-3/5 table-fixed table-fixed">
          <thead className="text-xs text-gray-700 uppercase border-solid dark:bg-gray-800 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr className="border dark:bg-gray-800 dark:border-gray-700">
              <th scope="col" className="px-6 py-3">
                Public Key
              </th>
              <th scope="col" className="px-6 py-3">
                Private Key
              </th>
            </tr>
          </thead>
          <tbody>
            {keys.map((row, index) => {
              const [a, b] = row.publicKey; // Destructure private_key outside of the return statement
              const [c, d] = row.privateKey; // Destructure private_key outside of the return statement
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="max-w-lg border border-gray-300 p-2 break-words"
                  >
                    [{a}, {b}]
                  </th>
                  <td className="border border-gray-300 p-2 break-words">
                    [{c}, {d}]
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
