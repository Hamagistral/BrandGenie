from brandgenie import generate_brand_name, generate_brand_slogan, generate_keywords, generate_image
from fastapi import FastAPI, Query
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware

MAX_INPUT_LENGTH = 12

app = FastAPI()
handler = Mangum(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/generate_brandname")
async def generate_brandname(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    brand_name = generate_brand_name(input)
    return {"brand_name": brand_name, "brand_slogan": None, "keywords": [], "brand_image": None}

@app.get("/generate_brandslogan")
async def generate_brandslogan(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    brand_slogan = generate_brand_slogan(input)
    return {"brand_name": None, "brand_slogan": brand_slogan, "keywords": [], "brand_image": None}

@app.get("/generate_brandkeywords")
async def generate_brandkeywords(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    keywords = generate_keywords(input)
    return {"brand_name": None, "brand_slogan": None, "keywords": keywords, "brand_image": None}

@app.get("/generate_brandimage")
async def generate_brandimage(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    image_url = generate_image(input)
    return {"brand_name": None, "brand_slogan": None, "keywords": None, "brand_image": image_url}

@app.get("/generate_branding")
async def generate_branding(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    brand_name = generate_brand_name(input)
    brand_slogan = generate_brand_slogan(input)
    keywords = generate_keywords(input)
    image_url = generate_image(input)
    return {"brand_name": brand_name, "brand_slogan": brand_slogan, "keywords": keywords, "brand_image": image_url}

