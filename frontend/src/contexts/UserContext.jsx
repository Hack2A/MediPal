import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("userToken"); // Get token from localStorage
                if (!token) {
                    setLoading(false);
                    return;
                }

                const response = await axios.get("http://localhost:8080/v1/current-user", {
                    headers: { Authorization: `Bearer ${token}` }, // Send token in headers
                });

                console.log(response.data);

                setUser(response.data.user); // Example response: { role: "user" } or { role: "doctor" }
            } catch (error) {
                console.error("Error fetching user:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
