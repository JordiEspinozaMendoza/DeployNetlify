export const HomeScreen = () => {
  return (
    <div className="home__container">
      <h1>Hola {process.env.REACT_APP_TEST}</h1>
      <a
        href="https://github.com/JordiEspinozaMendoza/DeployNetlify/tree/main/src"
        target="__blank"
      >
        <button>Ir al repositorio</button>
      </a>
    </div>
  );
};
