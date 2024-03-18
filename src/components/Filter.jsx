import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowUp } from "react-icons/md";
export default function Filter() {
  return (
    <div className=" w-full  flex flex-col lg:h-[10.8rem]">
      <h2 className="text-xl font-semibold">Search results for</h2>
      <div className="dropdown lg:dropdown-open w-full">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-transparent border-none lg:hidden"
        >
          <MdKeyboardArrowUp />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-full"
        >
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
            <div className=" w-full flex flex-col justify-between gap-y-4 lg:gap-y-0 items-center lg:flex-row">
              <label className="form-control w-full lg:w-24 lg:max-w-xs">
                <div className="label pb-0">
                  <span className="label-text  text-gray-500 text-xs">
                    Type
                  </span>
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
              <label className="form-control w-full lg:w-24 lg:max-w-xs">
                <div className="label pb-0">
                  <span className="label-text  text-gray-500 text-xs">
                    Property
                  </span>
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
              <label className="form-control w-full lg:w-24 lg:max-w-xs">
                <div className="label pb-0">
                  <span className="label-text  text-gray-500 text-xs">
                    Min Price
                  </span>
                </div>
                <input
                  type="number"
                  min={0}
                  max={10000000}
                  defaultValue={0}
                  className="input rounded-sm h-10 input-bordered border-gray-200 w-full focus:outline-none"
                />
              </label>
              <label className="form-control w-full lg:w-24 lg:max-w-xs">
                <div className="label pb-0">
                  <span className="label-text  text-gray-500 text-xs">
                    Max Price
                  </span>
                </div>
                <input
                  type="number"
                  min={0}
                  max={10000000}
                  defaultValue={0}
                  className="input rounded-sm h-10 input-bordered border-gray-200 w-full focus:outline-none"
                />
              </label>
              <label className="form-control w-full lg:w-24 lg:max-w-xs">
                <div className="label pb-0">
                  <span className="label-text  text-gray-500 text-xs">
                    Bedroom
                  </span>
                </div>
                <input
                  type="number"
                  min={0}
                  max={5}
                  defaultValue={0}
                  className="input rounded-sm h-10 input-bordered border-gray-200 w-full focus:outline-none"
                />
              </label>

              <button className="btn btn-warning rounded-sm w-full lg:w-24 lg:mt-3 text-white ">
                <CiSearch className="text-2xl" />
              </button>
            </div>
          </form>
        </ul>
      </div>
    </div>
  );
}
