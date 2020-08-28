const falarDepoisDe = (seg, frase) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, seg * 1000);
    })
}

falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))