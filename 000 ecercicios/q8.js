/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/


const pontuation = [10, 20, 20, 8, 25, 3, 0,30, 1]


const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1
      let temp = nums[i]
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j]
        j--
      }
      nums[j+1] = temp
    }
    return nums
  }


const compare = (pontuation) => {
    let sortedPotuation = [...pontuation] // usei o spread '(...)' para copiar função para não causa mutabilidade
    sortedPotuation = insertionSort(sortedPotuation,0,sortedPotuation.length-1)
    let cont = 0, min = 0

    for (let i = 0; i < pontuation.length; i++) {
        if (sortedPotuation[0] === pontuation[i])
            min = (i + 1)
    }
   
    for(let i = sortedPotuation.length; i >= 0; i--){
        for(let j = 0; j < sortedPotuation.length; j++){
        if(sortedPotuation[j] > sortedPotuation[i] )
            cont ++
        }
    }

    return [cont, min]
}

//console.log(compare(pontuation))
console.log(compare(pontuation))