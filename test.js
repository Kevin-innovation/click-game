// DOM 요소 가져오기
const clickBox = document.getElementById('clickBox');
const timer = document.getElementById('timer');
const clickCountDisplay = document.getElementById('clickCount');

// 변수 초기화
let clickCount = 0;
let timerInterval;
let gameRunning = false;
let currentTime = 0;

// 게임 시작 함수
function startGame() {
    if (gameRunning) return;
    
    // 변수 초기화
    clickCount = 0;
    currentTime = 1;
    clickCountDisplay.textContent = '0';
    gameRunning = true;
    
    // 타이머 시작
    timer.textContent = `${currentTime}초`;
    
    // 1초마다 타이머 업데이트
    timerInterval = setInterval(() => {
        currentTime++;
        
        if (currentTime <= 5) {
            timer.textContent = `${currentTime}초`;
        } else {
            // 게임 종료
            endGame();
        }
    }, 1000);
    
    // 클릭 박스 활성화
    clickBox.classList.remove('disabled');
}

// 게임 종료 함수
function endGame() {
    clearInterval(timerInterval);
    gameRunning = false;
    
    // 결과 표시
    timer.textContent = "시작하려면 오른쪽 상자를 클릭하세요";
    
    // 클릭 박스 비활성화
    clickBox.classList.add('disabled');
    
    // 알림창 표시
    setTimeout(() => {
        alert(`게임 종료! 5초 동안 ${clickCount}번 클릭했습니다!`);
        clickBox.classList.remove('disabled');
    }, 100);
}

// 오른쪽 박스 클릭 이벤트 리스너
clickBox.addEventListener('click', function() {
    if (!gameRunning) {
        // 게임이 실행 중이 아니면 게임 시작
        startGame();
    } else {
        // 게임 진행 중이면 클릭 카운트 증가
        clickCount++;
        clickCountDisplay.textContent = clickCount;
    }
});