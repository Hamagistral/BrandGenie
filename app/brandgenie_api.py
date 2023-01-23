from brandgenie import generate_brand_name, generate_brand_snippet, generate_keywords
from fastapi import FastAPI, Query

MAX_INPUT_LENGTH = 12

app = FastAPI()

@app.get("/generate_brandname")
async def generate_brandname(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    brand_name = generate_brand_name(input)
    return {"brand_name": brand_name, "brand_snippet": None, "keywords": []}

@app.get("/generate_brandsnippet")
async def generate_brandsnippet(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    brand_snippet = generate_brand_snippet(input)
    return {"brand_name": None, "brand_snippet": brand_snippet, "keywords": []}

@app.get("/generate_brandkeywords")
async def generate_brandkeywords(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    keywords = generate_keywords(input)
    return {"brand_name": None, "brand_snippet": None, "keywords": keywords}

@app.get("/generate_branding")
async def generate_branding(input: str = Query(max_length=MAX_INPUT_LENGTH)):

    brand_name = generate_brand_name(input)
    brand_snippet = generate_brand_snippet(input)
    keywords = generate_keywords(input)
    return {"brand_name": brand_name, "brand_snippet": brand_snippet, "keywords": keywords}