import os
import openai
import argparse
import re

MAX_INPUT_LENGTH = 12

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    if validate_user_input(user_input):

        generate_brand_name(user_input)
        generate_brand_snippet(user_input)
        generate_keywords(user_input)
        
    else:
        raise ValueError(f"Input length is too long. Must be under {MAX_INPUT_LENGTH}.")

def validate_user_input(user_input: str):
    return len(user_input) <= MAX_INPUT_LENGTH 

def generate_brand_name(user_input: str) -> str:

    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")

    prompt = f"Generate unique and catchy brand name for an ecommerce website that sells {user_input}: "
    print(prompt)

    response = openai.Completion.create(model="text-davinci-001", prompt=prompt, temperature=0, max_tokens=32)
    brand_name = response["choices"][0]["text"].strip()

    print(f"Brand Name : {brand_name}")
    return brand_name
    

def generate_brand_snippet(user_input: str) -> str:

    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")

    prompt = f"Generate unique and short branding snippet for an ecommerce website that sells {user_input}: "
    print(prompt)

    response = openai.Completion.create(model="text-davinci-001", prompt=prompt, temperature=0, max_tokens=32)
    brand_snippet = response["choices"][0]["text"].strip()

    print(f"Branding Snippet : {brand_snippet}")
    return brand_snippet


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
    keywords_array = [keyword.lower() for keyword in keywords_array if keyword]

    print(f"Branding Snippet : {keywords_array}")
    return keywords_array 

if __name__ == "__main__":
    main()