export const BasicTypes = () => {
  const name: string = "Hanier";
  const isActive: boolean = true;
  const powers = ["NestJS", "Typescript", "React Native", "PostgreSQL"];

  //salto de linea como un enter con br
  return (
    <>
      <h3>Tipos básicos</h3>
      {name} {isActive ? "true" : "false"}
      <br />
      {powers.join(", ")}
    </>
  );
};
