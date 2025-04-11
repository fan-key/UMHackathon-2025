from fetch_inflow import fetch_inflow_data
from fetch_netflow import fetch_netflow_data
from fetch_reserve import fetch_reserve_data
from merge_and_save import merge_data

fetch_inflow_data()
fetch_netflow_data()
fetch_reserve_data()
merge_data()
print("All data updated and merged.")