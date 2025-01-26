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
        onClick={async (e) => {
          let deleteFetch = await fetch(`/api/post/delete/${props._id}`, {
            method: "DELETE",
          });
          if (deleteFetch.status === 200) {
            const target = e.target as HTMLButtonElement;
            if (!target.parentElement) return;
            target.parentElement.style.opacity = "0";
            setTimeout(() => {
              if (!target.parentElement) return;
              target.parentElement.style.display = "none";
            }, 500);
          } else {
            alert("삭제에 실패했습니다.");
            window.location.reload();
          }
        }}
      >
        🗑️
      </button>
    </div>
  );
}
