import axios from "axios";

type Props = {
    url: string;
    params?: any;
    data?: any;
    token?: string;
    formData?: boolean;
}

const BaseURL = "http://127.0.0.1:8000/api/v1";

export async function getData({url, params, token}: Props) {
    try {  
      return await axios.get(`${BaseURL}/${url}`, {
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
  
  export async function postData({url, data, formData, token}: Props) {
    try {
      return await axios.post(`${BaseURL}/${url}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": formData ? "multipart/form-data" : "application/json",
        },
      });
    } catch (err) {
      return err;
    }
  }

  export async function putData({url, data, formData, token}: Props) {
    try {
      return await axios.put(`${BaseURL}/${url}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": formData ? "multipart/form-data" : "application/json",
        },
      });
    } catch (err) {
      return err;
    }
  }
  
  export async function deleteData({url, token}: Props) {
    try {
      return await axios.delete(`${BaseURL}/${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      return err;
    }
  }