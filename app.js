const text =document.getElementById('text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrcontainer = document.querySelector('.qr-body');
let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(text.value.length >0){
        isEmptyinput();
    }
    else{
        alert("Please enter text to generate QR Code");
    }
    generateQRCode();
});

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyinput();
    
});
downloadBtn.addEventListener('click', () => {
let img = qrcontainer.querySelector('qr-code img');

if(img == null){
    let imgatrr= img.getAttrbute('src');
    downloadBtn.setAttribute('href', imgatrr);
}
else{
    downloadBtn.setAttribute('href', `${document.queryselector('canvas').toDataURL()}`);
}

});
    

 function isEmptyinput(){
      if(text.value.length >0){
        generateQRCode();
    }
    else{
        alert("Please enter text to generate QR Code");
    }
 }

function generateQRCode() {
    qrcontainer.innerHTML="";
    new QRCode(qrcontainer,{
        text: text.value,
        width: sizes.value,
        height: sizes.value,
        colorLight:"#fff",
        colorDark:"#000",

    });
};