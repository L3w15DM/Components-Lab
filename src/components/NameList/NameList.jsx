import NameBadge from "../NameBadge/NameBadge";

const NameList = () => {
  const names = [
    { firstName: "Nipsey", lastName: "Hussle" },
    { firstName: "Mike", lastName: "Epps" },
    { firstName: "Jermaine", lastName: "Cole" },
    { firstName: "Kendrick", lastName: "Lamar" },
  ];
  let displayedNames = names.map((name, index) => (
    <NameBadge
      key={index}
      displayedName={`${name.firstName} ${name.lastName}`}
    />
  ));

  return <div>{displayedNames}</div>;
};

export default NameList;
