const card = document.querySelector('.card');
const output = document.querySelector('.output');

const otptBg = output.style.backgroundImage;

const blurSlid = document.querySelector('#blur')
const opctSlid = document.querySelector('#opact')
const strtnSlid = document.querySelector('#strtn')
const ranges = document.querySelectorAll('.range')

const blurquant = document.querySelector('.blur-quant')
const opctquant = document.querySelector('.opct-quant')
const strtnquant = document.querySelector('.strtn-quant')


ranges.forEach(range => {
    range.addEventListener('input', () => {
        utdRangeValue()
        cardStyle()
        cardClrInp()
        generateCodes()
    })
})

function utdRangeValue() {
    blurquant.textContent = blurSlid.value + 'px';
    opctquant.textContent = opctSlid.value + '%';
    strtnquant.textContent = strtnSlid.value + '%';
}
utdRangeValue()

const cardColorInp = document.getElementById('card-color');
cardColorInp.addEventListener('input', () => {
    cardClrInp()
    generateCodes()
})



function cardStyle() {
    card.style.backdropFilter = `blur(${blurSlid.value}px) saturate(${strtnSlid.value}%)`
    card.style.webkitBackdropFilter = `blur(${blurSlid.value}px) saturate(${strtnSlid.value}%)`
}



function cardClrInp() {

    var value = cardColorInp.value.split("");
    var r = parseInt(value[1] + value[2], 16)
    var g = parseInt(value[3] + value[4], 16)
    var b = parseInt(value[5] + value[6], 16)

    card.style.backgroundColor = `rgba(${r},${g},${b},${opctSlid.value / 100})`;



}
cardClrInp()





// background part
const imgRadio = document.getElementById('bg-type-img')
const grndtRadio = document.getElementById('bg-type-grdnt')

const bgtImgbx = document.getElementById('bg-img')
const bgtGrdntbx = document.getElementById('bg-grndt')

imgRadio.addEventListener('click', () => {
    radiochecked()
})

grndtRadio.addEventListener('click', () => {
    radiochecked()
})

const codeUrl = document.querySelector('.code_url')
const codeGradient = document.querySelector('.code_bgimg_gradient')

const grndtClr1 = document.getElementById('grnd-clr-1')
const grndtClr2 = document.getElementById('grnd-clr-2')

function radiochecked() {

    if (imgRadio.checked) {

        bgtImgbx.style.display = 'block'
        bgtGrdntbx.style.display = 'none'

        const url = document.getElementById('bg-img-url').value;
        output.style.backgroundImage = `url('${url}')`


        codeUrl.classList.add('active');

    } else {

        bgtImgbx.style.display = 'none'
        bgtGrdntbx.style.display = 'block'


        grndtClr1.addEventListener('input', () => {
            chngBgClr()
            generateCodes()
        })
        grndtClr2.addEventListener('input', () => {
            chngBgClr()
            generateCodes()
        })
        function chngBgClr() {
            output.style.backgroundColor = grndtClr1.value;

            var value1 = grndtClr1.value.split("");
            var r1 = parseInt(value1[1] + value1[2], 16)
            var g1 = parseInt(value1[3] + value1[4], 16)
            var b1 = parseInt(value1[5] + value1[6], 16)

            var value2 = grndtClr2.value.split("");
            var r2 = parseInt(value2[1] + value2[2], 16)
            var g2 = parseInt(value2[3] + value2[4], 16)
            var b2 = parseInt(value2[5] + value2[6], 16)

            output.style.backgroundImage = `linear-gradient(248deg, rgba(${r1}, ${g1}, ${b1}, 1) 30%, rgba(${r2}, ${g2}, ${b2}, 1) 70%)`
        }
        chngBgClr()

        codeUrl.classList.remove('active');
        codeGradient.classList.add('active');
    }
}
radiochecked()


document.getElementById('bg-img-url').addEventListener('input', () => {
    radiochecked()
    generateCodes()
})



// copy to clipboeard
const copybtn = document.getElementById('copy-to-clipboard');
const code = document.querySelector('code pre');

copybtn.addEventListener('click', () => {
    navigator.clipboard.writeText(code.textContent);
})


function generateCodes() {
    const codeBlur = document.querySelectorAll('.code_blur');
    codeBlur.forEach(blurc => {
        blurc.textContent = blurSlid.value + 'px'
    })

    const codeSaturate = document.querySelectorAll('.code_saturate');
    codeSaturate.forEach(satC => {
        satC.textContent = strtnSlid.value + '%'
    })

    var value = cardColorInp.value.split("");
    var r = parseInt(value[1] + value[2], 16)
    var g = parseInt(value[3] + value[4], 16)
    var b = parseInt(value[5] + value[6], 16)
    const codeBgcolor = document.querySelector('.code_bgcolor');
    codeBgcolor.textContent = `rgba(${r}, ${g}, ${b}, ${opctSlid.value / 100})`

    const url = document.getElementById('bg-img-url').value;
    codeUrl.textContent = `url('${url}')`

    const codeGradient_color_1 = document.querySelector('.code_gradient_clr1')
    var gradient_color1 = grndtClr1.value.split("");
    var r1 = parseInt(gradient_color1[1] + gradient_color1[2], 16)
    var g1 = parseInt(gradient_color1[3] + gradient_color1[4], 16)
    var b1 = parseInt(gradient_color1[5] + gradient_color1[6], 16)
    // xxxxx
    codeGradient_color_1.textContent = `rgba(${r1}, ${g1}, ${b1}, 1)`

    const codeGradient_color_2 = document.querySelector('.code_gradient_clr2')
    var gradient_color2 = grndtClr2.value.split("");
    var r2 = parseInt(gradient_color2[1] + gradient_color2[2], 16)
    var g2 = parseInt(gradient_color2[3] + gradient_color2[4], 16)
    var b2 = parseInt(gradient_color2[5] + gradient_color2[6], 16)
    // xxxxx
    codeGradient_color_2.textContent = `rgba(${r2}, ${g2}, ${b2}, 1)`

    const code_bgclr = document.querySelector('.code_bgclr');
    code_bgclr.textContent = grndtClr1.value;
}
generateCodes()