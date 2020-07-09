document.querySelector("#load-image-btn").addEventListener("click", function() {
  axios.get("artwork.json").then(function(response) {
    let artworkDiv = document.querySelector("#artwork");
    artworkDiv.innerHTML = `
    <h1>${response.data.title}</h1>
    <img src="${response.data.image_url}" class="${response.data.class}"/>
    `;
  });
});
