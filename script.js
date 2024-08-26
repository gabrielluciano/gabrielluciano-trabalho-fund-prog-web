// Constante com Data de nascimento
const BIRTHDAY = new Date(1998, 3, 5);

// Listener responsável por executar o script no momento em que o conteúdo
// da DOM for carregado (evita a manipulação da DOM antes de que seja carregada)
document.addEventListener("DOMContentLoaded", (event) => {
  setAgeTag();
});

// Função responsável por modificar o valor da tag com a idade calculada
function setAgeTag() {
  const ageTag = document.querySelector("[data-age]");
  // Verificação de undefined
  if (ageTag) {
    // Altera o conteúdo da tag
    ageTag.innerText = calculateAge(BIRTHDAY);
  }
}

// Função responsável por calcular a idade a partir da data atual
// e uma data de nascimento passada como parâmetro
function calculateAge(birthday) {
  const today = new Date();
  return today.getFullYear() - birthday.getFullYear();
}
