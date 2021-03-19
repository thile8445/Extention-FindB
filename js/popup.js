document.addEventListener("DOMContentLoaded", function () {
  // Write Song

  // var songs = JSON.parse(localStorage.songs || "[]");
  // var songHTML = null;

  // songs.forEach((song) => {
  //   songHTML = $(`<a href="${song.link}" target="_blank">${song.name}</a>`);
  //   $(".wrapper").append(songHTML);
  // });

  // load giphy
  load();

  chrome.tabs.executeScript(
    { code: "window.getSelection().toString();" },
    (selectedText) => {
      document.getElementById("output").innerHTML = selectedText[0];
    }
  );

  // get select from input
  // const input = document.getElementById("classSelect");
  // input.addEventListener("select", logSelection);
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

// display element log when select from input
// function logSelection(event) {
//   console.log(event.target.value);
//   const log = document.getElementById("log");
//   const selection = event.target.value.substring(
//     event.target.selectionStart,
//     event.target.selectionEnd
//   );
//   log.textContent = `You selected: ${selection}`;
// }

// get select
chrome.tabs.executeScript(
  {
    code: "window.getSelection().toString();",
  },
  function (selection) {
    document.getElementById("output").value = selection[0];
  }
);
