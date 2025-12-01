import AppCard from "../../components/AppCard";
import Header from "../../components/Header/Header";
import "./Styles.css";

export default function Events() {
  return (
    <>
      <Header />

      <main id="events">
        <h1>Eventos</h1>
        <div className="event-cards">
          <AppCard
            title="SIMTECH"
            label="07/12 - 11/12"
            content="O evento que ocorrerá no IME,
            conta com palestras, stands e diversas
            atividade para os estudantes do IC e de fora também..."
          />
          <AppCard
            title="SIMTECH"
            label="07/12 - 11/12"
            content="O evento que ocorrerá no IME,
            conta com palestras, stands e diversas
            atividade para os estudantes do IC e de fora também..."
          />
          <AppCard
            title="SIMTECH"
            label="07/12 - 11/12"
            content="O evento que ocorrerá no IME,
            conta com palestras, stands e diversas
            atividade para os estudantes do IC e de fora também..."
          />
          <AppCard
            title="SIMTECH"
            label="07/12 - 11/12"
            content="O evento que ocorrerá no IME,
            conta com palestras, stands e diversas
            atividade para os estudantes do IC e de fora também..."
          />
          <AppCard
            title="SIMTECH"
            label="07/12 - 11/12"
            content="O evento que ocorrerá no IME,
            conta com palestras, stands e diversas
            atividade para os estudantes do IC e de fora também..."
          />
        </div>
      </main>
    </>
  );
}
