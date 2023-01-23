import os
import openai
import argparse
import re

# Load OPENAI_API_KEY
from dotenv import load_dotenv
load_dotenv()

MAX_INPUT_LENGTH = 12

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    if validate_user_input(user_input):

        generate_brand_name(user_input)
        generate_brand_slogan(user_input)
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

    response = openai.Completion.create(model="text-davinci-001", prompt=prompt, temperature=0, max_tokens=32)
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

    response = openai.Completion.create(model="text-davinci-002", prompt=prompt, temperature=0, max_tokens=32)
    brand_slogan = response["choices"][0]["text"].strip()

    print(f"Branding Slogan : {brand_slogan}")
    return brand_slogan


def generate_keywords(user_input: str):

    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")

    prompt = f"Generate related keywords for an ecommerce website that sells {user_input}: "
    print(prompt)

    response = openai.Completion.create(model="text-davinci-001", prompt=prompt, temperature=0, max_tokens=16)
    
    # strip() to remove "\n\n"
    keywords = response["choices"][0]["text"].strip()
    
    # split the string and covert it to list
    keywords_array = re.split(",|-|\n", keywords)

    # Remove empty '' in the end
    keywords_array = [keyword.lower().strip() for keyword in keywords_array if keyword]

    print(f"Branding Snippet : {keywords_array}")
    return keywords_array 


def generate_image(user_input: str):

    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")

    prompt = f"Generate a high quality art work of {user_input}, digital art:"
    print(prompt)

    try:
        response = openai.Image.create(
            prompt=prompt,
            n=1,
            size="512x512"
        )

        image_url = response['data'][0]['url']
        print(image_url)

    except openai.error.OpenAIError as e:
        print(e.http_status)
        print(e.error)

    return image_url

if __name__ == "__main__":
    main()