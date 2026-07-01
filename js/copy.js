document.addEventListener("DOMContentLoaded", function(){


// 도마뱀
        window.addEventListener("scroll", () => {
            const y = window.scrollY;

            document.querySelector(".bg").style.transform =
                `translateY(${y * 0.2}px)`;
        });

        
        // 마우스
        const glow = document.querySelector(".cursor-glow");

        document.addEventListener("mousemove", (e)=>{

            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";

        });

            // 화면에 안 보이게
            textarea.style.position = "fixed";
            textarea.style.left = "-9999px";

            document.body.appendChild(textarea);

            // 선택
            textarea.focus();
            textarea.select();

            try {
                const success = document.execCommand("copy");

                if (success) {
                alert("복사 완료");
                } else {
                alert("복사 실패");
                }
            } catch (err) {
                console.error(err);
                alert("지원되지 않는 브라우저입니다.");
            }
});