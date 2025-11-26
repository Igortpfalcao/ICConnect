import { useState } from "react";
import AppInput from "../../components/AppInput";
import Header from "../../components/Header/Header";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [activeSection, setActiveSection] = useState("edit-profile");
  const [showDialog, setShowDialog] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main id="profile-page">
        <aside id="profile-menu">
          <button
            value="edit-profile"
            className={activeSection === "edit-profile" ? "active" : "inactive"}
            onClick={() => setActiveSection("edit-profile")}
          >
            Editar perfil
          </button>

          <button
            value="change-password"
            className={
              activeSection === "change-password" ? "active" : "inactive"
            }
            onClick={() => setActiveSection("change-password")}
          >
            Alterar senha
          </button>

          <button
            value="exit"
            className="exit-button"
            onClick={() => navigate("/login")}
          >
            Sair
          </button>
        </aside>

        <section
          id="user-info"
          className={
            activeSection === "edit-profile"
              ? "section-active"
              : "section-inactive"
          }
        >
          <AppInput
            type="text"
            name="name-input"
            label="Nome"
            inputContent="João souza"
          />
          <AppInput
            type="number"
            name="registration-input"
            label="Matrícula"
            inputContent="222111009"
          />
          <AppInput
            type="email"
            name="email-input"
            label="E-mail UFBA"
            inputContent="joaosouza@ufba.br"
          />

          <div className="profile-btns">
            <button id="save-btn">Salvar</button>
            <button id="delete-btn" onClick={() => setShowDialog(true)}>
              Deletar conta
            </button>
          </div>
        </section>

        <section
          id="change-password"
          className={
            activeSection === "change-password"
              ? "section-active"
              : "section-inactive"
          }
        >
          <AppInput type="password" name="password-input" label="Nova Senha" />
          <AppInput
            type="password"
            name="confirm-password-input"
            label="Confirmar senha"
          />

          <div className="profile-btns">
            <button id="save-btn">Salvar</button>
          </div>
        </section>

        {showDialog && (
          <div className="dialog-overlay">
            <div className="dialog-box">
              <h3>Tem certeza?</h3>
              <p>
                Você realmente deseja deletar sua conta? Essa ação é
                irreversível.
              </p>

              <div className="dialog-actions">
                <button className="cancel" onClick={() => setShowDialog(false)}>
                  Cancelar
                </button>

                <button
                  className="confirm"
                  onClick={() => {
                    setShowDialog(false);
                    alert("Conta deletada!");
                  }}
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
