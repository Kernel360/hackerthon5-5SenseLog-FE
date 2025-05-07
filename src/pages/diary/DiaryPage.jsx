import { useState } from "react";

function DiaryPage() {
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mockTag, setMockTag] = useState("");
  const [mockMessage, setMockMessage] = useState("");

  const tags = ["기쁨", "우울", "감사", "불안", "분노"];
  const messages = [
    "오늘도 잘 버텨줘서 고마워요 💛",
    "감정은 흘러가고, 당신은 남아요.",
    "내일의 나에게 기대해도 좋아요.",
    "지금 이 순간도 충분히 소중해요.",
    "괜찮아, 누구나 그런 날이 있어요.",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMockTag(randomTag);
    setMockMessage(randomMessage);
    setSubmitted(true);
    setContent("");
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "600px" }}>
        <h1 className="title has-text-centered has-text-link-dark">
          오늘의 한 문장
        </h1>

        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">한 문장 일기</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="오늘 하루를 한 문장으로 표현해보세요."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  maxLength={100}
                  rows={4}
                />
              </div>
              <p className="help is-info">{content.length} / 100자</p>
            </div>

            <div className="control">
              <button
                type="submit"
                className="button is-link is-fullwidth"
                disabled={content.trim() === ""}
              >
                작성하기
              </button>
            </div>
          </form>
        </div>

        {submitted && (
          <div className="notification is-light has-text-centered">
            <p className="is-size-5 mb-2">
              <strong>감정 태그:</strong>{" "}
              <span
                className={`tag is-medium is-${
                  mockTag === "기쁨"
                    ? "success"
                    : mockTag === "감사"
                    ? "warning"
                    : "danger"
                }`}
              >
                {mockTag}
              </span>
            </p>
            <p className="has-text-grey-dark">"{mockMessage}"</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default DiaryPage;
