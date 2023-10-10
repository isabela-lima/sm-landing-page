export interface Card {
  id: string;
  image?: string | null;
  title: string;
  description: string;
}

interface CardProps {
  cards: Card[];
}

export const Card = (props: Card): JSX.Element => {
  const { image, title, description } = props;

  return (
    <div className="card w-80 h-80 bg-base-100 shadow-2xl">
      {image && title && (
        <figure>
          <img src={image} alt={title} />
        </figure>
      )}
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export function CardGroup(props: CardProps): JSX.Element {
  const { cards } = props;

  return (
    <div>
      <div className="flex flex-col h-1/2 md:flex-row items-center justify-center justify-items-center gap-5 p-1 md:gap-8 md:p-10">
        {cards.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
