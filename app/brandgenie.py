import os
import openai
import argparse
import re

# Load OPENAI_API_KEY
from dotenv import load_dotenv
load_dotenv()

MAX_INPUT_LENGTH = 32

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    if validate_user_input(user_input):

        generate_brand_name(user_input)
        generate_brand_slogan(user_input)
        generate_adcopy(user_input)
        generate_keywords(user_input)
        generate_image(user_input)
        
    else:
        raise ValueError(f"Input length is too long. Must be under {MAX_INPUT_LENGTH}.")

def validate_user_input(user_input: str):
    return len(user_input) <= MAX_INPUT_LENGTH 

def generate_brand_name(user_input: str) -> str:

    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")

    prompt = f"Generate unique, original and creative brand name for an ecommerce website that sells {user_input}: "
    print(prompt)

    response = openai.Completion.create(model="text-davinci-003", prompt=prompt, temperature=0, max_tokens=24)
    brand_name = response["choices"][0]["text"].strip()

    # In case there's multiple choices, take the first one
    if '.' in brand_name:
        # Split the string by newline characters and access the first element
        first_brand_name = brand_name.split('\n')[0]
        # Extracting the first word from the string 
        result = first_brand_name.split('.')[1]
        # Removing leading whitespace
        result = result.strip()
    else:
        result = brand_name

    print(f"Brand Name : {result}")
    return result
    

def generate_brand_slogan(user_input: str) -> str:

    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")

    prompt = f"Generate unique, original, creative and short brand slogan for an ecommerce website that sells {user_input}: "
    print(prompt)

    response = openai.Completion.create(model="text-davinci-003", prompt=prompt, temperature=0, max_tokens=32)
    brand_slogan = response["choices"][0]["text"].strip()

    print(f"Branding Slogan : {brand_slogan}")
    return brand_slogan


def generate_keywords(user_input: str):

    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")

    prompt = f"Generate related keywords for an ecommerce website that sells {user_input}: "
    print(prompt)

    response = openai.Completion.create(model="text-davinci-003", prompt=prompt, temperature=0.1, max_tokens=32)
    
    # strip() to remove "\n\n"
    keywords = response["choices"][0]["text"].strip()
    
    # split the string and covert it to list
    keywords_array = re.split(",|-|\n", keywords)

    # Remove empty '' in the end
    keywords_array = [keyword.lower().strip() for keyword in keywords_array if keyword]

    print(f"Branding Keywords : {keywords_array}")
    return keywords_array 

def generate_adcopy(user_input: str):

    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")

    prompt = f"Write a creative ad for the following product to run on Facebook {user_input}: "
    print(prompt)

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=f"Write a creative ad for the following product to run on Facebook:\n\nProduct: {user_input}",
        temperature=0.5,
        max_tokens=72,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )

    brand_adcopy = response["choices"][0]["text"].strip('\n')
    
    print(brand_adcopy)
    return brand_adcopy


def generate_image(user_input: str):

    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")

    prompt = f"{user_input}, logo, digital art, drawing, in a dark circle as the background:"
    print(prompt)

    response = openai.Image.create(prompt=prompt, n=1, size="256x256")

    image_url = response['data'][0]['url']
    
    print(image_url)
    return image_url

if __name__ == "__main__":
    main()