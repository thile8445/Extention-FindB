document.addEventListener("DOMContentLoaded", function () {
  load();
});
function renderImage(content) {
  document.getElementById("content").innerHTML = content;
}

async function getGifUrl() {
  let url =
    "https://api.giphy.com/v1/gifs/random?api_key=VJeSnO03RjuGmHNHRdSrKbOj6Cpawit4&tag=boob";
  let result = await fetch(url);
  let jsonResult = await result.json();
  return jsonResult.data;
}

async function load() {
  renderImage('<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>');
  imageData = await getGifUrl();

  renderImage(
    '<a href="' +
      imageData.url +
      '" target="_blank"><img class="image img-responsive img-rounded" src="' +
      imageData.fixed_height_small_url +
      '" /></a>'
  );
}

document.getElementById("more").addEventListener("click", async () => {
  load();
});
