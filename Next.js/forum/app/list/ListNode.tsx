"use client";

import Link from "next/link";

type Document = {
  _id: string;
  title: string;
  content: string;
};

export default function ListNode(props: Document) {
  return (
    <div className="list-item">
      <Link href={`/list/${props._id}`} className="list-link">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </Link>
      <Link href={`/edit/${props._id}`}>
        <button className="edit-button">수정</button>
      </Link>
      <button
        onClick={async () => {
          let deleteFetch = await fetch("/api/post/delete", {
            method: "DELETE",
            body: JSON.stringify({ id: props._id }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (deleteFetch.status === 200) {
            window.location.reload();
          } else {
            alert("삭제에 실패했습니다.");
          }
        }}
      >
        🗑️
      </button>
    </div>
  );
}
