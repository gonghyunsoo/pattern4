window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // 동그라미 패턴 생성
    function drawPattern() {
        const numberOfCircles = 50; // 동그라미 수
        const minRadius = 10;
        const maxRadius = 50;

        for (let i = 0; i < numberOfCircles; i++) {
            // 무작위 위치 및 크기 생성
            const x = Math.random() * canvasWidth;
            const y = Math.random() * canvasHeight;
            const radius = Math.random() * (maxRadius - minRadius) + minRadius;
            const blueShade = Math.floor(Math.random() * 256);

            // 푸른색 음영 설정
            ctx.fillStyle = `rgb(0, 0, ${blueShade})`;

            // 동그라미 그리기
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
        }
    }

    drawPattern();
};
