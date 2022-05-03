import React from "react";
import { Link, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SNav, SUl, SLi } from "./UITableOfContents.styles";

function UITableOfContents({ headings, activeIds }) {
  return (
    <SNav>
      <Typography component="div" variant="h6">
        Table of Contents
      </Typography>
      <SUl>
        {headings.map(({ id, title, items }) => (
          <SLi key={id} className={activeIds.includes(id) ? "active" : ""}>
            <Link href={`#${id}`} color={grey[500]} underline="none">
              {title}
            </Link>
            {items.length > 0 && (
              <SUl>
                {items.map(({ id: subId, title: subTitle }) => (
                  <SLi
                    key={subId}
                    className={activeIds.includes(id) ? "active" : ""}
                  >
                    <Link href={`#${subId}`} color={grey[500]} underline="none">
                      {subTitle}
                    </Link>
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
