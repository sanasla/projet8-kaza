
import "./error404.css";

export default function Error404() {
  return (
    <div className="error404">
        <h1 className="h1404">404</h1>
        <p className="p404">Oups ! La page que vous demandez n'existe pas.</p>
        <a className="a404" href="/">Retourner sur la page d'accueil</a>
    </div>

  );
}