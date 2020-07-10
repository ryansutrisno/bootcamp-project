import React, { useState } from 'react';

function ContactPage() {
  const [state, setState] = useState({
    nama: '',
    email: '',
    pesan: '',
  });

  const onNameChange = (event) => {
    setState({ nama: event.target.value });
  };

  const onEmailChange = (event) => {
    setState({ email: event.target.value });
  };

  const onMessageChange = (event) => {
    setState({ pesan: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(handleSubmit);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Silakan isi formulir di bawah ini:</p>
      <form className="App-form" onSubmit={handleSubmit}>
        <label>Nama</label>
        <input
          type="text"
          name="nama"
          value={state.nama}
          onChange={onNameChange}
          placeholder="Masukkan nama"
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={onEmailChange}
          placeholder="Masukkan email"
        />
        <label>Pesan</label>
        <textarea
          type="text"
          name="nama"
          value={state.pesan}
          onChange={onMessageChange}
          placeholder="Masukkan pesan"
        />
      </form>
      <button type="submit">Kirim</button>
    </div>
  );
}

export default ContactPage;
