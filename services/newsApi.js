

export const GetNews = () => {
    fetch("http://www.mocky.io/v2/5eca75ad3000009300a6cfd9")
    .then((res) => res.json())
    .then((res) => {
        return res.articles;
    })
}
