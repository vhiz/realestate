import { CiSearch } from "react-icons/ci";

export default function Filter() {
  return (
    <div className=" w-full h-[10.8rem] flex flex-col">
      <h2 className="text-xl font-semibold">Search results for</h2>
      <form className="w-full">
        <label className="form-control w-full">
          <div className="label pb-0">
            <span className="label-text text-gray-500">Location</span>
          </div>
          <input
            type="text"
            className="input rounded-sm h-10 input-bordered border-gray-200 w-full focus:outline-none"
          />
        </label>
        <div className=" w-full flex justify-between items-center">
          <label className="form-control w-24 max-w-xs">
            <div className="label pb-0">
              <span className="label-text  text-gray-500 text-xs">Type</span>
            </div>
            <select className="select select-bordered  border-gray-200 w-full h-5 focus:outline-none rounded-sm text-sm">
              <option disabled selected>
                Any
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-24 max-w-xs">
            <div className="label pb-0">
              <span className="label-text  text-gray-500 text-xs">Property</span>
            </div>
            <select className="select select-bordered  border-gray-200 w-full h-5 focus:outline-none rounded-sm text-sm">
              <option disabled selected>
                Any
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-24 max-w-xs">
            <div className="label pb-0">
              <span className="label-text  text-gray-500 text-xs">Min Price</span>
            </div>
            <input
              type="number"
              min={0}
              max={10000000}
              defaultValue={0}
              className="input rounded-sm h-10 input-bordered border-gray-200 w-full focus:outline-none"
            />
          </label>
          <label className="form-control w-24 max-w-xs">
            <div className="label pb-0">
              <span className="label-text  text-gray-500 text-xs">Max Price</span>
            </div>
            <input
              type="number"
              min={0}
              max={10000000}
              defaultValue={0}
              className="input rounded-sm h-10 input-bordered border-gray-200 w-full focus:outline-none"
            />
          </label>
          <label className="form-control w-24 max-w-xs">
            <div className="label pb-0">
              <span className="label-text  text-gray-500 text-xs">Bedroom</span>
            </div>
            <input
              type="number"
              min={0}
              max={5}
              defaultValue={0}
              className="input rounded-sm h-10 input-bordered border-gray-200 w-full focus:outline-none"
            />
          </label>
          
          <button className="btn btn-warning rounded-sm w-24 mt-3 text-white ">
            <CiSearch className="text-2xl"/>
          </button>
        </div>
      </form>
    </div>
  );
}
