export const Person = ({ person }) => {
  const getPartnerText = () => {
    if (!person.isMarried) return 'not married';

    return person.sex === 'm'
      ? `${person.partnerName} is my wife`
      : `${person.partnerName} is my husband`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age > 0 ? <p className="Person__age">I am {person.age}</p> : ''}
      {getPartnerText() && (
        <p className="Person__partner">{getPartnerText()}</p>
      )}
    </section>
  );
};
