import { useParams } from "react-router-dom";

// 💡 테스트용 더미 데이터
const mockDiary = {
  id: 1,
  content: "오늘 하루 너무 지쳤어요. 그냥 잠들고 싶다.",
  tag: "우울",
  comfortMessage: "오늘도 잘 버텨줘서 고마워요 💙",
  createdAt: "2025-05-10",
  author: "나",
};

function DiaryDetailPage() {
  const { id } = useParams();

  // 💡 실제로는 fetch(`/api/diaries/${id}`)로 가져오게 됨
  const diary = mockDiary;

  // 감정 태그 색상 설정
  const tagColor =
    diary.tag === "기쁨"
      ? "is-success"
      : diary.tag === "감사"
      ? "is-warning"
      : diary.tag === "우울" || diary.tag === "불안"
      ? "is-danger"
      : "is-info";

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "700px" }}>
        <h1 className="title has-text-centered has-text-link-dark">
          일기 상세 보기
        </h1>

        <div className="box">
          <p className="has-text-grey mb-1">
            <strong>작성자:</strong> {diary.author} &nbsp; | &nbsp;
            <strong>작성일:</strong> {diary.createdAt}
          </p>

          <article className="content">
            <blockquote className="is-size-5 has-text-weight-medium has-text-dark">
              "{diary.content}"
            </blockquote>
          </article>

          <div className="mt-4">
            <span className={`tag is-medium ${tagColor}`}>{diary.tag}</span>
          </div>

          <hr />

          <div className="has-text-centered">
            <p className="is-size-6 has-text-grey">AI 위로 문장</p>
            <p className="is-size-5 has-text-weight-semibold mt-2">
              "{diary.comfortMessage}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiaryDetailPage;
