const API_TOKEN = 'your-api-token'; // Replace with your actual API token

export const fetchStockData = async () => {
  try {
    const response = await fetch('https://api.example.com/stocks', {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};
