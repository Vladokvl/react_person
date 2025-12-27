export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const getPartnerText = () => {
    if (!isMarried) return 'I am not married';

    return sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age > 0 ? <p className="Person__age">I am {age}</p> : ''}
      {getPartnerText() && (
        <p className="Person__partner">{getPartnerText()}</p>
      )}
    </section>
  );
};
