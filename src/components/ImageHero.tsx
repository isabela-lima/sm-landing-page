export function ImageHero(): JSX.Element {
  return (
    <div
      className="hero h-96 min-h-full"
      style={{
        backgroundImage:
          "url(https://www.lafscontabilidade.com.br/blog/wp-content/uploads/2020/02/contabilidade-completa-940x414.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Precisa de ajuda?</h1>
          <p className="mb-5">
            Estamos sempre prontos para atendê-lo. Para quaisquer dúvidas,
            estamos aqui!
          </p>
          <a href="/contact" className="btn btn-primary">
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
}
