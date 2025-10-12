import Image from "next/image";
import MarketingSwiper from "./components/MarketingSwiper";

export default function Home() {
  const historyList = [
    {
      companyRole: "내몸사랑한의원 마케팅팀 / 팀장",
      companyStats: "사원수: 11명 / 매출액: 12억 이상",
    },
    {
      companyRole: "메가젠임플란트 마케팅팀 / 과장",
      companyStats: "사원 수 : 330명 / 매출액 800억 이상",
    },
    {
      companyRole: "서울위드치과 마케팅팀 / 팀장",
      companyStats: "사원 수: 60명 / 매출액: 60억 이상",
    },
    {
      companyRole: "서울나우병원 기획홍보팀 / 팀장",
      companyStats: "사원 수: 150명 / 매출액: 150억 이상",
    },
    {
      companyRole: "생기가득한방병원 마케팅팀 / 팀장",
      companyStats: "사원수 : 70명 / 매출액 : 75억 이상",
    },
  ];
  const cardClass =
    "w-3xs md:w-auto h-[410px] relative rounded-[10px] shadow-[0_0_10px_-5px_rgba(0,0,0,0.6)] bg-white list-none p-7.5 hover:scale-105 active:scale-105 transition-transform duration-300 ease-in-out ";
  const teamList = [
      {
        title: "디자이너",
        img: "/introduce-2.png",
        text: "병원의 이야기와 가치를 원하는 모습 그대로, 보기 좋고 정돈된 디자인으로 담아내는 7년 차 디자이너 입니다.",
      },
      {
        title: "PD",
        img: "/introduce-3.png",
        text: "유튜브·홍보영상 기획/촬영/편집 처음부터 끝까지, 병원에 꼭 맞는 영상으로 함께합니다. 16년간 쌓 아온 노하우로 기획부터 촬영, 편집까지 믿고 맡기실 수 있습니다.",
      },
      {
        title: "영상편집자",
        img: "/introduce-4.png",
        text: "병원의 분위기와 흐름을 잘 아는 편집자입니다. 영상팀에서 쌓은 경험을 바탕으로 롱폼부터 숏폼까지 자연스럽고 감각 있게 완성합니다.",
      },
      {
        title: "디자이너 출신 개발자",
        img: "/introduce-5.png",
        text: "유튜브·홍보영상 기획/촬영/편집 처음부터 끝까지, 병원에 꼭 맞는 영상으로 함께합니다. 16년간 쌓아온 노하우로 기획부터 촬영, 편집까지 믿고 맡기실 수 있습니다.",
      },
      {
        title: "행정관리자",
        img: "/introduce-6.png",
        text: "병원 인하우스 근무, 대외 협약 및 계약을 담당하고 있습니다. 병원현장을 잘 아는 행정 실무자입니다. 8년간의 인하우스 경험으로, 행정과 노무, 협약까지 세심하게 챙깁니다.",
      },
    ],
    doingList = [
      {
        title: "홈페이지",
        text: <>브랜드 아이덴티티를 반영한, 심플하고 신뢰감 있는 웹 구성</>,
      },
      {
        title: "플레이스",
        text: (
          <>
            지도·포털 노출 최적화. 정보 최신화+리뷰 전략 병행 방문 유도형 검색
            채널 구축
          </>
        ),
      },
      {
        title: "블로그",
        text: (
          <>
            키워드 기반 정보 콘텐츠 운영 사례 + 정보글 혼합 전략 검색 유입 →
            전환 유도
          </>
        ),
      },
      {
        title: "유튜브",
        text: (
          <>
            친근한 영상 콘텐츠 기획 정보 + 공감형 구성 의료진 및 직원, 병원의
            브랜딩화
          </>
        ),
      },
      {
        title: "통합마케팅",
        text: <>촬영·디자인·의료심의 대행 네이버/구글 검색 광고 세팅</>,
      },
    ];

  const logoList = [
    "/logo-slide-1.png",
    "/logo-slide-2.png",
    "/logo-slide-3.png",
    "/logo-slide-5.png",
    "/logo-slide-6.png",
    "/logo-slide-7.png",
    "/logo-slide-8.png",
    "/logo-slide-9.png",
    "/logo-slide-10.png",
    "/logo-slide-11.png",
    "/logo-slide-12.png",
    "/logo-slide-13.png",
    "/logo-slide-14.png",
    "/logo-slide-15.png",
    "/logo-slide-16.png",
    "/logo-slide-17.png",
    "/logo-slide-18.png",
    "/logo-slide-19.png",
    "/logo-slide-20.png",
    "/logo-slide-21.png",
    "/logo-slide-22.png",
    "/logo-slide-23.png",
    "/logo-slide-24.png",
    "/logo-slide-25.png",
  ];

  return (
    <main className="px-5 md:px-16 overflow-x-hidden">
      <section id="about" className="mt-24 mb-15">
        <article>
          <div className="mb-10">
            <h3 className="text-lg text-[#005432] font-bold inline-block mb-3.5">
              소이컴퍼니 소개
            </h3>
            <p className="text-[22px] tracking-tighter md:text-3xl font-bold md:leading-11">
              병원 마케팅 팀장 12년 경력 대표와 <br />각 분야 전문가가 모인 팀
            </p>
          </div>
          <div className="md:flex gap-8">
            <div className="mx-auto mb-2.5 md:mb-0 md:mx-0 w-48 h-48 overflow-hidden rounded-full relative flex-shrink-0 bg-[#E2E2E2]">
              <Image src="/introduce-1.png" alt="소개1" fill />
            </div>
            <div>
              <p className="text-2xl">
                <b className="text-3xl mr-1">최지훈</b>소이컴퍼니 대표
              </p>
              <span className="inline-block mb-5">
                병원 인하우스 마케팅 경력 12년
              </span>
              <p className="break-keep text-sm">
                병원 안에서 직접 부딪히고, 현장의 흐름을 읽으며 마케팅을
                해왔습니다.
                <br /> 원장님의 고민을 누구보다 잘 이해하고, 환자와의 접점을
                어떻게 만들지 끊임없이 고민해온 실무형 대표입니다.
                <br /> 진짜 병원 마케팅은 책이 아니라, 현장에서 배웠습니다.
                <br />
                그래서 더 현실적이고, 그래서 더 효과적으로 움직입니다.
              </p>
            </div>
          </div>
        </article>

        <ul className="mt-15 text-sm text-[#005432] text-center xl:flex xl:border-t-[20px] xl:justify-between">
          {historyList.map((list, index) => (
            <li key={index} className="mb-5">
              <p>{list.companyRole}</p>
              <p>{list.companyStats}</p>
            </li>
          ))}
        </ul>
        <article className="mt-28 md:mt-40 flex flex-col items-center md:grid md:grid-cols-3 md:gap-3 lg:grid-cols-5">
          {teamList.map((item, index) => (
            <li key={index} className={cardClass}>
              <div>
                <span className="block bg-black rounded-xs w-9 h-1 mb-3.5"></span>
                <b className="inline-block mb-3.5 break-keep">{item.title}</b>
                <p className="break-keep text-sm">{item.text}</p>
              </div>
              <div className="w-36 h-36 absolute bottom-9 lg:bottom-4 right-2.5">
                <Image src={item.img} alt={item.title} fill />
              </div>
            </li>
          ))}
        </article>
        <article className="mt-20 md:mt-60 md:flex md:justify-between">
          <div className="md:flex-1">
            <h4 className="font-bold text-2xl md:text-3xl mb-5">
              병원을 진심으로 이해하고,
              <br /> 함께 성장하는 마케팅 파트너
            </h4>
            <p className="break-keep mb-4 text-sm md:text-base">
              소이컴퍼니는 단순히 광고를 대행하는 외부 업체가 아닙니다. <br />
              병원 안에서 직접 마케팅을 경험한 사람들이, 원장님의 입장에서 함께
              고민하고 실행합니다.
              <br /> 이해하지 못한 채 겉도는 마케팅이 아닌,
              <br /> 병원의 철학과 진료 방향을 제대로 반영한 ‘진짜 브랜딩’을
              만들어갑니다.
              <br /> 병원 한 곳 한 곳과 오래도록 함께 성장하고 싶은 마음,
              <br /> 그 마음이 저희가 움직이는 가장 큰 이유입니다.
            </p>
          </div>
          <ul className="md:w-[400px] lg:w-[430px]">
            <MarketingSwiper />
          </ul>
        </article>
      </section>

      <section id="marketing">
        <div className="bg-[#F2F2F2] py-10 px-6 mb-15">
          <div className="mb-10">
            <h3 className="text-lg text-[#005432] font-bold inline-block mb-3.5">
              소이컴퍼니 컨텐츠
            </h3>
            <p className="text-2xl tracking-tighter md:text-3xl font-bold md:leading-11">
              소이컴퍼니는 이런 일을 해요
            </p>
          </div>

          <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-none lg:flex mb-18.5">
            {doingList.map((list, index) => (
              <li
                key={index}
                className="text-center lg:text-left p-2.5 w-full h-68 border-b border-dashed border-[#CBCFCE] md:border-b-0 md:even:border-l lg:first:border-l-0 lg:border-l"
              >
                <b className="block mb-10 text-7xl text-[#005432]">
                  {index + 1}
                </b>
                <span className="font-bold inline-block mb-12.5 lg:mb-8">
                  {list.title}
                </span>
                <p className="text-[#5C5C5C] break-keep">{list.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <article>
          <div className="mb-36">
            <div className="mb-10">
              <span className="inline-block text-lg text-[#005432] mb-3.5 font-bold">
                소이컴퍼니 컨텐츠 ①
              </span>
              <h5 className="font-bold text-3xl">홈페이지</h5>
              <p className="text-sm">
                첫인상을 좌우하는 온라인 명함 홈페이지. 병원 브랜드 아이덴티티를
                담은 구성으로 신뢰도와 접근성을 높입니다.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-3">
              <div>
                <div className="relative aspect-[16/10] w-full mb-3">
                  <Image
                    src="/homepage-1.png"
                    alt="homepage1"
                    fill
                    unoptimized
                  />
                </div>
                <div className="relative aspect-[16/10] w-full mb-3">
                  <Image
                    src="/homepage-4.png"
                    alt="homepage4"
                    fill
                    unoptimized
                  />
                </div>
              </div>
              <div>
                <div className="relative aspect-[16/10] w-full mb-3">
                  <Image
                    src="/homepage-2.png"
                    alt="homepage2"
                    fill
                    unoptimized
                  />
                </div>
                <div className="relative aspect-[16/10] w-full mb-3">
                  <Image
                    src="/homepage-5.png"
                    alt="homepage5"
                    fill
                    unoptimized
                  />
                </div>
              </div>
              <div>
                <div className="relative aspect-[16/10] w-full mb-3">
                  <Image
                    src="/homepage-3.png"
                    alt="homepage3"
                    fill
                    unoptimized
                  />
                </div>
                <div className="relative aspect-[16/10] w-full mb-3">
                  <Image
                    src="/homepage-6.png"
                    alt="homepage6"
                    fill
                    unoptimized
                  />
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="relative w-[180px] h-[350px] lg:h-[250px] lg:w-[140px] xl:h-[350px] flex-shrink-0">
                  <Image
                    src="/homepage-7.png"
                    alt="homepage7"
                    fill
                    unoptimized
                  />
                </div>
                <div className="relative w-[230px] h-[400px] lg:h-[300px] lg:w-[190px] xl:h-[400px] flex-shrink-0 -ml-17">
                  <Image
                    src="/homepage-8.png"
                    alt="homepage8"
                    fill
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-36">
            <div className="mb-10">
              <span className="inline-block text-lg text-[#005432] mb-3.5 font-bold">
                소이컴퍼니 컨텐츠 ②
              </span>
              <h5 className="font-bold text-3xl">플레이스</h5>
              <p className="text-sm">
                플레이스 검색 채널 최적화 작업과 우리 병원 지도 노출을 상단으로
                올립니다. 사진/후기/운영시간 등 최신 정보 업데이트를 통해 방문
                전 환자에게 정보를 전달합니다.
              </p>
            </div>

            <div className="lg:flex">
              <div className="relative h-45 lg:h-[230px] xl:h-[300px] w-full mb-3 lg:w-1/2">
                <Image src="/place-1.png" alt="place1" fill unoptimized />
              </div>

              <div className="lg:w-1/2">
                <div className="mb-2 lg:flex">
                  <ul className="pl-5 lg:self-center">
                    <li className="list-disc">플레이스 썸네일 및 사진</li>
                    <li className="list-disc">방문자 리뷰 및 블로그 리뷰</li>
                    <li className="list-disc">네이버 예약 및 네이버톡톡</li>
                    <li className="list-disc">플레이스 유입 통계</li>
                  </ul>
                  <div className="w-full mx-auto relative aspect-[1/1] lg:w-1/2 max-w-[250px]">
                    <Image src="/place-4.png" alt="place4" fill unoptimized />
                  </div>
                </div>
                <div>
                  <span className="lg:block text-center">
                    플레이스 상단 노출
                  </span>
                  <div className="lg:flex">
                    <div className="w-full relative aspect-[16/9] max-h-[150px]">
                      <Image src="/place-2.png" alt="place2" fill unoptimized />
                    </div>
                    <div className="w-full relative aspect-[16/9] max-h-[150px]">
                      <Image src="/place-3.png" alt="place3" fill unoptimized />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-36">
            <div className="mb-10">
              <span className="inline-block text-lg text-[#005432] mb-3.5 font-bold">
                소이컴퍼니 컨텐츠 ③
              </span>
              <h5 className="font-bold text-3xl">블로그</h5>
              <p className="text-sm">
                진료사례, Q&A, 정보성 포스팅을 체계적으로 구성하여 검색 노출과
                브랜드 신뢰도, 전환율까지 고려한 블로그 마케팅을 진행합니다.
                원장님의 가치 철학글 및 소개글을 어떤 방식으로 표현하고
                싶으신가요?
              </p>
            </div>

            <div className="md:grid md:grid-cols-2 gap-2.5">
              <div className="mb-4">
                <div className="relative w-full aspect-[16/9] bg-[url('/blog-1.png')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#CCFF99]/80"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <p className="font-bold text-center mb-7">
                      #전문적인 #정확한 #심도있는 #결과로 증명할 수 있는 전문성
                    </p>
                    <ul>
                      <li className="list-disc">
                        Before & After가 확실한 진료 분야
                      </li>
                      <li className="list-disc">
                        비급여, 고관여 급여과(연속성)
                      </li>
                      <li className="list-disc">
                        개원 후 임상자료가 풍부한 경우
                      </li>
                      <li className="list-disc">
                        최적화 블로그 상위노출 + 임상
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="block text-center">임상형</span>
              </div>

              <div>
                <div className="relative w-full aspect-[16/9] bg-[url('/blog-2.png')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#FFCC99]/80"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <p className="font-bold text-center mb-7">
                      #친근한 #감성적인 #긍정적인 #환자친화적 #따뜻한
                    </p>
                    <ul>
                      <li className="list-disc">
                        일상에서 궁금한 정보글을 통한 유입
                      </li>
                      <li className="list-disc">
                        직접촬영한 병원 이미지 + AI이미지 사용
                      </li>
                      <li className="list-disc">
                        환자의 마음에 공감하는 스토리텔링 글
                      </li>
                      <li className="list-disc">준최블 + 스마트블록</li>
                    </ul>
                  </div>
                </div>
                <span className="block text-center">스토리텔링형</span>
              </div>
            </div>
          </div>

          <div className="mb-36">
            <div className="mb-10">
              <span className="inline-block text-lg text-[#005432] mb-3.5 font-bold">
                소이컴퍼니 컨텐츠 ④
              </span>
              <h5 className="font-bold text-3xl">유튜브</h5>
              <p className="text-sm">
                정보 제공과 공감 유도를 동시에 만족시키는 영상 콘텐츠를
                기획합니다. 환자 관점에서 궁금한 점을 중심으로 쉽게 풀어내며,
                병원의 친근한 이미지를 강조해 상담 전환율을 높입니다.
              </p>
            </div>

            <div className="lg:flex lg:gap-5">
              <div className="w-full relative aspect-[12/10] mb-6 lg:max-h-[400px]">
                <Image src="/youtube-1.png" alt="youtube1" fill unoptimized />
              </div>
              <div className="w-full relative aspect-[2/3]">
                <Image src="/youtube-2.png" alt="youtube2" fill unoptimized />
              </div>
            </div>
          </div>

          <div className="mb-2">
            <div className="mb-10">
              <span className="inline-block text-lg text-[#005432] mb-3.5 font-bold">
                소이컴퍼니 컨텐츠 ⑤
              </span>
              <h5 className="font-bold text-3xl">기타 마케팅</h5>
              <p className="text-sm">
                병원 마케팅 완성도를 높이는 종합 마케팅 서비스. 영상 및
                사진촬영, 카드뉴스·SNS 디자인, 의료광고 심의 등 다양한 상황에
                맞는 맞춤형 솔루션을 제공합니다.
              </p>
            </div>

            <ul className="mb-15 grid grid-cols-2 md:grid-cols-4">
              <li>
                <div className="w-full relative aspect-[1/1]">
                  <Image
                    src="/marketing-1.png"
                    alt="marketing-1"
                    fill
                    unoptimized
                  />
                </div>
                <span className="block text-center">디자인</span>
              </li>
              <li>
                <div className="w-full relative aspect-[1/1]">
                  <Image
                    src="/marketing-2.png"
                    alt="marketing-2"
                    fill
                    unoptimized
                  />
                </div>
                <span className="block text-center">촬영</span>
              </li>
              <li>
                <div className="w-full relative aspect-[1/1]">
                  <Image
                    src="/marketing-3.png"
                    alt="marketing-3"
                    fill
                    unoptimized
                  />
                </div>
                <span className="block text-center">의료심의</span>
              </li>
              <li>
                <div className="w-full relative aspect-[1/1]">
                  <Image
                    src="/marketing-4.png"
                    alt="marketing-4"
                    fill
                    unoptimized
                  />
                </div>
                <span className="block text-center">광고 셋팅</span>
              </li>
            </ul>

            <div className="relative w-full aspect-[1/1] lg:aspect-[1/1] lg:max-h-[700px] bg-[url('/background.jpg')] bg-cover bg-center pt-20 px-5 pb-8">
              <div className="absolute inset-0 bg-[#005432]/80"></div>
              <div className="relative z-10">
                <p className="font-bold text-white mb-7">
                  병원 마케팅, 신환 유입, 매출 향상
                  <br /> 누구보다 잘 알고 자신 있습니다.
                </p>
                <p className="break-keep text-sm text-white mb-17.5">
                  병원과 파트너를 맺은 후, 매출 부진으로 인한 이탈률 0% 유지
                  <br />
                  소이컴퍼니는 파트너 병원과 협력한 이후, 매출 부진으로 인한
                  이탈률이 한 번도 발생하지 않았습니다.
                  <br /> 이것은 병원의 성장과 성과를 최우선으로 생각하며, 끝까지
                  함께 고민하고 노력하는 결과입니다.
                </p>
                <ul className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-5">
                  <li className="px-5 py-3.5 pt-3.5 bg-white text-center rounded-xl">
                    <span className="inline-block text-xl font-bold py-2.5 px-1.5 border-t-4">
                      01
                    </span>
                    <p className="text-sm break-keep">
                      동탄 A한의원
                      <br /> 월 매출 3천 만원대 에서
                      <br /> 8천만원을 달성
                    </p>
                  </li>
                  <li className="px-5 py-3.5 pt-3.5 bg-white text-center rounded-xl">
                    <span className="inline-block text-xl font-bold py-2.5 px-1.5 border-t-4">
                      02
                    </span>
                    <p className="text-sm break-keep">
                      용산 B한의원 평균 월 매출 2억 2천만원을 기록하며 최고
                      매출을 달성
                    </p>
                  </li>
                  <li className="px-5 py-3.5 pt-3.5 bg-white text-center rounded-xl">
                    <span className="inline-block text-xl font-bold py-2.5 px-1.5 border-t-4">
                      03
                    </span>
                    <p className="text-sm break-keep">
                      분당 C정형외과 월 광고비 4천만원에서 2천 만원을 절감, 매출
                      저하 없이 유지
                    </p>
                  </li>
                  <li className="px-5 py-3.5 pt-3.5 bg-white text-center rounded-xl">
                    <span className="inline-block text-xl font-bold py-2.5 px-1.5 border-t-4">
                      04
                    </span>
                    <p className="text-sm break-keep">
                      안양 D한방병원 6개월 만에 평균 매출 6억에서 최고 매출 8억
                      3천만원을 달성
                    </p>
                  </li>
                  <li className="px-5 py-3.5 pt-3.5 bg-white text-center rounded-xl">
                    <span className="inline-block text-xl font-bold py-2.5 px-1.5 border-t-4">
                      05
                    </span>
                    <p className="text-sm break-keep">
                      분당 E치과 매년 매출 상승, 강남으로 이전
                    </p>
                  </li>
                  <li className="px-5 py-3.5 pt-3.5 bg-white text-center rounded-xl">
                    <span className="inline-block text-xl font-bold py-2.5 px-1.5 border-t-4">
                      06
                    </span>
                    <p className="text-sm break-keep">
                      부천 F치과 플레이스와 숏폼 작업 후 매출 4천만원 상승
                    </p>
                  </li>
                  <li className="px-5 py-3.5 pt-3.5 bg-white text-center rounded-xl">
                    <span className="inline-block text-xl font-bold py-2.5 px-1.5 border-t-4">
                      07
                    </span>
                    <p className="text-sm break-keep">
                      용인 G입원실 한의원 계약 후 월 평균 매출 3천만원 상승, 월
                      1억 7천만원 달성
                    </p>
                  </li>
                  <li className="px-5 py-3.5 pt-3.5 bg-white text-center rounded-xl">
                    <span className="inline-block text-xl font-bold py-2.5 px-1.5 border-t-4">
                      08
                    </span>
                    <p className="text-sm break-keep">
                      안양 H산부인과 유튜브 운영 후 시술 상담과 건수가 증가하며
                      매출 상승
                    </p>
                  </li>
                </ul>

                <p className="text-sm text-white/60">
                  ※ 소이컴퍼니는 다양한 병원과의 협력을 통해 실제 매출 향상을
                  이끌어낸 사례들을 보여줍니다.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="test" className="mb-15">
        <div className="carousel py-5 overflow-hidden flex">
          <div className="group flex gap-5 pr-5">
            {logoList.map((list, index) => (
              <div key={index} className="card w-[250px] h-[80px] relative">
                <Image src={list} alt={`logo${index + 1}`} fill />
              </div>
            ))}
          </div>
          <div className="group flex gap-5 pr-5">
            {logoList.map((list, index) => (
              <div key={index} className="card w-[250px] h-[80px] relative">
                <Image src={list} alt={`logo${index + 1}`} fill />
              </div>
            ))}
          </div>
        </div>

        <p className="text-right text-[#005432] text-sm">
          ※ 소이컴퍼니와 함께한 곳
        </p>
      </section>

      <div className="flex justify-center relative mb-9">
        <div className="relative w-[80px] h-[50px] md:w-[120px] md:h-[80px]">
          <Image src="/main-logo-g.png" alt="logo-sub" fill unoptimized />
        </div>
      </div>
    </main>
  );
}
