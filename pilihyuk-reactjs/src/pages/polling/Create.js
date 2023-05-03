import React from "react";

export default function Create() {
  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <div className="mb-3">
        <div className="text-lg font-semibold">Buat Polling Baru</div>
        <div className="text-xs text-muted">
          Anda dapat membuat polling baru dengan mengisi form di bawah ini.
            </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
