import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import Options from "./Options";

export default function Group({
  choiceGroup,
  hanldeSelectOption,
  selectedSauces,
  selectedVariant,
  ...other
}) {

  return (
    <>
      {choiceGroup && (
        <>
          <Typography sx={{ fontSize: 15 }} variant="subtitle2">
            {choiceGroup.name} 
            <Typography sx={{ fontSize: 12,ml:1 }} variant="span">
            ({choiceGroup.quantity} 
              {choiceGroup.required ? " Required" : " Optional"})
            </Typography>
          </Typography>

          <Options
            choiceGroups={choiceGroup}
            choiceGroupId={choiceGroup.id}
            hanldeSelectOption={hanldeSelectOption}
            selectedSauces={selectedSauces}
            selectedVariant={selectedVariant}
          />
        </>
      )}
    </>
  );
}
