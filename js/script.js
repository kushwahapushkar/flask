function getImagePreview(event) {
  var image = URL.createObjectURL(event.target.files[0]);
  var imagediv = document.getElementById('preview');
  var newimg = document.createElement('img');
  imagediv.innerHTML = '';
  newimg.src = image;
  newimg.width = "300";
  imagediv.appendChild(newimg);
}

function deblur1() {
  var ruth = document.getElementById('abc');
  ruth.innerHTML = '<div id="preview"><input type="file" name="upload_file" class="form-control" placeholder="Enter Name" id="upload_file" onchange="getImagePreview(event)"></div>';

} 

function bgm()
      {
        console.log(document.body.style.backgroundImage='url("/static/images/background_5.png")')
        console.log(document.body.style.transition='background-image 1.5s linear')
      }