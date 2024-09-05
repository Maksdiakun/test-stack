#  Stack overflow 

## Installation


1. Install dependencies:
```bash
 npm install
 ```
 
2. Run dev mode:
```bash
 npm run dev
```
 Open in browser - http://localhost:5173

### Description

I didn’t focus much on CSS or UI in this project. My main goal was to showcase my coding style and the key decisions typically involved when working with React. As a result, the project might seem overcoded in some areas, while in others, I didn’t spend much time on functionality that wouldn’t highlight my skills.

The project consists of two parts. The first part is a list, similar to Stack Overflow, and an open article page. For this part, I used React Query, because adding Redux would have been unnecessary due to small functionality. Everything related to this part can be found in the modules/question folder. During development, I encountered two main challenges:
Images in the articles didn’t load due to CORS issues, which I couldn’t resolve on the frontend. 
Truncating text in the article list was tricky. Since the text comes in as HTML, I couldn’t use a standard truncation function, as it might have cut off parts of HTML tags or elements. I found a package to handle this, but it took some time to find the solution.

The second part is a simple form  - module/onboarding (which doesn’t look particularly nice =) ). It was created to demonstrate Redux usage. I wasn’t sure if you’re using RTK or the classic version, so I built it with RTK. However, I’m equally comfortable with the classic Redux, having worked with it extensively in the past.
