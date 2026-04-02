// 1. 카테고리별 문제 은행 (각각 20문항, 총 80문항)
const questionPool = {
    EI: [
        { question: "업무나 공부 중 잠시 휴식 시간이 생겼을 때, 당신은?", answers: [{ text: "동료나 친구에게 말을 걸며 수다를 떤다", type: "E" }, { text: "혼자 스마트폰을 보거나 조용히 생각을 정리한다", type: "I" }] },
        { question: "새로운 사람들과 가득한 파티에 다녀온 뒤 상태는?", answers: [{ text: "에너지를 얻어서 기분이 들뜨고 활기차다", type: "E" }, { text: "즐거웠지만 기운이 빠져서 혼자만의 충전 시간이 절실하다", type: "I" }] },
        { question: "주말에 특별한 계획이 없을 때 당신의 행동은?", answers: [{ text: "누구에게라도 연락해서 만나려고 노력한다", type: "E" }, { text: "집에서 밀린 OTT를 보거나 쉬는 게 진정한 행복이다", type: "I" }] },
        { question: "스트레스를 심하게 받았을 때 푸는 방법은?", answers: [{ text: "친구들을 만나서 맛있는 걸 먹으며 신나게 떠든다", type: "E" }, { text: "방에 혼자 틀어박혀서 조용히 나만의 시간을 갖는다", type: "I" }] },
        { question: "처음 보는 사람과 어색하게 단둘이 남겨졌을 때?", answers: [{ text: "정적을 깨기 위해 먼저 가벼운 스몰토크를 시도한다", type: "E" }, { text: "상대방이 먼저 말을 걸어줄 때까지 조용히 기다린다", type: "I" }] },
        { question: "평소 나의 연락(카톡, 전화) 스타일은?", answers: [{ text: "즉각적인 티키타카가 되는 전화 통화가 훨씬 편하다", type: "E" }, { text: "생각을 정리해서 보낼 수 있는 텍스트(카톡)가 편하다", type: "I" }] },
        { question: "팀 프로젝트를 할 때 내가 선호하는 방식은?", answers: [{ text: "다 같이 모여서 아이디어를 던지며 시끌벅적하게 회의하기", type: "E" }, { text: "각자 파트를 정확히 나누고 조용히 본인 작업에 집중하기", type: "I" }] },
        { question: "단체 톡방에서 나의 포지션은?", answers: [{ text: "대화를 주도하고 리액션을 적극적으로 남기는 편이다", type: "E" }, { text: "주로 읽기만 하거나 나에게 묻는 말에만 대답하는 편이다", type: "I" }] },
        { question: "취미 생활을 새롭게 시작하려고 할 때?", answers: [{ text: "사람들과 함께 배울 수 있는 동호회나 소모임에 가입한다", type: "E" }, { text: "혼자 유튜브나 책을 보며 내 페이스대로 독학한다", type: "I" }] },
        { question: "내가 생각하는 '진짜 친한 친구'의 기준은?", answers: [{ text: "자주 만나고 사소한 일상까지 모두 공유하는 사이", type: "E" }, { text: "오랜만에 봐도 어색함 없이 깊은 대화가 통하는 사이", type: "I" }] },
        { question: "예기치 않은 모임 제안(번개 약속)을 받았을 때?", answers: [{ text: "'좋아! 어디로 갈까?' 즉흥적인 만남에 에너지가 솟는다", type: "E" }, { text: "'아.. 오늘은 집에서 쉬려고 했는데' 일단 머뭇거리게 된다", type: "I" }] },
        { question: "새로운 직장(알바)에 출근한 첫날 당신의 모습은?", answers: [{ text: "먼저 다가가서 인사하고 넉살 좋게 말을 거는 편이다", type: "E" }, { text: "조용히 분위기를 파악하며 내 자리를 묵묵히 지킨다", type: "I" }] },
        { question: "오랜만에 가는 콘서트나 페스티벌에서 나는?", answers: [{ text: "주변 사람들과 다 같이 일어나서 떼창하며 뛰어논다", type: "E" }, { text: "자리에 앉아 아티스트의 퍼포먼스를 조용히 감상한다", type: "I" }] },
        { question: "쉬는 날 카페에 간다면 어떤 곳이 좋은가요?", answers: [{ text: "사람들이 많고 음악 소리가 큰 힙한 대형 핫플 카페", type: "E" }, { text: "조용하고 한적해서 책 읽기 좋은 아늑한 동네 카페", type: "I" }] },
        { question: "식당에서 반찬을 더 달라고 주문해야 할 때?", answers: [{ text: "큰 소리로 '사장님~ 여기 반찬 좀 더 주세요!' 부른다", type: "E" }, { text: "직원과 눈이 마주칠 때까지 기다리거나 호출 벨을 찾는다", type: "I" }] },
        { question: "어떤 문제를 해결하려고 할 때 당신의 사고 과정은?", answers: [{ text: "일단 입 밖으로 소리 내어 말하면서 생각이 정리된다", type: "E" }, { text: "머릿속으로 완벽히 정리가 끝나야 비로소 말이 나온다", type: "I" }] },
        { question: "나를 더 잘 설명하는 단어들의 조합은?", answers: [{ text: "열정적인, 활동적인, 사교적인, 표현이 풍부한", type: "E" }, { text: "차분한, 독립적인, 신중한, 관찰력이 뛰어난", type: "I" }] },
        { question: "엘리베이터에서 이웃이나 직장 동료를 만났을 때?", answers: [{ text: "'날씨가 덥죠?' 하며 자연스럽게 인사를 건네고 말을 튼다", type: "E" }, { text: "목례만 가볍게 하고 도착할 때까지 조용히 허공을 본다", type: "I" }] },
        { question: "다수가 모인 회식 자리에서 내가 주로 앉는 곳은?", answers: [{ text: "분위기를 주도하며 가장 시끄럽게 떠드는 중앙 테이블", type: "E" }, { text: "친한 동료 한두 명과 조용히 얘기를 나눌 수 있는 구석 자리", type: "I" }] },
        { question: "나는 사람들에게 어떤 사람으로 기억되고 싶나요?", answers: [{ text: "함께 있으면 항상 즐겁고 에너지가 넘치는 활기찬 사람", type: "E" }, { text: "묵묵히 자기 일을 잘해내고 믿고 의지할 수 있는 차분한 사람", type: "I" }] }
    ],
    SN: [
        { question: "새로운 기기를 샀을 때, 당신이 먼저 하는 행동은?", answers: [{ text: "설명서를 꼼꼼히 읽고 순서대로 작동시켜 본다", type: "S" }, { text: "설명서 없이 일단 이것저것 만져보며 감으로 익힌다", type: "N" }] },
        { question: "사과 한 알을 보고 가장 먼저 드는 생각은?", answers: [{ text: "빨갛다, 맛있겠다, 아삭한 식감이 느껴진다", type: "S" }, { text: "백설공주, 뉴턴의 만유인력, 애플 로고가 떠오른다", type: "N" }] },
        { question: "처음 가는 장소를 찾아갈 때 당신의 길찾기 스타일은?", answers: [{ text: "지도 앱을 켜고 정확한 거리와 좌회전/우회전 방향을 확인한다", type: "S" }, { text: "전체적인 방향만 숙지하고 눈에 띄는 큰 건물 위주로 찾아간다", type: "N" }] },
        { question: "요리를 할 때 당신의 스타일은?", answers: [{ text: "레시피에 적힌 정량(몇 g, 몇 ml)을 철저하게 지켜서 만든다", type: "S" }, { text: "눈대중과 평소의 감으로 대충 간을 맞추며 요리한다", type: "N" }] },
        { question: "영화나 소설을 보고 난 후 기억에 남는 것은?", answers: [{ text: "주인공이 입었던 옷, 생생한 대사, 구체적인 줄거리", type: "S" }, { text: "작품에 숨겨진 은유와 복선, 결말이 주는 전체적인 여운", type: "N" }] },
        { question: "업무나 과제를 처리할 때 선호하는 방식은?", answers: [{ text: "기존에 해왔던 검증된 방식(매뉴얼)대로 안정적으로 처리한다", type: "S" }, { text: "조금 비효율적이더라도 나만의 새롭고 창의적인 방법을 시도한다", type: "N" }] },
        { question: "버스 창밖을 보며 멍 때릴 때 주로 하는 생각은?", answers: [{ text: "'오늘 저녁 뭐 먹지?', '저 간판 언제 바뀌었지?' 같은 현실적인 생각", type: "S" }, { text: "'만약 내가 좀비 사태에 떨어진다면?', '우주의 끝은 어딜까?' 같은 상상", type: "N" }] },
        { question: "다른 사람에게 무언가를 묘사할 때 나의 말하기 특징은?", answers: [{ text: "있었던 일의 팩트(시간, 장소, 행동) 위주로 정확하게 말한다", type: "S" }, { text: "비유나 은유를 섞어가며 어떤 느낌이었는지 뭉뚱그려 말한다", type: "N" }] },
        { question: "미래를 생각하면 가장 먼저 떠오르는 것은?", answers: [{ text: "당장 내일, 다음 주에 해야 할 현실적인 스케줄과 계획", type: "S" }, { text: "5년, 10년 뒤 나의 모습이나 아직 일어나지 않은 막연한 꿈", type: "N" }] },
        { question: "팀에서 새로운 아이디어를 낼 때 가장 중요한 기준은?", answers: [{ text: "이게 현실적으로 실현 가능한가? 비용은 얼마나 드는가?", type: "S" }, { text: "이게 얼마나 기발한가? 이전에 없던 독창적인 아이디어인가?", type: "N" }] },
        { question: "울창한 숲에 갔을 때 당신이 주로 주목하는 것은?", answers: [{ text: "나무의 종류, 나뭇잎의 색깔, 발에 밟히는 흙의 촉감", type: "S" }, { text: "숲 전체가 뿜어내는 웅장한 분위기와 신비로운 느낌", type: "N" }] },
        { question: "학교나 사회의 규칙, 제도를 대하는 나의 태도는?", answers: [{ text: "다 이유가 있어서 만들어졌을 테니 일단 따르는 것이 맞다", type: "S" }, { text: "시대가 변했거나 불합리하다면 언제든 바뀔 수 있어야 한다", type: "N" }] },
        { question: "복잡한 직소 퍼즐을 맞출 때 나의 전략은?", answers: [{ text: "가장자리 테두리부터 차근차근 형태를 잡아나가며 맞춘다", type: "S" }, { text: "전체 그림을 머릿속에 그리며 눈에 띄는 조각부터 감으로 맞춘다", type: "N" }] },
        { question: "누군가 '비행기'라는 단어를 말하면 연상되는 것은?", answers: [{ text: "공항, 여권, 수하물 무게, 기내식, 탑승 수속", type: "S" }, { text: "하늘을 나는 새, 자유, 일상으로부터의 탈출, 미지의 세계", type: "N" }] },
        { question: "수업이나 새로운 개념을 배울 때 선호하는 방식은?", answers: [{ text: "구체적인 예시와 실습 위주로 직접 해봐야 이해가 잘 된다", type: "S" }, { text: "세부 내용보다는 전체적인 숲(이론과 원리)을 파악하는 게 재밌다", type: "N" }] },
        { question: "일을 진행하기 위해 계획을 세울 때 나의 머릿속은?", answers: [{ text: "'A를 끝내고 B를 한 다음 C로 가자' (순차적이고 단계적이다)", type: "S" }, { text: "'결과물 D를 만들기 위해 이것저것 다 건드려보자' (통합적이다)", type: "N" }] },
        { question: "과거의 특정 날짜를 떠올릴 때 내 기억의 형태는?", answers: [{ text: "그날 입었던 옷, 먹었던 음식, 나눴던 대화 등 디테일이 생생하다", type: "S" }, { text: "정확한 팩트보다는 그날 느꼈던 감정과 분위기 위주로 기억난다", type: "N" }] },
        { question: "미술관에서 추상화를 감상할 때 나의 시선은?", answers: [{ text: "작가의 붓 터치, 사용된 색감, 그림에 그려진 형태 자체를 본다", type: "S" }, { text: "이 작품을 통해 작가가 나에게 전하고자 하는 철학적 메시지를 추측한다", type: "N" }] },
        { question: "나를 더 잘 설명하는 단어들의 조합은?", answers: [{ text: "현실적인, 꼼꼼한, 실용적인, 경험 중심적인", type: "S" }, { text: "상상력이 풍부한, 창의적인, 이상적인, 미래 지향적인", type: "N" }] },
        { question: "친구가 '나 요즘 머리가 너무 빠져서 걱정이야'라고 한다면?", answers: [{ text: "'최근에 스트레스받는 일 있어? 샴푸는 뭐 쓰는데?' 원인을 묻는다", type: "S" }, { text: "'대머리 되면 어떡해 ㅠㅠ 모자 쓰고 다녀야 하나?' 상상의 나래를 펼친다", type: "N" }] }
    ],
    TF: [
        { question: "친구가 '나 우울해서 쇼핑했어'라고 말할 때 당신의 첫 대답은?", answers: [{ text: "뭐 샀어? 돈 너무 많이 쓴 거 아냐?", type: "T" }, { text: "왜 우울했어? 쇼핑하니까 기분은 좀 나아졌어?", type: "F" }] },
        { question: "친구의 고민 상담을 해줄 때 당신의 역할은 주로 어떤 쪽인가요?", answers: [{ text: "상황을 분석해서 실질적이고 현실적인 해결책을 찾아준다", type: "T" }, { text: "친구가 느꼈을 감정에 깊이 공감하며 따뜻하게 위로해 준다", type: "F" }] },
        { question: "친한 친구가 '나 이번 시험 완전 망쳤어'라고 할 때?", answers: [{ text: "'무슨 과목인데? 몇 점 받았어? 다음엔 기출문제 위주로 파봐'", type: "T" }, { text: "'헐 어떡해 ㅠㅠ 준비하느라 진짜 고생 많았는데 너무 속상하겠다'", type: "F" }] },
        { question: "팀원이 업무 중 실수를 했을 때 당신의 대처 방식은?", answers: [{ text: "원인이 무엇인지 분석하고 어떻게 수습할지 팩트 위주로 지적한다", type: "T" }, { text: "팀원이 자책하지 않게 다독여준 뒤, 함께 해결책을 고민한다", type: "F" }] },
        { question: "중요한 결정을 내릴 때 가장 우선시하는 기준은?", answers: [{ text: "무엇이 가장 논리적이고 효율적이며 합리적인가?", type: "T" }, { text: "이 결정이 나와 사람들의 감정과 관계에 어떤 영향을 미칠까?", type: "F" }] },
        { question: "누군가에게 칭찬을 들을 때 더 기분 좋은 말은?", answers: [{ text: "'너 진짜 일 처리 깔끔하고 똑부러지게 잘한다! 천재 아냐?'", type: "T" }, { text: "'너랑 같이 있으면 너무 마음이 편안해. 넌 정말 좋은 사람이야!'", type: "F" }] },
        { question: "부탁을 거절해야 하는 난처한 상황에서 당신은?", answers: [{ text: "타당한 이유를 대며 명확하고 단호하게 '안 된다'고 말한다", type: "T" }, { text: "상대방이 상처받을까 걱정되어 최대한 돌려 말하며 미안해한다", type: "F" }] },
        { question: "영화를 보다가 매우 슬픈 장면이 나왔을 때?", answers: [{ text: "'저 상황에서 저렇게 우는 게 말이 되나?' 상황의 개연성을 먼저 따진다", type: "T" }, { text: "주인공의 비극적인 감정에 깊이 이입해서 나도 모르게 같이 눈물을 흘린다", type: "F" }] },
        { question: "일상 대화 중 친구와 의견 충돌이 생겼다면?", answers: [{ text: "끝까지 팩트로 토론해서 내 논리가 맞다는 것을 꼭 증명하고 싶다", type: "T" }, { text: "분위기가 험악해지는 게 싫어서 속으론 아니어도 적당히 수긍하고 넘긴다", type: "F" }] },
        { question: "나에게 더 큰 상처가 되는 피드백은?", answers: [{ text: "'너 왜 이렇게 생각이 없어? 앞뒤 논리가 하나도 안 맞잖아.'", type: "T" }, { text: "'너 왜 이렇게 매정해? 남들 기분 생각은 전혀 안 하니?'", type: "F" }] },
        { question: "가벼운 접촉 사고가 났다고 지인에게 연락이 왔을 때?", answers: [{ text: "'보험사는 불렀어? 블랙박스는 확인했고? 과실 비율은 어떻게 된대?'", type: "T" }, { text: "'어디 안 다쳤어?! 얼마나 놀랐어 ㅠㅠ 병원은 가봤어?'", type: "F" }] },
        { question: "생일을 맞은 친구에게 선물을 고를 때 나의 기준은?", answers: [{ text: "상대방에게 당장 필요하고 실생활에 유용한 실용적인 물건", type: "T" }, { text: "실용성은 떨어져도 정성이 담긴 편지나 감성을 자극하는 예쁜 선물", type: "F" }] },
        { question: "동료의 작업물에 피드백을 주어야 할 때?", answers: [{ text: "객관적인 사실과 단점을 가감 없이 솔직하게 말하는 것이 진짜 돕는 길이다", type: "T" }, { text: "상대방의 기분이 상하지 않게 장점부터 칭찬하고 단점은 최대한 순화해서 말한다", type: "F" }] },
        { question: "훌륭한 리더가 갖춰야 할 더 중요한 덕목은 무엇일까요?", answers: [{ text: "공정하고 원리원칙에 입각하여 정확한 방향을 제시하는 판단력", type: "T" }, { text: "팀원들의 마음을 이해하고 화합을 이끌어내는 소통과 공감 능력", type: "F" }] },
        { question: "누군가 힘든 일을 겪고 있을 때 내가 건네는 위로 방식은?", answers: [{ text: "'시간이 지나면 다 해결될 거야. 지금 당장 네가 할 수 있는 일에 집중해봐.'", type: "T" }, { text: "'진짜 힘들었겠다... 내가 계속 옆에서 얘기 들어줄게. 마음껏 울어도 돼.'", type: "F" }] },
        { question: "유명한 맛집에 갔는데 생각보다 음식이 맛이 없을 때?", answers: [{ text: "'이건 소금이 부족하고 고기가 너무 퍽퍽하네' 속으로 맛의 원인을 분석한다", type: "T" }, { text: "'사장님이 친절하시니까 그냥 먹자' 분위기 깰까 봐 별말 없이 먹는다", type: "F" }] },
        { question: "나를 더 잘 설명하는 단어들의 조합은?", answers: [{ text: "이성적인, 객관적인, 단호한, 원칙주의적인", type: "T" }, { text: "감성적인, 공감하는, 따뜻한, 조화를 중시하는", type: "F" }] },
        { question: "과제를 제출했는데 교수님이 '노력은 가상한데 결과가 아쉽네'라고 한다면?", answers: [{ text: "결과물이 별로라니, 어느 부분이 부족한 건지 피드백 내용에만 집중한다", type: "T" }, { text: "내가 며칠 밤을 새운 '노력'을 깎아내리는 것 같아 마음의 상처를 입는다", type: "F" }] },
        { question: "친한 친구와 크게 말다툼을 했을 때 내 머릿속은?", answers: [{ text: "누가 먼저 잘못했는지 원인부터 따져보고 잘잘못을 명확히 가리고 싶다", type: "T" }, { text: "이 일로 인해 서로의 관계가 멀어지고 감정이 상한 것이 너무나도 괴롭다", type: "F" }] },
        { question: "어떤 사람을 볼 때 '저 사람 진짜 능력 있다'고 느끼나요?", answers: [{ text: "주어진 일 처리가 소름 돋게 정확하고 공과 사 구분이 뚜렷한 사람", type: "T" }, { text: "주변 사람들을 살뜰히 챙기고 언제나 팀 분위기를 따뜻하게 만드는 사람", type: "F" }] }
    ],
    JP: [
        { question: "여행을 가기 전, 당신의 계획표 상태는?", answers: [{ text: "시간 단위로 동선을 짜고 방문할 식당의 휴무일까지 완벽히 알아둔다", type: "J" }, { text: "가고 싶은 굵직한 장소 몇 곳만 정해두고 나머지는 발길 닿는 대로 다닌다", type: "P" }] },
        { question: "시험 공부나 업무 데드라인을 앞둔 당신의 모습은?", answers: [{ text: "미리미리 분량을 나누어 매일 조금씩 계획적으로 끝내놓는다", type: "J" }, { text: "벼락치기가 제맛! 마감이 턱밑까지 와야 아드레날린이 솟고 효율이 폭발한다", type: "P" }] },
        { question: "스마트폰 앱 아이콘에 알림(빨간 숫자)이 떠 있을 때?", answers: [{ text: "너무 거슬려서 알림이 뜨는 족족 확인하고 깨끗하게 지워버려야 직성이 풀린다", type: "J" }, { text: "빨간 숫자가 999+개가 쌓여 있어도 내 알 바 아니며 별로 신경 쓰지 않는다", type: "P" }] },
        { question: "방 청소나 물건 정리를 할 때 당신의 평소 스타일은?", answers: [{ text: "모든 물건이 정해진 제자리에 각 잡혀 놓여 있어야 마음이 편안하다", type: "J" }, { text: "조금 어질러져 있어도 내 나름의 규칙이 있어서 찾는 데는 아무 지장 없다", type: "P" }] },
        { question: "새로운 프로젝트나 과제를 시작할 때 첫 단계는?", answers: [{ text: "전체적인 목차와 마일스톤(일정표)을 먼저 명확히 세팅하고 시작한다", type: "J" }, { text: "일단 자료조사부터 끄적여보면서 흐름에 맞춰 유연하게 방향을 잡아간다", type: "P" }] },
        { question: "약속 시간이 1시간 뒤로 갑자기 미뤄졌다는 연락을 받았을 때?", answers: [{ text: "내 하루 일정이 꼬여버린 것 같아서 짜증이 나거나 몹시 당황스럽다", type: "J" }, { text: "오히려 좋아! 남은 1시간 동안 여유를 부리거나 유튜브를 보며 쉰다", type: "P" }] },
        { question: "친구들과 맛집을 찾아갈 때 당신의 행동은?", answers: [{ text: "방문자 리뷰, 별점, 브레이크타임, 주차 여부까지 꼼꼼하게 교차 검증한다", type: "J" }, { text: "길을 걷다가 냄새가 좋거나 간판이 맛있어 보이는 곳에 즉흥적으로 들어간다", type: "P" }] },
        { question: "하루 일과를 모두 마친 밤, 당신이 만족감을 느끼는 순간은?", answers: [{ text: "아침에 메모해둔 '오늘 할 일(To-do list)'에 전부 밑줄을 그었을 때", type: "J" }, { text: "계획하진 않았지만 우연히 재밌는 일이 생겨서 기분 좋게 하루를 보냈을 때", type: "P" }] },
        { question: "장보기 위해 마트에 갔을 때 당신의 쇼핑 카트에는?", answers: [{ text: "미리 스마트폰에 적어둔 살 품목 리스트에 있는 물건만 딱 들어있다", type: "J" }, { text: "돌아다니다가 눈에 띄는 신상 과자나 1+1 세일하는 물건들이 담겨 있다", type: "P" }] },
        { question: "학교 과제나 업무 마감일(데드라인)을 대하는 태도는?", answers: [{ text: "마감일은 내 목숨과도 같다. 어떤 일이 있어도 반드시 그 전에 끝내야 한다", type: "J" }, { text: "마감일은 대략적인 가이드라인일 뿐, 상황에 따라 하루 이틀 유동적일 수 있다", type: "P" }] },
        { question: "아무 일도 없는 휴일 아침 눈을 떴을 때 당신의 머릿속은?", answers: [{ text: "'10시쯤 밥 먹고, 12시에 세탁기 돌리고, 3시에 카페 가야지' 틀이 잡혀 있다", type: "J" }, { text: "'날씨 좋네~ 일단 누워서 폰 좀 보다가 끌리는 거 해야지' 흐름에 맡긴다", type: "P" }] },
        { question: "카톡이나 업무 메일이 왔을 때 당신의 답장 스타일은?", answers: [{ text: "확인하는 즉시(혹은 내가 정해둔 시간에) 깔끔하게 답장하고 알림을 없앤다", type: "J" }, { text: "'나중에 여유로울 때 해야지' 하고 미루다가 가끔 답장을 까먹기도 한다", type: "P" }] },
        { question: "사용한 물건(예: 가위, 리모컨)을 다 쓰고 난 후에는?", answers: [{ text: "다음에 찾기 쉽도록 즉시 원래 있던 서랍이나 제자리에 반납해 둔다", type: "J" }, { text: "나중에 한꺼번에 치우려고 일단 손이 닿기 쉬운 근처에 올려둔다", type: "P" }] },
        { question: "여행 중 갑자기 폭우가 쏟아져서 야외 일정이 취소되었다면?", answers: [{ text: "완벽했던 계획이 틀어져 몹시 스트레스받으며 급하게 Plan B를 검색한다", type: "J" }, { text: "'비 오는 날의 운치가 또 있지' 하며 근처 예쁜 카페에서 여유를 즐긴다", type: "P" }] },
        { question: "어떤 결정을 내려야 할 때 선호하는 방식은?", answers: [{ text: "빠르게 결정을 내리고 마음 편하게 이 상황을 종결짓는 것을 좋아한다", type: "J" }, { text: "더 좋은 옵션이나 변수가 생길지 모르니 최대한 마지막까지 결정을 보류한다", type: "P" }] },
        { question: "당신의 옷장이나 서랍 속 상태를 묘사해 본다면?", answers: [{ text: "계절별, 색상별, 종류별로 나름의 엄격한 규칙에 따라 칼같이 정리되어 있다", type: "J" }, { text: "겉보기엔 그럴듯하게 닫혀 있지만 문을 열면 안은 꽤 자유분방하게 섞여 있다", type: "P" }] },
        { question: "내비게이션 없이 아는 길을 운전(또는 걷기)할 때?", answers: [{ text: "가장 빠르고 효율적이라고 내 머릿속에 검증된 익숙한 길로만 다닌다", type: "J" }, { text: "오늘은 왠지 저 골목으로 가보고 싶어서 평소 안 가본 새로운 길로 빠진다", type: "P" }] },
        { question: "약속 장소인 식당에서 메뉴를 고를 때 당신의 모습은?", answers: [{ text: "식당에 오기 전부터 리뷰를 보며 이미 내 마음속에 먹을 메뉴를 정해놓았다", type: "J" }, { text: "자리에 앉아 메뉴판을 한참 넘겨보며 지금 당장 가장 끌리는 것을 고른다", type: "P" }] },
        { question: "나를 더 잘 설명하는 단어들의 조합은?", answers: [{ text: "체계적인, 꼼꼼한, 계획적인, 마무리가 확실한", type: "J" }, { text: "유연한, 적응력이 뛰어난, 즉흥적인, 가능성을 열어두는", type: "P" }] },
        { question: "요리를 할 때 도마와 칼, 그릇 등 설거짓거리가 생기면?", answers: [{ text: "요리를 하는 중간중간 틈틈이 설거지를 해서 싱크대를 항상 깨끗하게 유지한다", type: "J" }, { text: "일단 요리를 완성해서 맛있게 먹는 게 먼저! 설거지는 다 먹고 한꺼번에 한다", type: "P" }] }
    ]
};

