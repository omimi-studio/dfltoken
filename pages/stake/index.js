export default function app() {
  return (
    <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8 lg:py-40 flex flex-col lg:flex-row items-center justify-center bg-indigo-900">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
        <div className="px-4 pt-10 md:pt-24 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
          <div>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              1000 DFL
            </h1>
            <p className="mt-3 text-5xl text-gray-300 sm:mt-5  lg:text-4xl xl:text-4xl">
              Total Staked
            </p>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0 p-4 rounded-lg shadow-lg">
          <form method="POST" className="space-y-6 w-full">
            <div className="border rounded-lg border-gray-500/50  ">
              <label htmlFor="amount" className="sr-only">
                Stake Amount
              </label>
              <span className="flex mb-4 justify-between text-white/70 font-bold  px-6 pt-4">
                <h4>STAKE AMOUNT</h4>
                <p className="text-gray-400">Available: 1000 DFL</p>
              </span>
              <input
                type="number"
                name="stake-amount"
                id="stake-amount"
                autoComplete="amount"
                placeholder="stake amount"
                required
                className="appearance-none block w-full px-4 py-4 bg-transparent rounded-md tacking-wider font-bold text-white  sm:text-3xl"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <div className="border rounded-lg border-gray-500/50 bg-[#0B142E] ">
              <label htmlFor="mobile-or-email" className="sr-only">
                ACTION
              </label>
              <span className="flex mb-4 justify-between text-white/70 font-bold  px-6 pt-4">
                <h4>ACTION</h4>
              </span>
              <select
                onChange={(e) => console.log(e.target.value)}
                id="action-type"
                name="action-type"
                className="appearance-none block w-full px-4 py-4 bg-transparent rounded-md tacking-wider font-bold text-white  sm:text-3xl"
              >
                <option className=" text-black text-2xl px-4 py-4 font-bold ">
                  Stake
                </option>
                <option className=" text-black text-2xl px-4 py-4 font-bold ">
                  Unstake
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="range" className="sr-only">
                Stake
              </label>
              <span className="flex mb-4 justify-between items-center text-white">
                <h4>Stake</h4>
                <span className="px-6 py-2 w-26 justify-self-end text-center bg-black  font-bold rounded-full text-white">
                  1000
                </span>
              </span>
              <input
                type="range"
                name="range"
                id="range"
                min="0"
                max="100"
                required
                className="range-slider block w-full bg-transparent rounded-lg cursor-pointer h-2 shadow-sm sm:text-xl"
              />
              <span className="flex mt-4 justify-between text-white">
                <h4>0%</h4>
                <h4>100%</h4>
              </span>
            </div>

            <div>
              <button className=" bg-gradient-to-bl from-emerald-500 to-purple-500 flex w-full justify-center rounded-md border border-transparent py-4 px-4 text-xl font-medium text-white shadow-sm focus:outline-none">
                Submit
              </button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
}
