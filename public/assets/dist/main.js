const fileInput = document.getElementById("photo");
const filePreview = document.getElementById("photoPreview");

fileInput.onchange = (e) => {
    const photo = e.target.files[0];
    let fileurl = URL.createObjectURL(photo);
    filePreview.innerHTML = `
    <img
        class="h-44 w-44 object-cover rounded"
         src="${fileurl}"
         alt="" />
    `;
};
