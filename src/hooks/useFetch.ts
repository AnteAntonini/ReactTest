import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            "X-Auth": "bWFydGlhbmFuZG1hY2hpbmU=",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return data;
};
