import axios from "axios";

const API_URL = "https://yukpilih-backend.up.railway.app/api/v1";
const ACCESS_TOKEN = localStorage.getItem("access_token");

export async function getData(url, params) {
  try {
    return await axios.get(`${API_URL}/${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function postData(url, data, formData) {
  try {
    return await axios.post(`${API_URL}/${url}`, data, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": formData ? "multipart/form-data" : "application/json",
      },
    });
  } catch (err) {
    return err;
  }
}

export async function putData(url, data, formData) {
  try {
    return await axios.put(`${API_URL}/${url}`, data, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": formData ? "multipart/form-data" : "application/json",
      },
    });
  } catch (err) {
    return err;
  }
}

export async function deleteData(url) {
  try {
    return await axios.delete(`${API_URL}/${url}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
  } catch (err) {
    return err;
  }
}
