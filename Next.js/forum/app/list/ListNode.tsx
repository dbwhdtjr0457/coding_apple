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
    </div>
  );
}
