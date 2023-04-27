

pages_visited = set('gan')

queue = ['gan']

while queue:
    url = queue.pop(0)
    print('Now crawling', url)
    pages_visited.add(url)
    # Get related pages from GPT
    # Get markdown
    # Save to disk
    
    for next_page in get_links_from_url(url):
        if next_page not in pages_visited:
            queue.append(next_page)