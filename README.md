# Welcome! 

Thanks for applying to Boostability. We want Boostability to be a match for you and for us.  

The following problem has no *right* answer. We just want to know what you would do. This exercise is not timed but we expect it to: 

- Be complete (we don't need cross-browser compatibility and we will test in the latest version of Chrome).
- Have a useful commit history (don't make one big commit at the end)
- Be your own work (avoid JS frameworks).
- Be styled a little (you can use custom CSS or a CSS framework).

## The Scenario

Spotify is great. We want to allow our users to search for artists on Spotify. 

We want to: 

- Allow the user to search for an artist ([Spotify API reference](https://developer.spotify.com/web-api/endpoint-reference/) )
- Display the top two matching artists
- Show the two most popular albums for the artists

## Starting Point

We started you with: 

- A search controller that is bound to the UI
- A development server ``` npm run dev ```
- Basic TypeScript typings (knockout, fetch, promise, and Spotify artist)

## Hints

- Search for artists using this URL: 

    ```
    https://api.spotify.com/v1/search?q=national&type=artist
    ```
- Get the albums for an artist using this URL: 
    ```
    https://api.spotify.com/v1/artists/{id}/albums
    ```
- Use the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- Use the HTML5 [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Use [knockout](http://knockoutjs.com/) for the data-binding