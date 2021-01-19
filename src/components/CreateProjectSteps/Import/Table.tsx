import React from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
import useStyles from "./Atom";
import TablePag from "./TablePag";
const items = [
  {
    locationName: "Location name",
    type: "Type",
    additionalInfo: "Additional info ",
  },
  {
    locationName: "Starbucks",
    type: "Restaurant",
    additionalInfo: "Additional info aitional info atidonak",
  },
  {
    locationName: "Location name Location name Location name",
    type: "Restaurant",
    additionalInfo: "Additional info aitional info atidonak",
  },
  {
    locationName: "Bluebay Beach Resort and Spa 123456",
    type: "Restaurant",
    additionalInfo: "kremlevskaya 15 fsedfdf fdsfds fdsf",
    indeterminate: true,
  },
];
const Table = ({ tableHead }: { tableHead: string }) => {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(true);
  const [isChecked, setChecked] = React.useState(false);
  const handleClick = React.useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  const handleCheck = React.useCallback(() => {
    setChecked(!isChecked);
  }, [isChecked]);
  return (
    <div className={classes.tableRoot}>
      <TableHead
        locationCounts={25}
        buttonLabel={tableHead}
        isOpen={isOpen}
        handleClick={handleClick}
        handleCheck={handleCheck}
        isChecked={isChecked}
      />
      {isOpen && (
        <>
          {items.map((el, ind) => (
            <TableRow
              additionalInfo={el.additionalInfo}
              type={el.type}
              locationName={el.locationName}
              key={ind}
              checked={isChecked}
              handleCheck={handleCheck}
            />
          ))}
          <TablePag />
        </>
      )}
    </div>
  );
};

export default Table;
