// app/projet/[id]/page.tsx
"use client";
import { Item } from "@/app/components/Item";
import { useParams } from "next/navigation";

export default function ProjectPage() {
    const params = useParams();
    const id = params.id as string;

    return <Item id={id} />;
}
