import React from "react";
import { Link, Typography } from "@mui/material";
import { SNav, SUl, SLi } from "./UITableOfContents.styles";

function UITableOfContents({ headings }) {
  return (
    <SNav>
      <Typography component="div" variant="h6">
        Table of Contents
      </Typography>
      <SUl>
        {headings.map(({ id, title, items }) => (
          <SLi key={id}>
            <Link href={`#${id}`}>{title}</Link>
            {items.length > 0 && (
              <SUl>
                {items.map(({ id: subId, title: subTitle }) => (
                  <SLi key={subId}>
                    <Link href={`#${subId}`}>{subTitle}</Link>
                  </SLi>
                ))}
              </SUl>
            )}
          </SLi>
        ))}
      </SUl>
    </SNav>
  );
}

export default UITableOfContents;
