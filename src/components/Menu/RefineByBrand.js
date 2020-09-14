import React from "react";

function RefineByBrand(props) {
  const {
    types,
    valueIdTitle,
    valueIdType,
    valueByBrand,
    handleByBrand,
  } = props;

  const onChange = (brand) => {
    const newChecked = [...valueByBrand];

    const currentType = newChecked.indexOf(brand);

    if (currentType === -1) {
      newChecked.push(brand);
    } else {
      newChecked.splice(currentType, 1);
    }

    handleByBrand(newChecked);
  };

  return (
    <div className="refine-by-brand">
      <ul>
        {types
          .filter((e) => e.id === valueIdTitle)
          .map((e) =>
            e.subs
              .filter((e) => e.id === valueIdType)
              .map((e) =>
                e.subs.map((e) => (
                  <li key={e.id}>
                    <input
                      type="checkbox"
                      id={e.id}
                      checked={valueByBrand.includes(e.brand) ? true : false}
                      onChange={() => onChange(e.brand)}
                    />
                    <label htmlFor={e.id}>{e.brand}</label>
                  </li>
                ))
              )
          )}
      </ul>
    </div>
  );
}

export default RefineByBrand;