// 2. 현재 테스트에서 실제로 사용될 20문항을 담을 빈 배열
let questions = [];
const descriptions = {
    "ISTJ": { title: "청렴결백한 논리주의자", desc: "한번 시작한 일은 끝까지 해내는 책임감 있는 사람" },
    "ISFJ": { title: "용감한 수호자", desc: "소중한 사람들을 지키기 위해 최선을 다하는 사람" },
    "INFJ": { title: "선의의 옹호자", desc: "조용하지만 강한 신념을 가진 이상주의자" },
    "INTJ": { title: "용의주도한 전략가", desc: "모든 일에 계획을 세우고 체계적으로 실행하는 사람" },
    "ISTP": { title: "만능 재주꾼", desc: "손재주가 좋고 논리적인 탐험가" },
    "ISFP": { title: "호기심 많은 예술가", desc: "감성이 풍부하고 새로운 경험을 좋아하는 사람" },
    "INFP": { title: "열정적인 중재자", desc: "이상적인 세상을 꿈꾸며 내면의 가치를 중시하는 사람" },
    "INTP": { title: "논리적인 사색가", desc: "끊임없이 지식을 탐구하는 분석적인 사람" },
    "ESTP": { title: "모험을 즐기는 사업가", desc: "현재를 즐기며 위험을 두려워하지 않는 행동파" },
    "ESFP": { title: "자유로운 영혼의 연예인", desc: "어디서든 분위기를 띄우는 에너지 넘치는 사람" },
    "ENFP": { title: "재기발랄한 활동가", desc: "늘 새로운 가능성을 찾아다니는 열정적인 사람" },
    "ENTP": { title: "뜨거운 논쟁을 즐기는 변론가", desc: "지적 토론을 좋아하는 창의적인 사람" },
    "ESTJ": { title: "엄격한 관리자", desc: "규칙과 질서를 중시하며 조직을 이끄는 사람" },
    "ESFJ": { title: "사교적인 외교관", desc: "주변 사람들의 감정을 잘 살피고 배려하는 사람" },
    "ENFJ": { title: "정의로운 사회운동가", desc: "다른 사람의 성장을 돕는 것에 보람을 느끼는 리더" },
    "ENTJ": { title: "대담한 통솔자", desc: "큰 그림을 그리고 사람들을 이끌어가는 카리스마 있는 사람" }
};

