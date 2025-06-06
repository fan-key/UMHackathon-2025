import pandas as pd
import os

# Set directory where CSVs are stored
data_dir = "data"

def merge_data(): 
    # Load each dataset
    inflow = pd.read_csv(os.path.join(data_dir, "inflow_data.csv"))
    netflow = pd.read_csv(os.path.join(data_dir, "netflow_data.csv"))
    reserve = pd.read_csv(os.path.join(data_dir, "reserve_data.csv"))
    price = pd.read_csv(os.path.join(data_dir, "price_data.csv"))

    # Merge all on 'datetime'
    # Merge datasets efficiently
    merged_df = inflow.merge(netflow[['start_time', 'netflow_total']], on='start_time', how='inner')
    merged_df = merged_df.merge(reserve[['start_time', 'reserve', 'reserve_usd']], on='start_time', how='left')
    merged_df = merged_df.merge(price[['start_time', 'close','high','low','open','volume']], on='start_time', how='left')

    # Save merged file
    output_path = os.path.join(data_dir, "merged_dataset.csv")
    merged_df.to_csv(output_path, index=False)

    print(f"Merged dataset saved to: {output_path}")

