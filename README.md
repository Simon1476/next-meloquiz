## 프로젝트 제목 : 멜로 퀴즈(Melo Quiz)

![image](https://github.com/Simon1476/next-meloquiz/assets/77772647/98a02164-d241-4c0b-a424-2a709a1c5537)

## 프로젝트 소개

음악 웹 사이트나 앱을 사용하면 광고가 나오고 자신이 평소에 듣지 않는 노래 장르들을 추천해 주는 등 실제 사용자가 원하지 않는 요소들이 존재하는데 이런 것들을 배제하고 오로지 사용자가 원하는 노래만 골라듣는 게 좋을 것 같아서 만들었습니다.
멜로 퀴즈는 사용자가 원하는 노래를 검색하여 듣고 관련 노래를 자기 플레이 리스트에 추가 및 삭제할 수 있으며 자신이 좋아하는 가수의 노래 제목이 뭔지 유추할 수 있는 셀프 퀴즈 기능도 추가하였습니다.

## 개발 인원 및 개발기간

개발 인원 : 1명

개발 기간 : 2024.06.02 ~ 2024.06.20

## 기술 스택

### ✔️Environment

<img src="https://img.shields.io/badge/visualstudio-297ACC?style=for-the-badge&logo=visualstudio&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github&logoColor=white">

### ✔️Develpoment

<img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=black"> <img src="https://img.shields.io/badge/typescript-2F74C0?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/next.js-black?style=for-the-badge&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind css-white?style=for-the-badge&logo=tailwindcss&logoColor=#06B6D4">

### ✔️Deploy

<img src="https://img.shields.io/badge/vercel-2D3748?style=for-the-badge&logo=vercel&logoColor=black">

## 화면 구성

### 메인화면

![image](https://github.com/Simon1476/react-ts-realEstate-app/assets/77772647/d58137d5-62d0-4a0b-8de1-5b6e18508925)

- 로그인 후 검색 창에 노래 제목 또는 가수명을 입력하면 연관된 노래들이 나타나고 클릭하여 재생이 가능하다.

- 노래 정지 및 재생이 가능하며 북마크 버튼을 클릭하여 플레이 리스트에 추가할 수 있으며 플레이어에 ♥ 이모티콘은 실제 spotify 좋아요 리스트와 연동된다.

### 플레이 리스트

![image](https://github.com/Simon1476/react-ts-realEstate-app/assets/77772647/7ec85c2f-65a6-45c1-8b4c-c4f4515e13c6)

- 자신이 듣고 싶은 노래를 추가한 플레이 리스트를 확인하고 실제 노래를 들을 수 있다.
- 추가한 노래의 총 곡수와 소요시간을 확인할 수 있다.

![image](https://github.com/Simon1476/react-ts-realEstate-app/assets/77772647/7b8bbaa2-70a4-41e4-8c61-01e5f0f9f0e4)

- 휴지통 이모티콘을 클릭하면 노래를 삭제하겠냐는 팝업이 나타나고 취소하거나 ok 버튼을 클릭하여 플레이 리스트에서 삭제할 수 있다.

### 사용자 노래 추천 게시글

![image](https://github.com/Simon1476/react-ts-realEstate-app/assets/77772647/aaa26f50-e7e3-4cbb-ac96-cf86a04f1c0f)

- 사용자가 게시한 게시물들을 확인할 수 있다. Read More 버튼을 클릭하여 전체적인 내용 확인이 가능하다.
- Share Your favorite Songs 버튼을 클릭하여 게시물을 작성할 수 있는 페이지로 이동이 가능하다.

### 노래 추천 게시물 작성

![image](https://github.com/Simon1476/react-ts-realEstate-app/assets/77772647/1931af88-7c21-4758-baf8-908c79ea1902)

- 사용자가 다른 사람에게 들려주고 싶은 노래를 공유하기 위해 게시글을 작성할 수 있다.
- 사용자는 게시글에 노래 제목, 가수 이름, 발매 연도, 장르, 소개 글을 작성할 수 있다.

### 멜로퀴즈

![image](https://github.com/Simon1476/react-ts-realEstate-app/assets/77772647/ba160f06-a331-4734-83a2-fc52a7596c02)

- 한 가수의 여러 노래가 준비되어 있고 노래를 들으면서 제목을 알 것 같으면 정답 확인 버튼을 누른 후 제목을 확인하고 다음 노래를 재생하여 반복하는 셀프 퀴즈(?) 기능이다.

## 아키텍처

![image](https://github.com/Simon1476/react-ts-realEstate-app/assets/77772647/dfb17dae-ea85-4e83-aa0e-66fd3a81b33a)
Next.js와 Auth.js의 OAuth 인증을 이용하여 Spotify 로그인과 로그아웃 부분을 구현하였습니다. 로그인 버튼을 누를 경우 spotify 로그인 화면으로 리다이렉션 후 로그인이 되면 다시 원래 화면으로 되돌아옵니다. Spotify의 Web API를 사용하기 위해서는 token이 필요하기 때문에 로그인 기능이 없다면 노래 리스트를 불러오거나 재생할 수 없습니다.

로그인한 사용자들의 계정 정보와 토큰 정보를 데이터 베이스에 저장하기 위해 Prisma Adapter를 이용하였습니다. 게시물을 작성할 때 이미지를 저장하기 위해 AWS S3 BUCKET를 이용하여 이미지 bucket에 업로드 후 저장소에 있는 이미지를 참조하게 하였습니다.

## 개선할 점

- 로그인을 하면 token의 유효기간이 1시간이기 때문에 refresh token 기능을 만들어야 하는데 공식 문서가 Nextjs를 위해서 작성되어 있지도 않고 제공해 주는 코드를 사용했는데 오류가 발생하고 next-auth 5.0.0-beta.19 버전을 사용하고 있는데 자세한 정보가 나와있지 않아서 현재 해결하기가 어렵다.

- 로컬 환경에서 npm run dev, npm run build 및 npm run start 전부 다 잘 실행이 된다. 하지만 vercel에 배포하였는데 배포 페이지에서 로그인 버튼을 누르면 에러는 발생하지 않지만 로그인 완료가 되지 않고 자꾸 login 페이지로 되돌아온다. 3일 동안 구글 검색을 하며 찾아다녔지만 해결하지 못했고 다른 유튜브 영상이나 글들을 찾아보니 내가 사용하고 있는 버전의 공식문서가 잘 나와있지도 않고 다른 개발자들은 production 환경에서 사용하지 않기를 권장한다고 말하고 있다.

### 추가할 기능

- 사용자 노래 추천 게시글을 연도 별로 필터링

- 노래 퀴즈 가수를 현재는 고정 값을 사용중이고 후에 사용자 입력 처리 기능으로 변경

- 메인화면에서 플레이 리스트에 추가된 곡은 특정 색깔로 마킹


### 개발 일지 블로그
하루하루 모든 기록을 기록한 건 아니지만 초기에 어떤 식으로 구성을 했고 일부 기능들을 구현한 절차에 대해서 작성했다.
 [개발 블로그 페이지 링크](https://velog.io/@white0_0/Next-authNext-auth%EB%A1%9C-Spotify-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%95%98%EA%B8%B0/)
