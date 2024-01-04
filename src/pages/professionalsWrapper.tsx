import { useSearchActions } from "@yext/search-headless-react";
import {
  Facets,
  ResultsCount,
  AppliedFilters,
  Pagination,
  StandardCard,
  VerticalResults,
  Geolocation,
  SearchBar,
} from "@yext/search-ui-react";
import { useEffect } from "react";
import ProfessionalCard from "../components/ProfessionalCard";
import { MdMyLocation } from "react-icons/md";
import { useState } from "react";
import * as OpenCage from "opencage-api-client";
import { Root } from "../types/openCage_response";

const ProfessionalsWrapper = () => {
  const searchActions = useSearchActions();

  const [addressString, setAddressString] = useState("");
  const getAddress = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const apiKey = import.meta.env.YEXT_PUBLIC_OPENCAGE_KEY;
            const response: Root = await OpenCage.geocode({
              q: `${latitude},${longitude}`,
              key: apiKey,
            });

            setAddressString(
              `${
                (response.results[0].components.city,
                response.results[0].components.state_code)
              } ${response.results[0].components.postcode}`
            );
          } catch (error) {
            console.error("Error fetching address:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
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
      <div className="flex flex-col">
        <SearchBar placeholder="Search by Name or Locations"></SearchBar>
        <div
          onClick={getAddress}
          className="w-fit flex gap-2 items-center hover:underline hover:cursor-pointer text-[#105fa8]"
        >
          <MdMyLocation />
          <div>Locate Me</div>
        </div>
      </div>

      <div className={`flex mt-4 `}>
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
          <div className="flex flex-col space-y-4 ">
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
