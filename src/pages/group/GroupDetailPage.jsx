import { useParams } from "react-router-dom";
import { useState } from "react";

// 💡 임시 더미 데이터
const mockGroup = {
  id: 1,
  name: "위로 나누기 그룹",
  description: "서로 따뜻한 말 한마디를 공유해요.",
};

const mockDiaries = [
  {
    id: 1,
    author: "예주",
    content: "오늘 좀 지치긴 했지만 버틸만 했어.",
    tag: "감사",
    comfortMessage: "오늘도 고생했어요. 정말요. 💛",
    liked: false,
  },
  {
    id: 2,
    author: "우진",
    content: "모두가 날 싫어하는 것 같은 느낌이야...",
    tag: "우울",
    comfortMessage: "당신은 혼자가 아니에요.",
    liked: true,
  },
];

function GroupDetailPage() {
  const { id } = useParams();
  const [diaries, setDiaries] = useState(mockDiaries);

  const toggleLike = (diaryId) => {
    const updated = diaries.map((d) =>
      d.id === diaryId ? { ...d, liked: !d.liked } : d
    );
    setDiaries(updated);
  };

  const getTagColor = (tag) => {
    switch (tag) {
      case "기쁨":
        return "is-success";
      case "감사":
        return "is-warning";
      case "우울":
      case "불안":
        return "is-danger";
      default:
        return "is-info";
    }
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 className="title">{mockGroup.name}</h1>
        <p className="subtitle is-6 has-text-grey">{mockGroup.description}</p>
        <hr />

        {diaries.map((diary) => (
          <div className="box mb-5" key={diary.id}>
            <p className="has-text-weight-semibold">{diary.author}의 일기</p>

            <blockquote className="is-italic mt-2 mb-2">
              "{diary.content}"
            </blockquote>

            <span className={`tag ${getTagColor(diary.tag)} is-light`}>
              {diary.tag}
            </span>

            <p className="has-text-grey mt-3 mb-2 is-size-7">
              AI 위로: "{diary.comfortMessage}"
            </p>

            <button
              className={`button is-small ${
                diary.liked ? "is-danger is-light" : "is-link is-outlined"
              }`}
              onClick={() => toggleLike(diary.id)}
            >
              {diary.liked ? "❤️ 좋아요 취소" : "🤍 좋아요"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GroupDetailPage;
