import siga_municipal from "../assets/siga_municipal.jpeg";

export function Hero(): JSX.Element {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={siga_municipal.src}
          alt="Siga Banner"
          className="max-w-md shadow-sm rounded-sm"
        />
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">
            Gerenciamento Municipal Modernizado
          </h1>
          <p className="py-6">
            Siga Municipal é a solução de contabilidade projetada
            especificamente para prefeituras, proporcionando uma gestão
            financeira precisa e confiável.
          </p>
        </div>
      </div>
    </div>
  );
}
