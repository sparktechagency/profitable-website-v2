'use client';

import React, { useEffect, useState } from "react";
import {
  SearchOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  Button,
  Collapse,
  Card,
  Checkbox,
  Pagination,
} from "antd";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { City, Country, State } from "country-state-city";
import { Menu, X } from "lucide-react";
import Image from "next/image"; 
import { useGetAllBusinesFilterQuery, useGetCategtoryQuery } from "@/redux/Api/businessApi";
import { imageUrl } from "@/redux/Api/baseApi";

const { Panel } = Collapse;

const askingPrice = [
  "Under $50K",
  "$50K - $100K",
  "$100K - $250K",
  "$250K - $500K",
  "$500K - $1M",
  "Over $1M",
];

const businessType = [
  "Franchise",
  "Independent",
  "Startup",
  "Home-Based",
  "Online",
  "Other",
];

const ownerShipType = [
  "Sole Proprietorship",
  "Partnership",
  "Corporation",
  "LLC",
  "Other",
];

const sortBy = ["Newest First", "Price Low to High", "Most Viewed"];
const ageListing = [
  "Anytime",
  "Last 3 Days",
  "Last 14 Days",
  "Last Month",
  "Last 3 Month",
];

export default function AllBusinessFilterAnt() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const { data: categorys } = useGetCategtoryQuery();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSearchQuery(searchParams.get("query") || "");
  }, [searchParams]);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const handleCountryChange = (value, checked) => {
    if (checked) {
      setSelectedCountry(value);
      setStates(State.getStatesOfCountry(value));
      setCities([]);
      setSelectedState(null);
      setSelectedCity(null);
    } else {
      setSelectedCountry(null);
      setStates([]);
      setSelectedState(null);
      setCities([]);
      setSelectedCity(null);
    }
  };

  const handleStateChange = (value, checked) => {
    if (checked) {
      setSelectedState(value);
      const selectedStateObj = states?.find((s) => s.name === value);
      setCities(
        City.getCitiesOfState(selectedCountry, selectedStateObj?.isoCode)
      );
      setSelectedCity(null);
    } else {
      setSelectedState(null);
      setCities([]);
      setSelectedCity(null);
    }
  };

  const handleCityChange = (value, checked) => {
    if (checked) {
      setSelectedCity(value);
    } else {
      setSelectedCity(null);
    }
  };

  // Helper function to handle checkbox changes with single selection logic
  const handleCheckboxChange = (value, checked, setter) => {
    if (checked) {
      setter(value);
    } else {
      setter(null);
    }
  };

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || null);
    setSelectedSubCategory(searchParams.get("subCategory") || null);
    setSelectedCountry(searchParams.get("country") || null);
    setSelectedState(searchParams.get("state") || null);
    setSelectedCity(searchParams.get("city") || null);
    setSelectedLocation(searchParams.get("location") || null);
    setSelectedAskingPrice(searchParams.get("askingPrice") || null);
    setSelectedBusinessType(searchParams.get("businessType") || null);
    setSelectedOwnerShipType(searchParams.get("ownerShipType") || null);
    setSelectedSortBy(searchParams.get("sortBy") || null);
    setSelectedAgeListing(searchParams.get("ageOfListing") || null);
    setFilters(searchParams.get("businessRole") || null);
  }, [searchParams]);

  const [businessRole, setFilters] = useState([]);

  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedAskingPrice, setSelectedAskingPrice] = useState(null);
  const [selectedBusinessType, setSelectedBusinessType] = useState(null);
  const [selectedOwnerShipType, setSelectedOwnerShipType] = useState(null);
  const [selectedSortBy, setSelectedSortBy] = useState(null);
  const [selectedAgeListing, setSelectedAgeListing] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const { data: businessFilter } = useGetAllBusinesFilterQuery({
    category: selectedCategory,
    location: selectedLocation,
    country: selectedCountry,
    ageOfListing: selectedAgeListing,
    sortBy: selectedSortBy,
    businessType: selectedBusinessType,
    ownerShipType: selectedOwnerShipType,
    askingPrice: selectedAskingPrice,
    searchText: searchQuery,
    businessRole: businessRole,
    subCategory: selectedSubCategory,
    state: selectedState,
    city: selectedCity,
    page: currentPage,
    limit: pageSize,
  });

  const business = businessFilter?.data || [];

  const SidebarContent = () => (
    <div className="md:w-80 border-r border-gray-200 md:p-6 p-2">
      <Collapse
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <DownOutlined rotate={isActive ? 180 : 0} />
        )}
      >
        <Panel header="Business Category" key="1">
          {categorys?.data?.map((category) => (
            <div key={category?.categoryName} className="mb-2">
              <Checkbox
                checked={selectedCategory === category?.categoryName}
                onChange={(e) => {
                  handleCheckboxChange(
                    category?.categoryName,
                    e.target.checked,
                    setSelectedCategory
                  );
                  if (e.target.checked) {
                    setSelectedSubCategory(null);
                  }
                }}
              >
                {category?.categoryName}
              </Checkbox>

              {selectedCategory === category?.categoryName &&
                category?.subCategories?.length > 0 && (
                  <div className="ml-6 mt-2">
                    {category?.subCategories.map((sub) => (
                      <div key={sub?.name} className="mb-1">
                        <Checkbox
                          checked={selectedSubCategory === sub?.name}
                          onChange={(e) =>
                            handleCheckboxChange(
                              sub?.name,
                              e.target.checked,
                              setSelectedSubCategory
                            )
                          }
                        >
                          {sub?.name}
                        </Checkbox>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </Panel>
      </Collapse>

      <div className="my-2">
        <Collapse
        
          expandIcon={({ isActive }) => (
            <DownOutlined rotate={isActive ? 180 : 0} />
          )}
        >
          <Panel header="Country" key="1">
            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
              {countries?.map((country) => (
                <Checkbox
                  key={country?.isoCode}
                  checked={selectedCountry === country?.isoCode}
                  onChange={(e) =>
                    handleCountryChange(country?.isoCode, e.target.checked)
                  }
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={`https://flagcdn.com/w20/${country?.isoCode.toLowerCase()}.png`}
                      alt={country?.name}
                      width={20}
                      height={15}
                      className="object-cover"
                    />
                    {country?.name}
                  </div>
                </Checkbox>
              ))}
            </div>
          </Panel>
        </Collapse>
      </div>

      <div className="my-2">
        <Collapse
          expandIcon={({ isActive }) => (
            <DownOutlined rotate={isActive ? 180 : 0} />
          )}
        >
          <Panel header="State" key="2">
            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
              {states?.map((state) => (
                <Checkbox
                  key={state?.isoCode}
                  checked={selectedState === state?.name}
                  onChange={(e) =>
                    handleStateChange(state?.name, e.target.checked)
                  }
                >
                  {state?.name}
                </Checkbox>
              ))}
            </div>
          </Panel>
        </Collapse>
      </div>

      <div className="my-2">
        <Collapse
          expandIcon={({ isActive }) => (
            <DownOutlined rotate={isActive ? 180 : 0} />
          )}
        >
          <Panel header="City" key="3">
            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
              {cities?.map((city) => (
                <Checkbox
                  key={city?.name}
                  checked={selectedCity === city?.name}
                  onChange={(e) =>
                    handleCityChange(city?.name, e.target.checked)
                  }
                >
                  {city?.name}
                </Checkbox>
              ))}
            </div>
          </Panel>
        </Collapse>
      </div>

      <div className="my-2">
        <Collapse
          expandIcon={({ isActive }) => (
            <DownOutlined rotate={isActive ? 180 : 0} />
          )}
        >
          <Panel header="Asking Price" key="1">
            {askingPrice.map((option) => (
              <div key={option} className="mb-2">
                <Checkbox
                  checked={selectedAskingPrice === option}
                  onChange={(e) =>
                    handleCheckboxChange(option, e.target.checked, setSelectedAskingPrice)
                  }
                >
                  {option}
                </Checkbox>
              </div>
            ))}
          </Panel>
        </Collapse>
      </div>

      <div className="my-2">
        <Collapse
          expandIcon={({ isActive }) => (
            <DownOutlined rotate={isActive ? 180 : 0} />
          )}
        >
          <Panel header="Business Type" key="1">
            {businessType.map((option) => (
              <div key={option} className="mb-2">
                <Checkbox
                  checked={selectedBusinessType === option}
                  onChange={(e) =>
                    handleCheckboxChange(option, e.target.checked, setSelectedBusinessType)
                  }
                >
                  {option}
                </Checkbox>
              </div>
            ))}
          </Panel>
        </Collapse>
      </div>

      <div className="my-2">
        <Collapse
          expandIcon={({ isActive }) => (
            <DownOutlined rotate={isActive ? 180 : 0} />
          )}
        >
          <Panel header="Ownership Type" key="1">
            {ownerShipType.map((option) => (
              <div key={option} className="mb-2">
                <Checkbox
                  checked={selectedOwnerShipType === option}
                  onChange={(e) =>
                    handleCheckboxChange(option, e.target.checked, setSelectedOwnerShipType)
                  }
                >
                  {option}
                </Checkbox>
              </div>
            ))}
          </Panel>
        </Collapse>
      </div>

      <div className="my-2">
        <Collapse
          expandIcon={({ isActive }) => (
            <DownOutlined rotate={isActive ? 180 : 0} />
          )}
        >
          <Panel header="Sort By" key="1">
            {sortBy.map((option) => (
              <div key={option} className="mb-2">
                <Checkbox
                  checked={selectedSortBy === option}
                  onChange={(e) =>
                    handleCheckboxChange(option, e.target.checked, setSelectedSortBy)
                  }
                >
                  {option}
                </Checkbox>
              </div>
            ))}
          </Panel>
        </Collapse>
      </div>

      <div className="my-2">
        <Collapse
          expandIcon={({ isActive }) => (
            <DownOutlined rotate={isActive ? 180 : 0} />
          )}
        >
          <Panel header="Age Of Listing" key="1">
            {ageListing.map((option) => (
              <div key={option} className="mb-2">
                <Checkbox
                  checked={selectedAgeListing === option}
                  onChange={(e) =>
                    handleCheckboxChange(option, e.target.checked, setSelectedAgeListing)
                  }
                >
                  {option}
                </Checkbox>
              </div>
            ))}
          </Panel>
        </Collapse>
      </div>
    </div>
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Rest of the component remains the same...
  return (
    <div className="container m-auto">
      <div className="flex min-h-screen bg-white my-11">
        <div className="hidden lg:block">
          <SidebarContent />
        </div>

        <div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 border rounded-md z-50 -mt-11 fixed ml-4 bg-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {isSidebarOpen && (
            <div className="fixed inset-0 z-50 flex">
              <div
                className="fixed inset-0 bg-black bg-opacity-40"
                onClick={() => setIsSidebarOpen(false)}
              ></div>

              <div className="relative bg-white w-80 h-full overflow-auto shadow-lg z-50">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="absolute top-3 right-3 p-1 rounded-full bg-gray-200"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="mt-11">
                  <SidebarContent />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6 gap-4">
            <input
              className="border px-2 py-1"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your perfect event"
            />

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={businessFilter?.meta?.total || 0}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                  />
                </div>
              </div>

              <div className="flex">
                <Button
                  type={viewMode === "grid" ? "primary" : "default"}
                  icon={<AppstoreOutlined />}
                  onClick={() => setViewMode("grid")}
                />
                <Button
                  type={viewMode === "list" ? "primary" : "default"}
                  icon={<UnorderedListOutlined />}
                  onClick={() => setViewMode("list")}
                />
              </div>
            </div>
          </div>

          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {business?.map((business) => (
              <Card
                key={business.id}
                hoverable
                cover={
                  viewMode === "grid" ? (
                    <Image
                      alt={business.title}
                      src={`${imageUrl}/Uploads/business-image/${business.image}`}
                   
                        style={{
                        height: 250,
                        objectFit: "cover",
                      }}
                      width={1000}
                      height={500}
                      priority={false}
                    />
                  ) : null
                }
                style={{
                  width: "100%",
                  backgroundColor: viewMode === "list" ? "#f9fafb" : "#fff",
                }}
              >
                <div
                  className={
                    viewMode === "list"
                      ? "md:flex items-center gap-4"
                      : "p-4"
                  }
                >
                  {viewMode === "list" && (
                    <Image
                      alt={business.title}
                      src={`${imageUrl}/Uploads/business-image/${business.image}`}
                      width={400}
                      height={300}
                      style={{
                        width: "400px",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                      priority={false}
                    />
                  )}

                  <div className={viewMode === "list" ? "flex-1" : ""}>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {business.title}
                    </h2>
                    <p className="text-gray-600 mb-2">{business.location}</p>
                    <div className="mb-2">
                      <span className="text-blue-500">{business.category}</span>{" "}
                      ||{" "}
                      <span className="text-[#D97706]">
                        {business.subCategory}
                      </span>
                    </div>
                    <p className="text-gray-800 mb-4">
                      Starting from{" "}
                      <span className="font-semibold">
                        {business.askingPrice}
                      </span>
                    </p>
                    <Link href={`/details/${business?.slug}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="block md:hidden">
            <div className="flex justify-center mt-11 items-center gap-2">
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={businessFilter?.meta?.total || 0}
                onChange={handlePageChange}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}