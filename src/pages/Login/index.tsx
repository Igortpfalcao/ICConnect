import "./styles.css";

function App() {
  return (
    <main>
      <aside>
        <h1>ICConect</h1>
        <p>Sistema de Apoio ao Estudante do IC UFBA</p>
      </aside>

      <section aria-labelledby="login-title">
        <h2 id="login-title">Login</h2>
        <form>
          <label>
            Usuário
            <input type="text" name="usuario" placeholder="Login" />
          </label>
          <label>
            Senha
            <input type="password" name="senha" placeholder="Senha" />
          </label>
        <button id="login-button" type="submit">Entrar</button>
          <button id="register-button">Cadastre-se</button>
        </form>
      </section>
    </main>
  );
}

export default App;
