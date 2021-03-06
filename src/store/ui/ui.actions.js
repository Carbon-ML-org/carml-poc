import { createAction } from "@reduxjs/toolkit";

export const openSidebar = createAction("ui/openSidebar");
export const closeSidebar = createAction("ui/closeSidebar");
export const updatePageTitle = createAction("ui/updatePageTitle");
