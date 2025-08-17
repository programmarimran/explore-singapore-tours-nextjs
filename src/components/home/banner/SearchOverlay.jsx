"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchOverlay = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      location: "",
      checkInDate: null,
      checkOutDate: null,
    },
  });

  const onSubmit = (data) => {
    console.log("Searching...", data);
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-6xl px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-2xl p-6 backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Location */}
<div className="space-y-2">
  <label className="flex items-center text-gray-700 font-medium text-sm">
    <svg
      className="w-4 h-4 mr-2 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
    Location
  </label>
  <select
    {...register("location")}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700"
  >
    <option value="">Select a location</option>
    <option value="Marina Bay">Marina Bay</option>
    <option value="Orchard Road">Orchard Road</option>
    <option value="Sentosa">Sentosa</option>
    <option value="Chinatown">Chinatown</option>
    <option value="Little India">Little India</option>
    <option value="Bugis">Bugis</option>
    <option value="Clarke Quay">Clarke Quay</option>
    <option value="Tiong Bahru">Tiong Bahru</option>
    <option value="Holland Village">Holland Village</option>
  </select>
</div>


          {/* Check In Date */}
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium text-sm">
              Check In
            </label>
            <Controller
              control={control}
              name="checkInDate"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select check-in date"
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700"
                  dateFormat="yyyy-MM-dd"
                />
              )}
            />
          </div>

          {/* Check Out Date */}
          <div className="space-y-2 w-full">
            <label className="flex items-center text-gray-700 font-medium text-sm">
              Check Out
            </label>
            <Controller
              control={control}
              name="checkOutDate"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select check-out date"
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700"
                  dateFormat="yyyy-MM-dd"
                  minDate={control._formValues.checkInDate || new Date()}
                />
              )}
            />
          </div>

          {/* Search Button */}
          <div className="md:pb-0 pb-2">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchOverlay;
