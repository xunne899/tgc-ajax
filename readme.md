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
axios.get('filepath to the file')
```