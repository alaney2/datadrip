import openai
import requests
import json
import os
from dotenv import load_dotenv

def generate_prompt(topic):
    prompt = f'Topic: {topic}\n' + '''
    Provide a JSON object containing the topic, a list of 1-12 prerequisite topics, and a list of 1-12 further readings related to AI, ML, and DL. 
    Ensure that the prerequisites and further readings are specifically relevant to the given, rather than broad topics like calculus or statistics. 
    Use a similar format to the example provided below:

    Example:
    "generative_adversarial_network": {
    "title": "Generative Adversarial Network",
    "prerequisites": ["expectation_maximization_algorithm", "probability_distributions", "convolutional_neural_networks", "backpropagation", "stochastic_gradient_descent", "loss_functions", "optimization_algorithms", "deep_learning_frameworks", "regularization_techniques", "unsupervised_learning"],
    "further_readings": ["conditional_gans", "cycle_gans", "stylegan_and_stylegan2", "wasserstein_gans", "domain_adaptation", "image_to_image_translation", "semi_supervised_learning", "adversarial_training", "adversarial_attacks_and_defenses", "transfer_learning"]
    },

    Next, write a detailed wiki page about the given topic in Markdown format, from the perspective of a world-renowned AI and ML expert. 
    Ensure that this wiki page is explicitly in code format. Do not include a "Contents" section nor a "Further Readings" section.
    Use a neutral, unbiased tone without exclamation marks, and write in the style of a melancholic older person. 
    Follow Markdown syntax for headings and formatting, and use LaTeX for equations, with inline equations in pairs of $ and multiline equations in $$. 
    Ensure the entire output is less than 8192 tokens long and does not include an extra line at the end of the Markdown.
    '''
    return prompt

prompt = generate_prompt('gan')

load_dotenv('.env.local')

openai.api_key = os.getenv("OPENAI_API_KEY")

url = 'https://api.openai.com/v1/chat/completions'

completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": prompt}
    ],
    temperature=0.7,
)

finish_reason = completion['finish_reason']
message = completion.choices[0].message.content




# pages_visited = set('gan')

# queue = ['gan']

# while queue:
#     url = queue.pop(0)
#     print('Now crawling', url)
#     pages_visited.add(url)
#     # Get related pages from GPT
#     # Get markdown
#     # Save to disk
    
#     for next_page in get_links_from_url(url):
#         if next_page not in pages_visited:
#             queue.append(next_page)