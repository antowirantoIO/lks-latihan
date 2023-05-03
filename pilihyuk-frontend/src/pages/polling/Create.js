    import React, { useState } from "react";
import { postData } from "../../hooks/fetch";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    choices: [],
  });

  const [errors, setErrors] = useState({})

  const handleAddChoice = () => {
    let choice = document.getElementById("choice").value;
    setFormData({
        ...formData,
        choices: [...formData.choices, choice]
    })
  }

  const submitFormData = () => {
    postData('poll', formData).then((response) => {
        if(response?.data?.status){
            navigate('/')
        }

        setErrors(response.response.data.errors)
    })
  }

  return (
    <div className="max-w-screen-xl mx-auto my-5 p-4">
      <div className="mb-3">
        <div className="text-lg font-semibold">Buat Polling Baru</div>
        <div className="text-xs text-muted">
          Anda dapat membuat polling baru dengan mengisi form di bawah ini.
        </div>
      </div>
      <div className="mt-5">
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="grid gap-x-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-700"
                >
                  Judul
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      title: e.target.value,
                    });
                  }}
                  placeholder="Judul polling"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-800"
                />
                {errors.title ? (
                  <>
                    {errors.title.map((error, index) => (
                      <>
                        <p className="text-rose-500 text-sm">{error}</p>
                      </>
                    ))}
                  </>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-700"
                >
                  Deadline
                </label>
                <input
                  type="datetime-local"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      deadline: e.target.value,
                    });
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-800"
                />
                {errors.deadline ? (
                  <>
                    {errors.deadline.map((error, index) => (
                      <>
                        <p className="text-rose-500 text-sm">{error}</p>
                      </>
                    ))}
                  </>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5 md:w-1/2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-700"
              >
                Deskripsi
              </label>
              <textarea
                placeholder="Deskripsi polling"
                rows={5}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  });
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-800"
              />
              {errors.description ? (
                <>
                  {errors.description.map((error, index) => (
                    <>
                      <p className="text-rose-500 text-sm">{error}</p>
                    </>
                  ))}
                </>
              ) : null}
            </div>

            <button
              type="button"
              onClick={submitFormData}
              className="mt-5 transition duration-200 bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 text-white font-medium  px-5 py-[0.6rem] rounded-lg w-full flex items-center text-sm justify-center sm:w-auto "
            >
              {" "}
              Kirim Polling
            </button>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-5">
            {formData.choices.map((choice, index) => (
              <>
                <div className="p-4 border rounded-xl" key={index}>
                  <div className="flex justify-between items-center">
                    <div className="text-md font-medium">{choice}</div>
                    <div
                      className="text-red-800"
                      role="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          choices: formData.choices.filter(
                            (item, i) => i !== index
                          ),
                        })
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-trash-x-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                          stroke-width="0"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
                          stroke-width="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="p-4 border rounded-xl">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  id="choice"
                  placeholder="Masukan Pilihan"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-800"
                />
              </div>
            </div>
            {errors.choices ? (
              <>
                {errors.choices.map((error, index) => (
                  <>
                    <p className="text-rose-500 text-sm">{error}</p>
                  </>
                ))}
              </>
            ) : null}
            <button
              type="button"
              onClick={handleAddChoice}
              className="transition duration-200 bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 text-white font-medium  px-5 py-[0.6rem] rounded-lg w-full flex items-center text-sm justify-center sm:w-auto "
            >
              Tambah Pilihan{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