// 16Personalities 이미지 URL 매핑
const mbtiImages = {
    "INTJ": "https://www.16personalities.com/static/images/personality-types/avatars/intj-architect.svg",
    "INTP": "https://www.16personalities.com/static/images/personality-types/avatars/intp-logician.svg",
    "ENTJ": "https://www.16personalities.com/static/images/personality-types/avatars/entj-commander.svg",
    "ENTP": "https://www.16personalities.com/static/images/personality-types/avatars/entp-debater.svg",
    "INFJ": "https://www.16personalities.com/static/images/personality-types/avatars/infj-advocate.svg",
    "INFP": "https://www.16personalities.com/static/images/personality-types/avatars/infp-mediator.svg",
    "ENFJ": "https://www.16personalities.com/static/images/personality-types/avatars/enfj-protagonist.svg",
    "ENFP": "https://www.16personalities.com/static/images/personality-types/avatars/enfp-campaigner.svg",
    "ISTJ": "https://www.16personalities.com/static/images/personality-types/avatars/istj-logistician.svg",
    "ISFJ": "https://www.16personalities.com/static/images/personality-types/avatars/isfj-defender.svg",
    "ESTJ": "https://www.16personalities.com/static/images/personality-types/avatars/estj-executive.svg",
    "ESFJ": "https://www.16personalities.com/static/images/personality-types/avatars/esfj-consul.svg",
    "ISTP": "https://www.16personalities.com/static/images/personality-types/avatars/istp-virtuoso.svg",
    "ISFP": "https://www.16personalities.com/static/images/personality-types/avatars/isfp-adventurer.svg",
    "ESTP": "https://www.16personalities.com/static/images/personality-types/avatars/estp-entrepreneur.svg",
    "ESFP": "https://www.16personalities.com/static/images/personality-types/avatars/esfp-entertainer.svg"
};

