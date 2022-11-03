import React from "react";

// const referInfo = [
//     { num: 1, name: "accent-color", desc: " 요소의 강조 색상을 지정합니다. ", star: "★★★★★" },
//     {
//         num: 2,
//         name: "align-content",
//         desc: " 콘텐츠 사이와 콘텐츠 주위 빈 공간을 플렉스 박스'의 교차축 또는 그리드의 블록 축을 따라 배치하는 방식을 결정합니다.",
//         star: "★★★★★",
//     },
//     { num: 3, name: "align-items", desc: " 교차축에서 아이템 정렬 하는 속성입니다. 주로 flex에서 item들을 정렬할 때 사용됩니다.", star: "★★★★★" },
//     { num: 4, name: "align-self", desc: " 특정 item의 정렬을 따로 하고 싶을 때 사용합니다.", star: "★★★★★" },
//     {
//         num: 5,
//         name: "all",
//         desc: " CSS 사용자 지정 속성을 제외한 모든 속성을 초기화합니다. 초깃값, 상속값, 아니면 다른 스타일시트 출처의 값로 설정할 수 있습니다.",
//         star: "★★★★★",
//     },
//     { num: 6, name: "animation", desc: " 애니메이션과 관련된 속성을 일괄적로 처리합니다.", star: "★★★★★" },
//     { num: 7, name: "animation-delay", desc: " 애니메이션 지연 시간을 설정합니다.", star: "★★★★★" },
//     { num: 8, name: "animation-direction", desc: " 애니메이션 움직임 방향을 설정합니다.", star: "★★★★★" },
//     { num: 9, name: "animation-duration", desc: " 애니메이션 움직인 시간을 설정합니다.", star: "★★★★★" },
//     { num: 10, name: "animation-fill-mode", desc: " 애니메이션이 끝난 후의 상태를 설정합니다.", star: "★★★★★" },
// ];
const ReferText = ({ num, name, desc, star }) => {
    return (
        <li>
            <a href="/">
                <span className="num">{num}</span>
                <span className="name">{name}</span>
                <span className="desc">{desc}</span>
                <span className="star">{star}</span>
            </a>
        </li>
    );
};

const ReferCont = ({ references }) => {
    console.log({ references });
    return (
        <section className="cont__refer">
            <div className="container">
                <div className="refer__inner">
                    <h2>CSS</h2>
                    <ul className="refer__list">
                        {references.map((text, i) => (
                            <ReferText key={i} num={text.id} name={text.title} desc={text.desc} star={text.use} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ReferCont;
