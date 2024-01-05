import { CardProps } from "@yext/search-ui-react";
import FinancialProfessional from "../types/financial_professionals";
import { Image } from "@yext/pages-components";
import { CiFacebook, CiGlobe, CiLinkedin } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FormatPhone from "./FormatPhone";
const ProfessionalCard = (props: CardProps<FinancialProfessional>) => {
  const { result } = props;
  const { name } = result;
  const {
    address,
    headshot,
    c_serviceAreasProfessionals,
    mainPhone,
    certifications,
    c_jobTitle,
    languages,
    yearsOfExperience,
    c_locationsProfessionals,
    description,
  } = result.rawData;

  return (
    <div className="flex flex-col  border shadow-md p-4">
      <div className="flex gap-4">
        <div className="basis-1/3 flex flex-col gap-4 items-center justify-between">
          <div className="flex gap-2">
            <Image image={headshot} className="!w-28 !h-28"></Image>
            <div className="flex flex-col my-auto">
              <div className="text-[#007f8a] text-xl font-light">{name}</div>
              <div className=" italic text-sm text-slate-500">{c_jobTitle}</div>
              <div className=" italic text-sm text-slate-500">
                Experience: {yearsOfExperience} Years
              </div>
            </div>
          </div>
          <div className="flex gap-8 mb-8">
            <div className="px-4 cursor-pointer py-2 rounded-full border text-sm text-white bg-[#105fa8] hover:bg-[#003a70]">
              Contact now
            </div>
            <div className="px-4 cursor-pointer py-2 rounded-full border text-sm text-white bg-[#105fa8] hover:bg-[#003a70]">
              View Website
            </div>
          </div>
        </div>
        <div className="basis-2/3 flex flex-col gap-8 pl-4 pb-4 border-l-2">
          <div className="flex gap-8">
            <div className="flex flex-col  gap-2 w-1/2">
              <div className="flex flex-col text-slate-500 font-normal">
                <div>{address.line1}</div>
                {address.line2 && <div>{address.line2}</div>}
                <div>
                  {address.city}, {address.region} {address.postalCode}
                </div>
              </div>
              <div className="flex flex-col gap-2 font-normal">
                <div className="flex gap-1 text-sm">
                  <div className="font-bold">Direct: </div>
                  <FormatPhone phoneNumber={mainPhone}></FormatPhone>
                </div>
                <div className="flex gap-1 text-sm">
                  <div className="font-bold">Branch: </div>
                  <FormatPhone
                    phoneNumber={c_locationsProfessionals[0].mainPhone}
                  ></FormatPhone>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {certifications && (
                <div>
                  <span className="font-medium">Certifications: </span>
                  <span className="font-light">
                    {certifications.join(", ")}
                  </span>
                </div>
              )}
              {languages && (
                <div>
                  <span className="font-medium">Languages: </span>
                  <span className="font-light">{languages.join(", ")}</span>
                </div>
              )}
              {yearsOfExperience && (
                <div>
                  <span className="font-medium">Experience: </span>
                  <span className="font-light">{yearsOfExperience} Years</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 text-[#105fa8]">
              <CiLinkedin className="w-8 h-8 hover:cursor-pointer" />
              <CiFacebook className="w-8 h-8 hover:cursor-pointer" />
              <FaRegEnvelope className="w-8 h-8 hover:cursor-pointer" />
              <CiGlobe className="w-8 h-8 hover:cursor-pointer" />
            </div>
            <div className="text-xs text-slate-500 italic">
              {name} is registered to do business in{" "}
              {c_serviceAreasProfessionals
                .map((entry) => entry.address.region)
                .join(", ")}
            </div>
          </div>
        </div>
      </div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-fit px-4 py-2 items-center rounded-lg ">
              <span className="text-lg">About me</span>
              <ChevronDownIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-8 w-8 text-[#105fa8]`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2  text-sm text-gray-500">
              {description}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ProfessionalCard;
