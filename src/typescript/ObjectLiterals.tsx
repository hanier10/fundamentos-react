interface Person {
  fullName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  postalCode: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    fullName: "Hanier Morales",
    age: 28,
    address: {
      country: "Nicaragua",
      postalCode: 82500,
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