let currentPage = 0;
const questionsPerPage = 5;
let totalPages = 0;

function pickRandomQuestions() {
    let selectedQuestions = [];
    const categories = ['EI', 'SN', 'TF', 'JP'];

    // 1. 각 카테고리별로 5개씩 뽑아서 합치기 (기존과 동일)
    categories.forEach(category => {
        const shuffled = [...questionPool[category]].sort(() => Math.random() - 0.5);
        selectedQuestions = selectedQuestions.concat(shuffled.slice(0, 5));
    });

    // 2. ★ 추가된 부분: 20개가 모인 전체 배열의 순서를 다시 한번 무작위로 마구 섞어줍니다!
    selectedQuestions.sort(() => Math.random() - 0.5);

    return selectedQuestions; // 순서까지 완전히 섞인 20문제 반환
}

// 1. 시작 버튼 클릭 시 실행
function startTest() {
    // 검사 시작 버튼을 누를 때마다 새로운 20문제를 랜덤으로 세팅합니다!
    questions = pickRandomQuestions();
    totalPages = Math.ceil(questions.length / questionsPerPage);

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("test-screen").style.display = "block";

    renderQuestions();
    updatePageVisibility();
    updateProgress();
}

// 2. 전체 문항을 DOM에 그리고 5개씩 div로 묶기
function renderQuestions() {
    const container = document.querySelector("#questions-container");
    let html = "";

    questions.forEach((q, index) => {
        // 5개마다 새로운 페이지 컨테이너 열기
        if (index % questionsPerPage === 0) {
            html += `<div class="page-chunk" id="page-${Math.floor(index / questionsPerPage)}">`;
        }

        // onchange 이벤트에 updateProgress()를 달아 라디오 버튼을 누를 때마다 진행바가 채워지게 함
        html += `
            <div class="question-item">
                <h3 class="question-title">${index + 1}. ${q.question}</h3>
                <div class="text-options">
                    <div class="left-text">${q.answers[0].text}</div>
                    <div class="right-text">${q.answers[1].text}</div>
                </div>
                <div class="options">
                    <label><input type="radio" name="q${index}" value="L2" onchange="handleSelection(this)"><span>매우 그렇다</span></label>
                    <label><input type="radio" name="q${index}" value="L1" onchange="handleSelection(this)"><span>그렇다</span></label>
                    <label><input type="radio" name="q${index}" value="0" onchange="handleSelection(this)"><span>보통</span></label>
                    <label><input type="radio" name="q${index}" value="R1" onchange="handleSelection(this)"><span>그렇다</span></label>
                    <label><input type="radio" name="q${index}" value="R2" onchange="handleSelection(this)"><span>매우 그렇다</span></label>
                </div>
            </div>`;

        // 5개 렌더링이 끝나거나 마지막 문항이면 페이지 컨테이너 닫기
        if (index % questionsPerPage === questionsPerPage - 1 || index === questions.length - 1) {
            html += `</div>`;
        }
    });
    container.innerHTML = html;
}

