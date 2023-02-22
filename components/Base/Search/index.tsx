import React from "react";

interface SearchProps extends React.PropsWithChildren {
  data: any;
  setFilterData: any;
}
const Search: React.FunctionComponent<SearchProps> = ({
  data,
  setFilterData,
}) => {
  const chanegHandler = (e: any) => {
    const filterData = data.filter((data: any) =>
      data.fullName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterData(filterData);
  };
  return (
    <div className="pb-4 flex flex-col gap-4 sm:flex-row">
      <p className="text-sm dark:text-white">تمام دانشجویان</p>
      <div>
        <input
          className="px-4 py-1 text-sm rounded-r-xl outline-0"
          placeholder="جستوجو دانشجو"
          onChange={chanegHandler}
        />
        <button className="px-4 py-1 text-sm bg-cyan-500 text-white rounded-l-xl">
          جستوجو
        </button>
      </div>
    </div>
  );
};

export default Search;
