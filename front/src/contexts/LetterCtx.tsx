import { createContext, useState } from "react";
import { LetterCtxProps } from "../types";

const LetterCtx = createContext<LetterCtxProps>({} as LetterCtxProps);

function LetterProvider({ children }: Props) {
    const [input, setInput] = useState("");

    return <LetterCtx.Provider value={{ input, setInput }}>
        {children}
    </LetterCtx.Provider>;

}

export{LetterCtx,LetterProvider};


interface Props {
    children: React.ReactNode;
}