import pandas as pd
import os

# Set directory where CSVs are stored
data_dir = "data"

def merge_data(): 
    # Load each dataset
    inflow = pd.read_csv(os.path.join(data_dir, "inflow_data.csv"))
    netflow = pd.read_csv(os.path.join(data_dir, "netflow_data.csv"))
    reserve = pd.read_csv(os.path.join(data_dir, "reserve_data.csv"))

    # Merge all on 'datetime'
    merged_df = inflow \
        .merge(netflow, on="datetime", how="inner") \
        .merge(reserve, on="datetime", how="inner") 

    # Save merged file
    output_path = os.path.join(data_dir, "merged_dataset.csv")
    merged_df.to_csv(output_path, index=False)

    print(f"Merged dataset saved to: {output_path}")

