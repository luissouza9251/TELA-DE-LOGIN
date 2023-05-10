
const btnLogin = document.querySelector('.btn-login');

btnLogin.addEventListener('click', () => {
  const usuario = document.querySelector('input[name="usuario"]').value;
  const senha = document.querySelector('input[name="senha"]').value;

  // Validar o usuário e a senha aqui
  if (usuario === '' || senha === '') {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  if (usuario !== 'jorge' || senha !== '123') {
    alert('Usuário ou senha inválidos!');
    return;
  }

  // Redirecionar o usuário para a página principal
  window.location.replace('index.html');
});