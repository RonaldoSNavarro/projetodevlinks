function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/meuavatar2.png")
    img.setAttribute("alt", "Foto de Ronaldo Navarro, com fones.")
  } else {
    // se não estiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/meuavatar.png")
  }
}
