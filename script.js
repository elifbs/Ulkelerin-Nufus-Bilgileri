let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let container = document.querySelector('.container')

let toplamUlke = countries_data.sort((a,b) => b.population - a.population)

function toplamPopulasyon(){
    let toplam = 0
    toplamUlke.forEach(ulke => {
        toplam += ulke.population
    })
    return toplam
}

btn.addEventListener('click', function(){
    toplamUlke.forEach(ulke => {
        const div = document.createElement('div')
        const name = document.createElement('h1')
        const capital = document.createElement('h3')
        const languag = document.createElement('h3')
        const flag = document.createElement('img')
        const population = document.createElement('p')
        const percentCountry = document.createElement('p')

        let percent = Number(((ulke.population / toplamPopulasyon()) * 100).toFixed(2))

        div.style.border = '1px solid'
        div.style.padding = '10px'
        div.style.backgroundColor = 'gray'
        name.textContent = ulke.name
        name.style.color = 'red'
        capital.textContent = ulke.capital
        capital.style.color = 'blue'
        languag.textContent = ulke.languages
        flag.setAttribute('src', `${ulke.flag}`)
        flag.style.width = '50px'
        population.textContent = `Ülke nüfusu : ${ulke.population}`
        percentCountry.innerHTML = `Dünya nüfusunun % ${percent} si`

        // let percent = ((ulke.population / toplamPopulasyon()) * 100)
        
        // console.log(percent)

        container.appendChild(div)
        div.appendChild(name)
        div.appendChild(capital)
        div.appendChild(languag)
        div.appendChild(flag)
        div.appendChild(population)
        div.appendChild(percentCountry)
    })

        let baslik = document.querySelector('.baslik')
        let p = document.createElement('p')
        p.classList = 'stil'
        p.innerHTML = `Toplam ülke sayısı : ${toplamUlke.length} <br> Toplam dünya nüfusu : ${toplamPopulasyon()}`
        baslik.appendChild(p)

})

















































