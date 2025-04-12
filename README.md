# 📘 UMHackathon-2025

- Welcome to the Crypto Signal Project, a machine learning pipeline that predicts Bitcoin BUY, HOLD, or SELL signals based on on-chain metrics and market data.

## 📂 Project Structure

```
UMHackathon-2025/
├── data/                        # 📊 Raw and processed data
│   ├── inflow_hourly.csv
│   ├── netflow_hourly.csv
│   ├── reserve_daily.csv
│   ├── merged_dataset.csv      # Cleaned dataset for ML
│
├── notebooks/                  # 📓 Step-by-step Jupyter workflows
│   ├── 01_data_exploration.ipynb
│   ├── 02_feature_engineering.ipynb
│   ├── 03_model_training.ipynb
│   ├── 04_evaluation.ipynb
│   └── 05_realtime_prediction.ipynb
│
├── api/                    # 🛠️ Python scripts to fetch data
│   ├── fetch_inflow.py
│   ├── fetch_netflow.py
│   ├── fetch_reserve.py
│   ├── merge_and_save.py
│   └── update_all_data.py
|
├── models/                     # 🤖 Saved ML models
│   ├── model_random_forest.pkl
│
├── .env                        # 🔐 API keys, tokens (not committed)
├── requirements.txt            # 📆 Dependencies list
└── README.md                   # 📘️ Project overview and guide
```


## 🚀 Getting Started

### 1. Clone the repository
```
git clone https://github.com/fan-key/UMHackathon-2025.git
cd UMHackathon-2025
```
### 2. Install dependencies
```
pip install -r requirements.txt
```
### 3. Set up .env file
```
API_KEY=your_api_key
```
### 5. Run notebooks

Use the notebooks in order for step-by-step development:

```01_data_exploration.ipynb```: Visualize raw data

```03_feature_engineering.ipynb```: Create useful features

```04_model_training.ipynb```: Train the ML model

```05_evaluation.ipynb```: Test model accuracy

```06_realtime_prediction.ipynb```: Use model for real-time prediction

## 💡 Highlights

- Modular Jupyter notebooks

- Clean and reusable scripts and utilities

- Easily expandable with new metrics or models

- API support for fresh data fetching

## 📅 Live Resources


🌐 Website: [Prototype](https://kzmndafg4k7vrax3qj5i.lite.vusercontent.net)

📑 Slides: [5 Budak Bujang Slide Presentation](https://www.canva.com/design/DAGkaafQy2Y/sVlOGva2sfuia4vq9VJpXA/edit?utm_content=DAGkaafQy2Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## 📬 Contact

For questions, contact [arfan.izanagi456@gmail.com] or open an issue.

Happy trading ↗️

