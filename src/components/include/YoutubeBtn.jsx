import React from "react";

const UnsplashBtn = ({ onSearch }) => {
    const onClick1 = () => {
        onSearch("html");
    };
    const onClick2 = () => {
        onSearch("css");
    };
    const onClick3 = () => {
        onSearch("javascript");
    };
    const onClick4 = () => {
        onSearch("react");
    };
    const onClick5 = () => {
        onSearch("vue");
    };

    return (
        <div className="youtube__btn">
            <div className="container">
                {/* <input
          ref={inputRef}
          placeholder="검색하세요!"
          onKeyPress={onKeyPress}
        /> */}
                <button type="submit" onClick={onClick1} className="tagBtn">
                    html
                </button>
                <button type="submit" onClick={onClick2} className="tagBtn">
                    css
                </button>
                <button type="submit" onClick={onClick3} className="tagBtn">
                    javascript
                </button>
                <button type="submit" onClick={onClick4} className="tagBtn">
                    react
                </button>
                <button type="submit" onClick={onClick5} className="tagBtn">
                    vue
                </button>
            </div>
        </div>
    );
};

export default UnsplashBtn;
