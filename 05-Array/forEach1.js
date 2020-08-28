// Pecorrer array com forEach

const aprovados = ["Agatha", 'Aldo','Daniel','Raquel']

//Chamar uma callback para cada iteração do array
aprovados.forEach((nome,indice) => console.log(`${indice + 1}: ${nome}`))


const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)