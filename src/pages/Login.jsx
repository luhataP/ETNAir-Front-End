import "./Login.css"

export default function Login() {
    return (
        <div className="login-page">
            <h1 className="page-title">Connexion</h1>

            <form className="login-form">
                <input placeholder="Email/Pseudonyme" />
                <input type="password" placeholder="Mot de passe" />
                <button>Se connecter</button>  
            </form>
        </div>
    );
}