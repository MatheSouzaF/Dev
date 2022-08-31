function populateList() {
    const data = Array.from({ length: 100 })
        .map((_, i) => `<div class="item">tem ${(i + 1)}</div>`)

    const list = document.querySelector('.list')
    list.innerHTML = data.join("")
    return data
}
const data = populateList()


let perPage = 5
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage)
}
const html = {
    get(element) {
        return document.querySelector(element)
    }
}

const controls = {
    next() {
        state.page++


        if (state.page > state.totalPage) {
            state.page--
        }
    },
    prev() {
        state.page--

        if (state.page < 1) {
            state.page++
        }
    },
    goTo(page) {
        if (page < 1) {
            page = 1
        }
        state.page = page

        if (page > state.totalPage) {
            state.page = state.totalPage
        }
    },
    createListeners() {
        html.get('.first').addEventListener('click', () => {
            controls.goTo(1)
            update()
        })
        html.get('.last').addEventListener('click', () => {
            controls.goTo(state.totalPage)
            update()
        })
        html.get('.next').addEventListener('click', () => {
            controls.next()
            update()
        })
        html.get('.prev').addEventListener('click', () => {
            controls.prev()
            update()
        })
    }
}

function update() {
    console.log(state.page)
}

function init(){

    controls.createListeners()
}