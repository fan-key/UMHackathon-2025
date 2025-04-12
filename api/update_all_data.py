from fetch_inflow import fetch_inflow_data
from fetch_netflow import fetch_netflow_data
from fetch_reserve import fetch_reserve_data
from merge_and_save import merge_data
from fetch_price import fetch_price_data


def update_all_data():
    # Fetch all data
    fetch_inflow_data()
    fetch_netflow_data()
    fetch_reserve_data()
    fetch_price_data()
    # Merge and save data
    merge_data()
    print("All data fetched and merged successfully.")

