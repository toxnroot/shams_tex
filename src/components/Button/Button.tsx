"use client";

const Button = ({click, text,children}) => {
    return (
        <button className="bg-amber-400 text-2xl rounded-lg p-2 hover:bg-amber-600 transition-colors transition-transform ease-in-out duration-1000 flex items-center justify-center gap-2" onClick={click}>
            {text}
            {children}
        </button>
    );
}

export default Button;
