


document.addEventListener("DOMContentLoaded", function(){

        // 도마뱀
        window.addEventListener("scroll", () => {
            const y = window.scrollY;

            document.querySelector(".bg").style.transform =
                `translateY(${y * 0.15}px)`;
        });

        
        // 마우스
        const glow = document.querySelector(".cursor-glow");

        document.addEventListener("mousemove", (e)=>{

            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";

        });


    // done area
    const archiveData = [

        {
            thumbnail: "archive/cover1.jpg",
            modalImage: "archive(2)/1.jpg",
            title: "Icarus",
            description: "B6 | 목차 및 장표지 (A)"
        },
        {
            thumbnail: "archive/cover31.jpg",
            modalImage: "archive(2)/31.jpg",
            title: "순례자의 아가미",
            description: "A5 | 목차 (2p)"
        },
        {
            thumbnail: "archive/cover5.jpg",
            modalImage: "archive(2)/5.jpg",
            title: "마감과 영업 종료 사이",
            description: "A5 | 홀로그램박 | 목차 및 장표지 (A)"
        },
        {
            thumbnail: "archive/cover19.jpg",
            modalImage: "archive(2)/19.jpg",
            title: "하나 둘 셋",
            description: "B6"
        },
        {
            thumbnail: "archive/cover8.jpg",
            modalImage: "archive(2)/8.jpg",
            title: "산등성이 불빛에 피어나다",
            description: "A5"
        },
        {
            thumbnail: "archive/cover11.jpg",
            modalImage: "archive(2)/11.jpg",
            title: "단편선",
            description: "A5"
        },
        {
            thumbnail: "archive/cover16.jpg",
            modalImage: "archive(2)/16.jpg",
            title: "락앤롤베이비",
            description: "비판형 | 목차 및 장표지 (B) "
        },
        {
            thumbnail: "archive/cover4.jpg",
            modalImage: "archive(2)/4.jpg",
            title: "防波堤",
            description: "A5 | 목차 및 장표지 (B)"
        },
        {
            thumbnail: "archive/cover24.jpg",
            modalImage: "archive(2)/24.jpg",
            title: "오류",
            description: "A5"
        },
        {
            thumbnail: "archive/cover38.jpg",
            modalImage: "archive(2)/38.jpg",
            title: "나의 꿈은 맑은 바람이 되어서",
            description: "포스터 | 오브젝트 추가"
        },
        {
            thumbnail: "archive/cover3.jpg",
            modalImage: "archive(2)/3.jpg",
            title: "막간",
            description: "A5 | 중철 | 글엽서 굿즈"
        },
        {
            thumbnail: "archive/cover29.jpg",
            modalImage: "archive(2)/29.jpg",
            title: "시선 나누기",
            description: "A5 | 약표제지"
        },
        {
            thumbnail: "archive/cover39.jpg",
            modalImage: "archive(2)/39.jpg",
            title: "이물감",
            description: "비판형 | 하드커버"
        },
        {
            thumbnail: "archive/cover15.jpg",
            modalImage: "archive(2)/15.jpg",
            title: "Wildest Dreams",
            description: "A5"
        },
        {
            thumbnail: "archive/cover25.jpg",
            modalImage: "archive(2)/25.jpg",
            title: "TRIPLE",
            description: "A5 | 장표지 (A)"
        },
        {
            thumbnail: "archive/cover9.jpg",
            modalImage: "archive(2)/9.jpg",
            title: "Find our way to love ending",
            description: "A5"
        },
        {
            thumbnail: "archive/cover22.jpg",
            modalImage: "archive(2)/22.jpg",
            title: "무덤팔아 부르주암",
            description: "A5"
        },
        {
            thumbnail: "archive/cover13.jpg",
            modalImage: "archive(2)/13.jpg",
            title: "Lucky Strike",
            description: "A5 | 목차 및 장표지 (A)"
        },
        {
            thumbnail: "archive/cover30.jpg",
            modalImage: "archive(2)/30.jpg",
            title: "아이러닉 로맨틱",
            description: "A5 | 중철"
        },
        {
            thumbnail: "archive/cover37.jpg",
            modalImage: "archive(2)/37.jpg",
            title: "Deferred Alpha",
            description: "웹소설 표지"
        },
        {
            thumbnail: "archive/cover27.jpg",
            modalImage: "archive(2)/27.jpg",
            title: "산제물이 향하는 곳",
            description: "B6"
        },
        {
            thumbnail: "archive/cover14.jpg",
            modalImage: "archive(2)/14.jpg",
            title: "99.9% 토마토 주스 공급 사건",
            description: "A5 | 약표제지"
        },
        {
            thumbnail: "archive/cover17.jpg",
            modalImage: "archive(2)/17.jpg",
            title: "비정형 메타포",
            description: "B6"
        },
        {
            thumbnail: "archive/cover21.jpg",
            modalImage: "archive(2)/21.jpg",
            title: "가랑눈 내리는 집",
            description: "B6 | 중철"
        },
        {
            thumbnail: "archive/cover23.jpg",
            modalImage: "archive(2)/23.jpg",
            title: "황금시간",
            description: "A5 | 중철"
        },
        {
            thumbnail: "archive/cover6.jpg",
            modalImage: "archive(2)/6.jpg",
            title: "소년찬가",
            description: "A5 | 책날개 | 레이아웃 변경 | 목차 및 장표지 | 책갈피 굿즈"
        },
        {
            thumbnail: "archive/cover36.jpg",
            modalImage: "archive(2)/36.jpg",
            title: "수란은 어렵다",
            description: "웹소설 표지"
        },
        {
            thumbnail: "archive/cover28.jpg",
            modalImage: "archive(2)/28.jpg",
            title: "폴리에스터 하트",
            description: "B6 | 약표제지"
        },
        {
            thumbnail: "archive/cover18.jpg",
            modalImage: "archive(2)/18.jpg",
            title: "녹청의 하루는 오늘도 바쁘게 움직인다",
            description: "B6"
        },
        {
            thumbnail: "archive/cover33.jpg",
            modalImage: "archive(2)/33.jpg",
            title: "당신이 바꿀 수 있는 것",
            description: "<b>커미션</b> | A5"
        },
        {
            thumbnail: "archive/cover26.jpg",
            modalImage: "archive(2)/26.jpg",
            title: "어둠 속의 세 남자",
            description: "A5"
        },
        {
            thumbnail: "archive/cover20.jpg",
            modalImage: "archive(2)/20.jpg",
            title: "궤도 이탈하기",
            description: "A5 | 책날개"
        },
        {
            thumbnail: "archive/cover12.jpg",
            modalImage: "archive(2)/12.jpg",
            title: "연정의 입방체",
            description: "A5"
        },
        {
            thumbnail: "archive/cover32.jpg",
            modalImage: "archive(2)/32.jpg",
            title: "관외대출",
            description: "<b>일러스트 편집 커미션</b> | 비판형 | 장표지"
        },
        {
            thumbnail: "archive/cover40.jpg",
            modalImage: "archive(2)/40.jpg",
            title: "어떤 세계",
            description: "A5"
        },
        {
            thumbnail: "archive/cover34.jpg",
            modalImage: "archive(2)/34.jpg",
            title: "랑데부 포인트",
            description: "<b>커미션</b> | A5"
        },
        {
            thumbnail: "archive/cover35.jpg",
            modalImage: "archive(2)/35.jpg",
            title: "Touch ① ②",
            description: "<b>커미션</b> | A5 | 책날개 | 시리즈 작업"
        },
        {
            thumbnail: "archive/cover2.jpg",
            modalImage: "archive(2)/2.jpg",
            title: "계절 틈새로",
            description: "A5"
        },
        {
            thumbnail: "archive/cover10.jpg",
            modalImage: "archive(2)/10.jpg",
            title: "어떤 감정의 비가역성에 대하여",
            description: "A5 | 목차 및 장표지 (A)"
        },
    ];

    const archiveGrid = document.getElementById("archiveGrid");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");

    function renderArchive() {

        archiveGrid.innerHTML = "";
        archiveData.forEach((item) => {

            const article = document.createElement("article");
            article.classList.add("archive-item");

            article.innerHTML = `

                <img 
                    src="${item.thumbnail}" 
                    class="archive-image"
                    data-modal="${item.modalImage}"
                    alt="${item.title}"
                >

                <div class="archive-info">

                    <h2 class="archive-title">
                        ${item.title}
                    </h2>

                    <p class="archive-description">
                        ${item.description}
                    </p>

                </div>

            `;

            archiveGrid.appendChild(article);

        });

    }

    function openModal(imagePath) {

        modal.classList.add("active");
        modalImage.src = imagePath;

    }

    function closeModal() {

        modal.classList.remove("active");
        modalImage.src = "";

    }

    document.addEventListener("click", (event) => {

        if (event.target.classList.contains("archive-image")) {
            const imagePath = event.target.dataset.modal;
            openModal(imagePath);
        }

    });

    // closeButton.addEventListener("click", () => {
    //     closeModal();
    // });

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {
            closeModal();
        }

    });


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeModal();
        }

    });

    renderArchive();
  
});
