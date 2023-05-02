import axios from "axios";

export async function getData(url, params, token) {
  try {
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function postData(url, data, formData, token) {
  try {
    return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": formData ? "multipart/form-data" : "application/json",
      },
    });
  } catch (err) {
    return err;
  }
}

export async function putData(url, data, formData, token) {
  try {
    return await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": formData ? "multipart/form-data" : "application/json",
      },
    });
  } catch (err) {
    return err;
  }
}

export async function deleteData(url, token) {
  try {
    return await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    return err;
  }
}
