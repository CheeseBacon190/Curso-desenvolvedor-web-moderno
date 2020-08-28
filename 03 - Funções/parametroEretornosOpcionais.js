// esse tipo de função não é uma boa pratica
// uso só para exemplo de conseitos
const areaRetangulo = (largura, altura) => {
    const area = largura * altura
    if(area >= 20)
        console.log(`valor acima do permitido: ${area} m2`)
    else
        return area
}

console.log(areaRetangulo(100,5))