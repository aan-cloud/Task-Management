import { useState } from "react";
import { Link } from "react-router-dom";
import { CardStatus } from "../pages/Home";

export default function Features({
  openForm,
  children,
  form,
  handleSearch,
  handleFilter,
  handleSort,
}) {
  function handleform() {
    openForm();
  }

  return (
    <>
      {form && children}
      <section className="flex gap-3 px-[35px]">
        <Link
          to="/new"
          onClick={handleform}
          className="text-[14px] font-medium bg-[#0075EA] text-white py-[8px] px-[10px] rounded-md hover:bg-[#2473c2] transition-all "
        >
          New Task
        </Link>
        <div
          id="input"
          className="border-[1px] focus-within:ring-2 rounded-md border-[#BABABA] w-[200px] flex items-center px-[5px] shadow-sm "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mx-1 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="search"
            placeholder="Search"
            className=" w-full bg-transparent text-black outline-none text-[13px]  placeholder:text-[#656565] "
          />
        </div>
        <Filter handleFilter={handleFilter} />
        <Sort handleSort={handleSort} />
      </section>
    </>
  );
}

function Filter({ handleFilter }) {
  return (
    <select
      name="filter"
      id="filter"
      onChange={(e) => {
        handleFilter(e.target.value);
      }}
      className="text-center block w-40 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      <option value={CardStatus.DEFAULT} defaultValue={CardStatus.DEFAULT}>
        Filter Default
      </option>
      <option value={CardStatus.NOT_YET}>Not Yet</option>
      <option value={CardStatus.ON_PROCESS}>On Process</option>
      <option value={CardStatus.DONE}>Done</option>
    </select>
  );
}

function Sort({ handleSort }) {
  return (
    <select
      name="sort"
      id="sort"
      onChange={(e) => handleSort(e.target.value)}
      className="text-center block w-40 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      <option value="Default">Sort Default</option>
      <option value="A - Z">A To Z</option>
      <option value="Z - A">Z To A</option>
    </select>
  );
}
