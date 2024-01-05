import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import {
  Facets,
  ResultsCount,
  AppliedFilters,
  Pagination,
  VerticalResults,
  Geolocation,
  SearchBar,
} from "@yext/search-ui-react";
import { useEffect } from "react";
import ProfessionalCard from "../components/ProfessionalCard";
import { MdMyLocation } from "react-icons/md";
import { useState } from "react";
import { Root } from "../types/openCage_response";

const ProfessionalsWrapper = () => {
  const searchActions = useSearchActions();
  const isLoading =
    useSearchState((state) => state.searchStatus.isLoading) || false;
  const [addressString, setAddressString] = useState("");
  const getAddress = async () => {
    const req =
      await fetch(`https://api.opencagedata.com/geocode/v1/json?q=-22.6792%2C+14.5272&key=${
        import.meta.env.YEXT_PUBLIC_OPENCAGE_KEY
      }&pretty=1
    `);
    const res: Root = await req.json();
    setAddressString(
      `${res.results[0].components.city}, ${res.results[0].components.state_code} ${res.results[0].components.postcode}`
    );
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const query = urlSearchParams.get("query");
    query && searchActions.setQuery(query);
    searchActions.setVertical("financial_professionals");
    searchActions.executeVerticalQuery();
  }, []);

  useEffect(() => {
    if (addressString) {
      addressString && searchActions.setQuery(addressString);
      searchActions.setVertical("financial_professionals");
      searchActions.executeVerticalQuery();
    }
  }, [addressString]);

  return (
    <>
      <div className="flex flex-col bg-[#007f8a]">
        <div className="centered-container w-full p-4 py-8">
          <SearchBar placeholder="Search by Name or Locations"></SearchBar>
          <div
            onClick={getAddress}
            className="w-fit flex gap-2 items-center hover:underline hover:cursor-pointer text-white"
          >
            <MdMyLocation />
            <div>Locate Me</div>
          </div>
        </div>
      </div>

      <div
        className={`flex mt-4 ${
          isLoading ? `opacity-70` : `opacity-100`
        } min-h-[90vh] h-full centered-container`}
      >
        <div className="w-72 mr-5 hidden md:block">
          <Facets customCssClasses={{ facetsContainer: "mr-10" }}></Facets>
        </div>
        <div className={`w-full `}>
          <div className="hidden md:flex w-full items-baseline justify-between">
            <ResultsCount />
          </div>
          <div className="flex justify-between mb-4">
            <AppliedFilters />
          </div>
          <div className={`flex flex-col space-y-4`}>
            <VerticalResults
              CardComponent={ProfessionalCard}
              customCssClasses={{
                verticalResultsContainer: `flex gap-4 flex-col`,
              }}
            />
            <div>
              <Pagination />
              <Geolocation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalsWrapper;
