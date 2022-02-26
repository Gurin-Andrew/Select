import React, { MutableRefObject, useRef, useState } from "react";
import { SingleSelect } from "./Single/index"
import { MultipleSelect } from "./Multiple/index"
interface iSelect {
    data: Array<string>,
    multiple: boolean,
    header: string
}

export const Select: React.FC<iSelect> = ({ data, multiple, header }) => {
    if (multiple == false)
        return (<SingleSelect data={data} header={header}></SingleSelect>)
    else
        return (<MultipleSelect data={data} header={header}></MultipleSelect>)


}










