from urllib.request import urlopen
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pgeocode
import json

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def get_weather(zip: str):
    return fetch_weather(zip)


def fetch_weather(zip_code):
    # TODO: make sure these are valid coordinates
    nomi = pgeocode.Nominatim('us')
    query = nomi.query_postal_code(zip_code)

    data = {
        "lat": query["latitude"],
        "lon": query["longitude"]
    }

    lat = data["lat"]
    long = data["lon"]

    # these are the variables that are requested
    # from the api
    vars = [
        "temperature_2m",
        "relative_humidity_2m",
        "apparent_temperature",
        "precipitation_probability",
        "precipitation",
        "snow_depth",
        "cloud_cover",
        "wind_speed_10m"
    ]

    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={long}&current={','.join(vars)}&temperature_unit=fahrenheit"
    response = urlopen(url)
    data_json = json.loads(response.read())
    return data_json["current"]
