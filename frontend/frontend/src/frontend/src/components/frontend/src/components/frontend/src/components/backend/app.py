from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI()

class CampaignData(BaseModel):
    budget: float
    engagement_score: float

@app.post("/predict")
def predict_campaign(data: CampaignData):
    # Simulated prediction
    success_prob = min(max((data.engagement_score * 0.6 + data.budget * 0.4) / 100, 0), 1)
    return {"success_probability": round(success_prob, 2)}
