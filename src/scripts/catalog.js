
export const catalog = ( harvestArray ) => {

    let htmlString = '<section class="plant"> '
    for (const plant of harvestArray) {
        htmlString += `<div class="plantName">${plant.type}</div>`
    }

    htmlString += '</section>'

    return htmlString 
}