// 3. 진행도(Progress Bar & Text) 업데이트
function updateProgress() {
    // 체크된 라디오 버튼의 총 개수를 가져옴
    const answeredCount = document.querySelectorAll('input[type="radio"]:checked').length;
    const totalCount = questions.length;

    document.getElementById("progress-text").innerText = `${answeredCount} / ${totalCount}`;
    document.getElementById("progress-fill").style.width = `${(answeredCount / totalCount) * 100}%`;
}

// 4. 현재 페이지에 해당하는 문항 5개만 화면에 표시
function updatePageVisibility() {
    // 모든 페이지 묶음을 숨기고 현재 페이지만 클래스를 추가해 보여줌
    document.querySelectorAll('.page-chunk').forEach((page, index) => {
        page.classList.remove('active');
        if (index === currentPage) {
            page.classList.add('active');
        }
    });

    // 현재 페이지가 마지막 페이지면 버튼 텍스트와 동작을 '결과 보기'로 변경
    const nextBtn = document.getElementById("next-btn");
    if (currentPage === totalPages - 1) {
        nextBtn.innerText = "결과 보기";
        nextBtn.onclick = calculateResult; // 다음 페이지 이동 대신 결과 계산 함수 연결
    } else {
        nextBtn.innerText = "다음";
        nextBtn.onclick = nextPage;
    }

    // 페이지 전환 시 부드럽게 화면 맨 위로 끌어올림
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. 다음 페이지 이동 로직 (유효성 검사 포함)
function nextPage() {
    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    let allAnswered = true;

    // 현재 화면에 있는 5개의 문항이 모두 체크되었는지 확인
    for (let i = startIndex; i < endIndex; i++) {
        if (!document.querySelector(`input[name="q${i}"]:checked`)) {
            allAnswered = false;
            break;
        }
    }

    if (!allAnswered) {
        alert("현재 페이지의 모든 문항에 답해주세요!");
        return;
    }

    currentPage++;
    updatePageVisibility();
}

// 6. 최종 결과 계산 로직
function calculateResult() {
    // (유효성 검사 부분은 기존과 동일)
    const startIndex = currentPage * questionsPerPage;
    const endIndex = questions.length;
    let allAnswered = true;
    for (let i = startIndex; i < endIndex; i++) {
        if (!document.querySelector(`input[name="q${i}"]:checked`)) {
            allAnswered = false; break;
        }
    }
    if (!allAnswered) { alert("마지막 페이지의 모든 문항에 답해주세요!"); return; }

    // 1. 점수 합산
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    questions.forEach((q, index) => {
        const val = document.querySelector(`input[name="q${index}"]:checked`).value;
        if (val === "L2") scores[q.answers[0].type] += 2;
        else if (val === "L1") scores[q.answers[0].type] += 1;
        else if (val === "R1") scores[q.answers[1].type] += 1;
        else if (val === "R2") scores[q.answers[1].type] += 2;
    });

    /// 2. 퍼센트 계산 함수 (동점 방지 로직 추가)
    const getPercent = (leftType, rightType) => {
        const diff = scores[leftType] - scores[rightType];
        let leftPercent = Math.round(((10 + diff) / 20) * 100);

        // ★ 동점(50:50)일 경우 47~53 (50 제외) 비율로 강제 조정
        if (leftPercent === 50) {

            // 헴 님이 원하시는 후보군: 47, 48, 49, 51, 52, 53
            const tieOptions = [47, 48, 49, 51, 52, 53];

            // 배열에서 무작위로 인덱스를 하나 골라서 적용
            const randomIndex = Math.floor(Math.random() * tieOptions.length);
            leftPercent = tieOptions[randomIndex];
        }

        return leftPercent;
    };

    const stats = [
        { left: 'E', right: 'I', percent: getPercent('E', 'I') },
        { left: 'S', right: 'N', percent: getPercent('S', 'N') },
        { left: 'T', right: 'F', percent: getPercent('T', 'F') },
        { left: 'J', right: 'P', percent: getPercent('J', 'P') }
    ];

    // 3. MBTI 결론 도출
    const mbti = stats.map(s => s.percent >= 50 ? s.left : s.right).join('');
    const info = descriptions[mbti] || { title: "오류", desc: "데이터 부족" };
    const imageUrl = mbtiImages[mbti] || "";

    // 4. 결과 창 HTML 생성 (그래프 포함)
    let statHtml = '<div class="stat-container">';
    stats.forEach(s => {
        statHtml += `
                    <div class="stat-row">
                        <span class="stat-label">${s.left}</span>
                        <div class="stat-bar-bg">
                            <div class="stat-fill-left" style="width: ${s.percent}%"></div>
                            <div class="stat-fill-right" style="width: ${100 - s.percent}%"></div>
                        </div>
                        <span class="stat-label">${s.right}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-top:-10px; font-size:0.8rem; color:#aaa; padding:0 45px;">
                        <span>${s.percent}%</span>
                        <span>${100 - s.percent}%</span>
                    </div>
                `;
    });
    statHtml += '</div>';

    document.getElementById("test-screen").style.display = "none";
    const resultBox = document.getElementById("result-box");
    resultBox.style.display = "block";

    resultBox.innerHTML = `
                <h2>당신의 MBTI는 ${mbti}입니다!</h2>
                <h3>${info.title}</h3>
                ${imageUrl ? `<img id='mbti-image' src='${imageUrl}'>` : ""}
                ${statHtml}
                <p style="margin-top:20px;">${info.desc}</p>
                <button id='restart-btn' onclick='restartTest()'>다시 하기</button>
            `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 7. 다시 시작하기 로직
function restartTest() {
    currentPage = 0;

    // 기존 화면에 그려졌던 문제 컨테이너 안을 깨끗하게 비웁니다.
    document.querySelector("#questions-container").innerHTML = "";

    document.getElementById("result-box").style.display = "none";
    document.getElementById("start-screen").style.display = "block";

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSelection(radioElement) {
    updateProgress();

    const currentQuestion = radioElement.closest('.question-item');

    const nextQuestion = currentQuestion.nextElementSibling;

    setTimeout(() => {
        if (nextQuestion) {
            // 다음 문항이 있으면 그 문항이 화면 중앙에 오도록 스크롤
            nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            // 현재 페이지의 마지막 문항이면 '다음' 또는 '결과 보기' 버튼으로 스크롤
            document.getElementById('next-btn').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
}