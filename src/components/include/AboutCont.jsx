import React from "react";
const aboutContent = [
    {
        id: "about1",
        src: "https://images.unsplash.com/photo-1513436539083-9d2127e742f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1163&q=80",
        alt: "aboutme1",
        title: "떠먹여주는 지식과 경험한 지식을 조화롭게 만들다",
        desc: "책은 우리가 전부 가보지 못할 다양한 영역에 대한 간접 경험을 제시하지만, 그것에만 무조건적으로 의존해서는 안 된다. 사물을 다각도로 살펴보면 얼마든지 그 의미와 경중이 달라질 수밖에 없는 세상에서, 특정 각도와 시야에 관점을 굳히고 주제를 서술해낸 책은 당연히 저자의 필터링에 전적으로 의존할 수밖에 없으며, 이는 안경을 끼고 사물을 보는 것과 같이 실제의 그것과는 다소 거리가 있을 수도 있습니다. 즉, 특정인의 관점으로 굳혀진 책만 답습하며 ‘세상은 이렇구나’ 멋대로 편견을 가졌다가는, 실제로 자신이 접한 사물과 전혀 딴판으로 느껴지는 괴리감이 발생할 여지가 있다는 것입니다. 이와 같은 격차를 메우고, 남의 시야로 떠먹여준 지식이 아닌 자신의 완전한 깨달음과 성취를 얻기 위해서는 간접 경험과 직접 경험의 조화가 이루어지지 않으면 안 됩니다. 간접 경험이 부족하다면 자신이 체험하지 못한 세상의 아득함을 모르는 우물 안 개구리가 될 수 있고, 직접 경험이 부족해지면 머릿속만 비대해져 몸이 그것을 감당하지 못하는 사태가 일어날 수 있기 때문입니다.",
    },
    {
        id: "about2",
        src: "https://images.unsplash.com/photo-1512876644956-608be0ad8c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "aboutme2",
        title: "상상력을 적절하고 긍정적인 방향으로 잘 활용하자",
        desc: "상상력을 적절하고 긍정적인 방향으로 잘 활용하자. 아직 일어나지 않은 현상에 대해 가정하고 시뮬레이션하는 인간의 능력은, 많은 위기와 현실을 대비하고 준비하게 하는 일등 공신이지만, 그 방향이 어긋날 때는 지나친 불안 심리를 자극해 사람을 위축시키는 효과를 주기도 합니다. 바람에 팔락대는 하얀 커튼도 객관적인 시선에서 보면 그저 가벼운 자연 현상일 뿐이지만, 일단 상상력이 붙기 시작하면 사람을 무척 두려워하게 하는 유령으로 작용할 수도 있는 것처럼 말입니다. 사람은 자신의 시야로 사물을 인식하며, 개인 주관에 따라 현상을 왜곡할 수도 있는 존재로, 똑같은 현실이라도 더욱 긍정적인 형태로 자신의 행보에 도움이 되게끔 받아들일 수 있지만, 아예 옴짝달싹 움직이기조차 힘든 부정적인 결과를 불러오기도 합니다. 사람의 적은 대체로 자신의 마음에서 만들어 기인하는 바가 많아서, 자기 머릿속의 상상력을 어떻게 움직이느냐에 따라 현실 인식과 무게가 자유자재로 바뀌는 결과를 불러올 수 있기 때문입니다. 사람의 기운을 북돋우거나, 움직임을 제약할 수 있는 이와 같은 양면성의 효과를 적절히 활용하기 위해서는 긍정적인 생각과 상상력을 떠올릴 줄 아는 자질을 익혀야 한다고 생각합니다.",
    },
    {
        id: "about3",
        src: "https://images.unsplash.com/photo-1512875651085-a5d7c5c09c82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "aboutme3",
        title: "세상을 바꿔놓을 수 있는 기회를 갖고 싶습니다",
        desc: "스티브 잡스는 이런 말을 남겼습니다. ‘나머지 인생을 설탕물이나 팔면서 보내고 싶습니까, 아니면 세상을 바꿔놓을 기회를 갖고 싶습니까?’ 저는 제가 하는 모든 일이 세상을 바꿀 수 있는 일이 되기를 바랍니다. 무언가를 만들어서 세상을 변화시킬수도 있지만 저는 물건에만 국한되는 것을 바라는 것이 아닙니다. 제 말과 행동이 언젠가는 사람을 변화시키고, 나아가 세상을 변화시킬 수 있다고 생각합니다. 그래서 언제나 말과 행동을 조심하고 신중을 기합니다. 나쁜 변화도 일으킬 수 있다고 생각하기 때문입니다.",
    },
];
const AboutDesc = ({ id, src, alt, title, desc }) => {
    return (
        <section id={id} class="container">
            <figure>
                <img src={src} alt={alt} />
            </figure>
            <div class="textbox">
                <p class="title">{title}</p>
                <div class="desc">{desc}</div>
            </div>
        </section>
    );
};

const AboutCont = () => {
    return (
        <div>
            {aboutContent.map((e, i) => (
                <AboutDesc key={i} id={e.id} src={e.src} alt={e.alt} title={e.title} desc={e.desc} />
            ))}
        </div>
    );
};

export default AboutCont;
