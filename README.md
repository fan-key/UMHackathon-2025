# 📘 Crypto Signal Project

- Welcome to the Crypto Signal Project, a machine learning pipeline that predicts Bitcoin BUY, HOLD, or SELL signals based on on-chain metrics and market data.

## 📂 Project Structure

```
crypto-signal-project/
├── data/                        # 📊 Raw and processed data
│   ├── inflow_hourly.csv
│   ├── netflow_hourly.csv
│   ├── reserve_daily.csv
│   ├── merged_dataset.csv      # Cleaned dataset for ML
│   └── predictions_log.csv     # Optional: predictions output
│
├── notebooks/                  # 📓 Step-by-step Jupyter workflows
│   ├── 01_data_exploration.ipynb
│   ├── 02_merge_and_clean.ipynb
│   ├── 03_feature_engineering.ipynb
│   ├── 04_model_training.ipynb
│   ├── 05_evaluation.ipynb
│   └── 06_realtime_prediction.ipynb
│
├── scripts/                    # 🛠️ Python scripts for automation
│   ├── fetch_inflow.py
│   ├── fetch_netflow.py
│   ├── fetch_reserve.py
│   ├── merge_and_save.py
│   └── run_model_predict.py    # Optional: real-time prediction
│
├── models/                     # 🤖 Saved ML models
│   ├── model_random_forest.pkl
│   └── model_logistic_reg.pkl
│
├── utils/                      # ⚙️ Reusable helper functions
│   ├── preprocess.py
│   ├── classify_rules.py
│   └── model_utils.py
│
├── api/                        # 🌐 API and update logic
│   └── update_all_data.py
│
├── .env                        # 🔐 API keys, tokens (not committed)
├── requirements.txt            # 📆 Dependencies list
└── README.md                   # 📘️ Project overview and guide
```


## 🚀 Getting Started

### 1. Clone the repository
```
git clone https://github.com/your_username/crypto-signal-project.git
cd crypto-signal-project
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

🌐 Website: [https://crypto-signal-demo.vercel.app](https://kzmndafg4k7vrax3qj5i.lite.vusercontent.net)

📑 Slides: Crypto Signal Slide Deck

## 📬 Contact

For questions, contact [arfan.izanagi456@gmail.com] or open an issue.

Happy trading ↗️

