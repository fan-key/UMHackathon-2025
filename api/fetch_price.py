import time
import os
import pandas as pd
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
API_KEY = os.getenv('API_KEY')

def fetch_price_data():
    end_time = int(time.time() * 1000)
    start_time = end_time - 86400 * 1000 

    params = {
        "exchange": "okx",
        "window": "hour",
        "end_time": end_time,
        "limit": 10000,
        "flatten": True
    }
    try:
        response = requests.get(
            "https://api.datasource.cybotrade.rs/cryptoquant/btc/market-data/price-ohlcv?exchange=okx&window=hour",
            headers={
            "X-API-Key": API_KEY
            },
            params=params,
        )

        data = response.json()
        df_price = pd.DataFrame(data['data'])

        output_directory = 'data'
        if not os.path.exists(output_directory):
            os.makedirs(output_directory)
        
        file_path = os.path.join(output_directory, 'price_data.csv')
        df_price.to_csv(file_path, index=False)

        print("price data fetched and saved to data/price_data.csv")
    
    except requests.exceptions.RequestException as e:
        print(f"Error fetching price data: {e}")
