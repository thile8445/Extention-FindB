window.onload = function () {
  var button = document.createElement("button");

  button.innerHTML = "Add to Playlist";
  document.body.prepend(button);

  button.addEventListener("click", function () {
    var link = window.location.href;
    var name = document.querySelector(".name_title").innerText;
    chrome.extension.sendMessage({
      type: "add-song",
      data: { link, name },
    });
  });
};
