import axios from "axios";

const apiUrl = 'http://localhost:1337';

export const fetchCollections = async () => {

    try {
        const response = await axios.get(`${apiUrl}/content-manager/content-types`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des collections :', error);
        throw error;
    } 
}