from brandgenie import generate_brand_name, generate_brand_slogan, generate_keywords, generate_adcopy
from fastapi import FastAPI, Query
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware

MAX_INPUT_LENGTH = 32

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
    return {"brand_name": brand_name, "brand_slogan": None, "brand_adcopy": None, "keywords": []}

@app.get("/generate_brandslogan")
async def generate_brandslogan(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    brand_slogan = generate_brand_slogan(input)
    return {"brand_name": None, "brand_slogan": brand_slogan, "brand_adcopy": None, "keywords": []}

@app.get("/generate_brandadcopy")
async def generate_brandadcopy(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    adcopy = generate_adcopy(input)
    return {"brand_name": None, "brand_slogan": None, "brand_adcopy": adcopy, "keywords": None}

@app.get("/generate_brandkeywords")
async def generate_brandkeywords(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    keywords = generate_keywords(input)
    return {"brand_name": None, "brand_slogan": None, "brand_adcopy": None, "keywords": keywords}

@app.get("/generate_branding")
async def generate_branding(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    brand_name = generate_brand_name(input)
    brand_slogan = generate_brand_slogan(input)
    adcopy = generate_adcopy(input)
    keywords = generate_keywords(input)
    
    return {"brand_name": brand_name, "brand_slogan": brand_slogan, "brand_adcopy": adcopy, "keywords": keywords}

