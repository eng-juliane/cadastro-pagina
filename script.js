document.addEventListener("DOMContentLoaded", function () {
  const radiosPagamento = document.querySelectorAll('input[name="pagamento"]');
  const cartaoInfo = document.querySelector('.cartao-info');
  const pixInfo = document.querySelector('.pix-info');

  radiosPagamento.forEach((radio) => {
    radio.addEventListener('change', () => {
      if (radio.value === 'credito' || radio.value === 'debito') {
        cartaoInfo.style.display = 'block';
        pixInfo.style.display = 'none';
      } else if (radio.value === 'pix') {
        cartaoInfo.style.display = 'none';
        pixInfo.style.display = 'block';
      }
    });
  });
});
