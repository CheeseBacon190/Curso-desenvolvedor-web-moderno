// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.


const thisDayIsUseful = day => {
    switch(day){
        case 1:
            return 'Sunday is a day  useful'
            break
        case 2:
            return 'Monday is a day  useful'
            break
        case 3:
            return 'Tuesday is a day  useful'
            break
        case 4:
            return 'Wednesday is a day  useful'
            break
        case 5:
            return 'Thursday is a day  useful'
            break
        case 6:
            return 'Friday is a day  useful'
            break
        case 7:
            return 'Saturday is a day useful'
            break
        default:
            return 'Invalid day'      
    }
}


for (let i = 1; i <= 7; i++)
    console.log(thisDayIsUseful(i))