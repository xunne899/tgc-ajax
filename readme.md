# Run the server
```
python3 -m http.server
```

# Setting up Axios

Be sure to include `axios.js` before our own `script.js` because our `script.js` will depend on `axios.js`

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script src="script.js"></script>
```

# Load a file
```
axios.get('data.txt').then(function(response){
    // code to execute when the file finishes loading
    // the content of the file will be available at response.data
})
```

## Relative Filepath
Usually we provide a **relative filepath** as the first argument to `axios.get()`. This means
that axios will start searching for the file in the **same folder** as the JS file that is
running.