document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-interest]').forEach(link => link.addEventListener('click', () => { document.getElementById('interest').value = link.dataset.interest; }));
document.getElementById('enquiry').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const subject = `Aleru demo enquiry: ${values.get('interest')}`;
  const body = `Hello Aleru team,\n\nI would like to discuss ${values.get('interest')}.\n\nName: ${values.get('name')}\nWork email: ${values.get('email')}\n\nWorkflow: ${values.get('message') || 'To discuss during the demo.'}\n\nKind regards,\n${values.get('name')}`;
  window.location.href = `mailto:wojihenry@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('form-status').textContent = 'Your email draft is ready to open. If no email app opens, contact wojihenry@gmail.com directly.';
});
