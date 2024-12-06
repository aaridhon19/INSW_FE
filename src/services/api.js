import axios from "axios";

const API_BASE_URL = "https://api-hub.ilcs.co.id/test/v2";

export const fetchDataUtama = async (nomorPengajuan) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dataUtama?nomor_pengajuan=${nomorPengajuan}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export const fetchDataEntitas = async (idAju) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dataEntitas?id_aju=${idAju}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export const fetchDataPungutan = async (idAju) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dataPungutan?id_aju=${idAju}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}