# Notes SPA

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET necessary JS and CSS to load /exampleapp/spa
    activate server
    server-->>browser: Necessary files are retrieved from the server (or browser cache)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON array of notes
    Note left of server: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    Note right of browser: Parses notes as JSON and appends them to the DOM
    deactivate server
```
